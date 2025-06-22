import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.workshops': 'Workshops',
    'nav.contact': 'Contact',
    'nav.language': 'Français',
    
    // Hero Section
    'hero.title': 'Empowering Seniors with Technology and AI — One Step at a Time.',
    'hero.subtitle': 'We help older adults in Montreal use digital tools and AI confidently — online or in person.',
    'hero.cta.primary': 'Book a Free Session',
    'hero.cta.secondary': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive tech support designed specifically for seniors',
    'services.digital.title': 'Digital Literacy & Tech Help',
    'services.digital.desc': 'Master your devices, stay safe online, and handle essential digital tasks with confidence.',
    'services.digital.item1': 'Setting up phones, tablets, and computers',
    'services.digital.item2': 'Email, video calls, and messaging',
    'services.digital.item3': 'Online banking and shopping safely',
    'services.digital.item4': 'Password management and security',
    'services.ai.title': 'AI for Daily Life',
    'services.ai.desc': 'Learn to use AI tools like ChatGPT to simplify your daily tasks and stay informed.',
    'services.ai.item1': 'Introduction to ChatGPT and voice assistants',
    'services.ai.item2': 'AI for writing emails and summaries',
    'services.ai.item3': 'Understanding how AI works',
    'services.ai.item4': 'Spotting AI scams and misinformation',
    
    // About
    'about.title': 'About SeniorTech',
    'about.subtitle': 'A Montreal-based team dedicated to empowering seniors with technology',
    'about.desc': 'We are a multidisciplinary team of engineers, AI specialists, designers, and community workers. We combine deep technical knowledge with human-centered service to help older adults navigate the digital world safely and confidently.',
    
    // Contact
    'contact.title': 'Get Started Today',
    'contact.subtitle': 'Book your free consultation or ask us any questions',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.language': 'Preferred Language',
    'contact.form.language.en': 'English',
    'contact.form.language.fr': 'French',
    'contact.form.needs': 'What would you like help with?',
    'contact.form.submit': 'Send Message',
    
    // Workshops
    'workshops.title': 'Workshops & Community Events',
    'workshops.subtitle': 'Join our group sessions at libraries and senior centers across Montreal',
    'workshops.upcoming': 'Upcoming Workshops',
    
    // Footer
    'footer.mission': 'Empowering seniors with technology and AI, one step at a time.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.newsletter': 'Newsletter',
    'footer.copyright': '© 2024 SeniorTech. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.workshops': 'Ateliers',
    'nav.contact': 'Contact',
    'nav.language': 'English',
    
    // Hero Section
    'hero.title': 'Accompagner les aînés dans le monde numérique et l\'intelligence artificielle – pas à pas.',
    'hero.subtitle': 'Nous aidons les personnes âgées de Montréal à utiliser les outils numériques et l\'IA en toute confiance — en ligne ou en personne.',
    'hero.cta.primary': 'Réservez une session gratuite',
    'hero.cta.secondary': 'En savoir plus',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Support technologique complet conçu spécifiquement pour les aînés',
    'services.digital.title': 'Littératie numérique et aide technologique',
    'services.digital.desc': 'Maîtrisez vos appareils, naviguez en sécurité en ligne et gérez vos tâches numériques essentielles avec confiance.',
    'services.digital.item1': 'Configuration de téléphones, tablettes et ordinateurs',
    'services.digital.item2': 'Email, appels vidéo et messagerie',
    'services.digital.item3': 'Banque en ligne et achats sécurisés',
    'services.digital.item4': 'Gestion des mots de passe et sécurité',
    'services.ai.title': 'IA pour la vie quotidienne',
    'services.ai.desc': 'Apprenez à utiliser des outils d\'IA comme ChatGPT pour simplifier vos tâches quotidiennes et rester informé.',
    'services.ai.item1': 'Introduction à ChatGPT et aux assistants vocaux',
    'services.ai.item2': 'IA pour rédiger des emails et des résumés',
    'services.ai.item3': 'Comprendre comment fonctionne l\'IA',
    'services.ai.item4': 'Détecter les arnaques IA et la désinformation',
    
    // About
    'about.title': 'À propos de SeniorTech',
    'about.subtitle': 'Une équipe montréalaise dédiée à l\'autonomisation des aînés avec la technologie',
    'about.desc': 'Nous sommes une équipe multidisciplinaire d\'ingénieurs, de spécialistes en IA, de designers et de travailleurs communautaires. Nous combinons une connaissance technique approfondie avec un service centré sur l\'humain pour aider les personnes âgées à naviguer dans le monde numérique de manière sûre et confiante.',
    
    // Contact
    'contact.title': 'Commencez dès aujourd\'hui',
    'contact.subtitle': 'Réservez votre consultation gratuite ou posez-nous vos questions',
    'contact.form.name': 'Votre nom',
    'contact.form.email': 'Adresse email',
    'contact.form.phone': 'Numéro de téléphone',
    'contact.form.language': 'Langue préférée',
    'contact.form.language.en': 'Anglais',
    'contact.form.language.fr': 'Français',
    'contact.form.needs': 'Dans quoi aimeriez-vous de l\'aide?',
    'contact.form.submit': 'Envoyer le message',
    
    // Workshops
    'workshops.title': 'Ateliers et événements communautaires',
    'workshops.subtitle': 'Rejoignez nos sessions de groupe dans les bibliothèques et centres pour aînés à travers Montréal',
    'workshops.upcoming': 'Ateliers à venir',
    
    // Footer
    'footer.mission': 'Accompagner les aînés avec la technologie et l\'IA, pas à pas.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.newsletter': 'Infolettre',
    'footer.copyright': '© 2024 SeniorTech. Tous droits réservés.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};