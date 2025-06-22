import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import WorkshopsPage from './components/WorkshopsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

type PageType = 'home' | 'about' | 'services' | 'workshops' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'workshops':
        return <WorkshopsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        {renderCurrentPage()}
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}

export default App;