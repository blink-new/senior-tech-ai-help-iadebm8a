import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                SeniorTech
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('footer.mission')}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">hello@seniortech.app</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">(514) 123-TECH</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-purple-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">Montreal, Quebec</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workshops')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('nav.workshops')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {/* TODO: Add privacy policy */}}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('footer.privacy')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {/* TODO: Add terms */}}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('footer.terms')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {/* TODO: Add newsletter */}}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  {t('footer.newsletter')}
                </button>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                <button
                  onClick={() => {/* TODO: Add Facebook link */}}
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </button>
                <button
                  onClick={() => {/* TODO: Add Twitter link */}}
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </button>
                <button
                  onClick={() => {/* TODO: Add LinkedIn link */}}
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with ❤️ for Montreal seniors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;