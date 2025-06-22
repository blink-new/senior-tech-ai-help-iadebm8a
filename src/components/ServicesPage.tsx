import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Smartphone, 
  Brain, 
  Shield, 
  CreditCard, 
  Video, 
  Lock, 
  MessageSquare, 
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const digitalServices = [
    {
      icon: Smartphone,
      title: 'Device Setup & Basics',
      description: 'Learn to set up and navigate your smartphone, tablet, or computer with confidence.',
      color: 'blue'
    },
    {
      icon: Video,
      title: 'Video Calls & Communication',
      description: 'Master Zoom, Skype, FaceTime, and other video calling platforms to stay connected.',
      color: 'green'
    },
    {
      icon: CreditCard,
      title: 'Online Banking & Shopping',
      description: 'Safely manage your finances and shop online with secure practices.',
      color: 'purple'
    },
    {
      icon: Lock,
      title: 'Password & Security Management',
      description: 'Create strong passwords, use password managers, and protect your accounts.',
      color: 'orange'
    },
  ];

  const aiServices = [
    {
      icon: Brain,
      title: 'ChatGPT & AI Assistants',
      description: 'Learn to use AI tools like ChatGPT for writing, planning, and answering questions.',
      color: 'indigo'
    },
    {
      icon: MessageSquare,
      title: 'AI for Daily Tasks',
      description: 'Use AI to help write emails, create shopping lists, and summarize information.',
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'AI Safety & Understanding',
      description: 'Understand how AI works and learn to identify AI-generated content.',
      color: 'teal'
    },
    {
      icon: AlertTriangle,
      title: 'Scam & Misinformation Detection',
      description: 'Recognize AI-generated scams, deepfakes, and misinformation to stay safe.',
      color: 'red'
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-200',
    indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200',
    pink: 'bg-pink-100 text-pink-600 group-hover:bg-pink-200',
    teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-200',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-200',
  };

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Digital Literacy Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <Smartphone className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.digital.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.digital.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <div key={index} className="card-accessible group">
                <div className={`p-4 rounded-xl mb-4 inline-flex ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
              <Brain className="text-purple-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.ai.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.ai.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <div key={index} className="card-accessible group">
                <div className={`p-4 rounded-xl mb-4 inline-flex ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Approach */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalized Learning
                    </h3>
                    <p className="text-gray-600">
                      We adapt our teaching style to your learning pace and preferences, ensuring you feel comfortable and confident.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Hands-On Practice
                    </h3>
                    <p className="text-gray-600">
                      Learn by doing with guided practice sessions using your own devices in a safe, supportive environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      Get continued assistance with follow-up sessions and email support to reinforce your learning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Safety First
                    </h3>
                    <p className="text-gray-600">
                      Every lesson includes security best practices to keep you safe online and protect your personal information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Personalized technology learning session"
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            All sessions include personalized instruction, hands-on practice, and follow-up support materials.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Consultation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-200">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-4xl font-bold text-green-600 mb-4">$0</p>
              <p className="text-gray-600 mb-6">
                30-minute session to understand your needs and create a personalized learning plan.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-sm">Needs assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-sm">Custom learning plan</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-sm">No commitment required</span>
                </li>
              </ul>
            </div>

            {/* Individual Sessions */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual Sessions</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$60/hr</p>
              <p className="text-gray-600 mb-6">
                One-on-one personalized instruction tailored to your specific needs and goals.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-500 mr-2" size={16} />
                  <span className="text-sm">Personalized instruction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-500 mr-2" size={16} />
                  <span className="text-sm">Your own device</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-500 mr-2" size={16} />
                  <span className="text-sm">Online or in-person</span>
                </li>
              </ul>
            </div>

            {/* Group Workshops */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-200">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Group Workshops</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">$25/person</p>
              <p className="text-gray-600 mb-6">
                Small group sessions at community centers and libraries across Montreal.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Small groups (4-8 people)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Community locations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-purple-500 mr-2" size={16} />
                  <span className="text-sm">Social learning environment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-8 py-4"
            >
              Book Your Free Consultation
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;