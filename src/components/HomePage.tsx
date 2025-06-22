import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Smartphone, Brain, Users, Shield, Heart, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleBookSession = () => {
    onNavigate('contact');
  };

  const handleLearnMore = () => {
    onNavigate('services');
  };

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBookSession}
                  className="btn-primary flex items-center justify-center space-x-2 group"
                  aria-describedby="cta-description"
                >
                  <span>{t('hero.cta.primary')}</span>
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                </button>
                <button
                  onClick={handleLearnMore}
                  className="btn-secondary flex items-center justify-center"
                >
                  {t('hero.cta.secondary')}
                </button>
              </div>
              <p id="cta-description" className="sr-only">
                Book a free consultation to get personalized help with technology and AI
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="animate-slide-up lg:order-last">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Older adult smiling and enjoying using a computer at home"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-green-500/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Literacy Card */}
            <div className="card-accessible group">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                  <Smartphone className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('services.digital.title')}
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('services.digital.desc')}
              </p>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <Shield className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      {t(`services.digital.item${num}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI for Daily Life Card */}
            <div className="card-accessible group">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                  <Brain className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('services.ai.title')}
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('services.ai.desc')}
              </p>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start">
                    <Brain className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      {t(`services.ai.item${num}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleLearnMore}
              className="btn-primary"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {t('about.desc')}
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Users className="text-blue-600" size={28} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Expert Team</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Heart className="text-green-600" size={28} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Human-Centered</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Shield className="text-purple-600" size={28} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Safe & Secure</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="btn-secondary"
              >
                Meet Our Team
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Diverse team of technology professionals working together"
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <button
            onClick={handleBookSession}
            className="bg-white text-blue-600 hover:bg-gray-50 font-bold text-xl px-8 py-4 rounded-xl border-2 border-white hover:border-gray-200 transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg min-h-[56px]"
          >
            {t('hero.cta.primary')}
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;