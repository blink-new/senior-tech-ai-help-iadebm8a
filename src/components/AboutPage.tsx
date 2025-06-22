import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Heart, Shield, Award, Mail } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mission Statement */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.desc')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in Montreal, we believe that age should never be a barrier to embracing technology. 
                Our patient, personalized approach ensures every senior can confidently navigate the digital world 
                and harness the power of AI to enhance their daily lives.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Team collaboration and mentorship"
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-green-500/10 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Human-Centered
              </h3>
              <p className="text-gray-600">
                Every interaction is designed around respect, patience, and understanding of unique learning needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Empathy First
              </h3>
              <p className="text-gray-600">
                We understand technology anxiety and create safe, supportive learning environments.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Safety & Security
              </h3>
              <p className="text-gray-600">
                Digital safety and privacy protection are integrated into every lesson and recommendation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We combine deep technical expertise with proven educational methods for the best outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section - Placeholder */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-blue-600" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sarah Chen
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                Founder & AI Specialist
              </p>
              <p className="text-gray-600 text-sm">
                PhD in Artificial Intelligence, 10+ years in ethical AI development. 
                Passionate about making AI accessible and beneficial for all ages.
              </p>
            </div>

            {/* Community Outreach */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="text-green-600" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Marie Dubois
              </h3>
              <p className="text-green-600 font-semibold mb-3">
                Community Relations
              </p>
              <p className="text-gray-600 text-sm">
                Former social worker with 15 years experience serving Montreal's senior community. 
                Bilingual advocate for digital inclusion.
              </p>
            </div>

            {/* Tech Education */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="text-purple-600" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                David Kim
              </h3>
              <p className="text-purple-600 font-semibold mb-3">
                Tech Education Lead
              </p>
              <p className="text-gray-600 text-sm">
                Former software engineer turned educator. Specializes in making complex 
                technology concepts simple and approachable.
              </p>
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Community Partners
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We're proud to collaborate with Montreal's leading community organizations to bring 
            technology education directly to seniors across the city.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Atwater Library</h3>
              <p className="text-sm text-gray-600">Weekly workshops and one-on-one sessions</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Heart className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">The Yellow Door</h3>
              <p className="text-sm text-gray-600">Community events and group learning</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">NDG Senior Centre</h3>
              <p className="text-sm text-gray-600">Regular AI literacy workshops</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Award className="text-orange-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Westmount Library</h3>
              <p className="text-sm text-gray-600">Monthly tech help sessions</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary"
          >
            <Mail className="mr-2" size={20} />
            Get in Touch
          </button>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;