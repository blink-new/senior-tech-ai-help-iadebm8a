import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, Clock, Brain, Smartphone, Shield, CheckCircle } from 'lucide-react';

interface WorkshopsPageProps {
  onNavigate: (page: string) => void;
}

const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const upcomingWorkshops = [
    {
      title: 'Getting Started with ChatGPT',
      date: 'February 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Atwater Library',
      spots: 6,
      maxParticipants: 8,
      icon: Brain,
      color: 'purple',
      description: 'Learn to use ChatGPT safely for writing emails, getting information, and daily tasks.',
    },
    {
      title: 'Online Safety for Seniors',
      date: 'February 20, 2024', 
      time: '10:00 AM - 12:00 PM',
      location: 'NDG Senior Centre',
      spots: 3,
      maxParticipants: 10,
      icon: Shield,
      color: 'red',
      description: 'Essential tips for avoiding scams, protecting personal information, and safe browsing.',
    },
    {
      title: 'Smartphone Basics Workshop',
      date: 'February 25, 2024',
      time: '1:30 PM - 3:30 PM', 
      location: 'Westmount Library',
      spots: 2,
      maxParticipants: 6,
      icon: Smartphone,
      color: 'blue',
      description: 'Master your smartphone: calls, texts, photos, apps, and essential settings.',
    },
  ];

  const workshopSeries = [
    {
      title: 'AI for Daily Life',
      sessions: 4,
      description: 'Complete introduction to artificial intelligence tools and how they can help with everyday tasks.',
      topics: [
        'Understanding AI: What it is and how it works',
        'ChatGPT for writing and planning',
        'Voice assistants (Siri, Alexa, Google)',
        'Detecting AI scams and misinformation'
      ],
      color: 'purple'
    },
    {
      title: 'Digital Essentials',
      sessions: 6,
      description: 'Comprehensive digital literacy covering all essential online skills for modern life.',
      topics: [
        'Device setup and basic navigation',
        'Email and video calling',
        'Online banking and shopping',
        'Password management and security',
        'Government and healthcare portals',
        'Social media basics and safety'
      ],
      color: 'blue'
    },
    {
      title: 'Staying Safe Online',
      sessions: 3,
      description: 'Focus on security, privacy, and avoiding online threats and scams.',
      topics: [
        'Recognizing and avoiding scams',
        'Password security and two-factor authentication',
        'Privacy settings and personal information protection'
      ],
      color: 'green'
    }
  ];

  const colorClasses = {
    purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200',
    blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-200',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
    orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
  };

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('workshops.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('workshops.subtitle')}
          </p>
        </div>

        {/* Upcoming Workshops */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('workshops.upcoming')}
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <div key={index} className="card-accessible group">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl mr-4 ${colorClasses[workshop.color as keyof typeof colorClasses]}`}>
                    <workshop.icon size={28} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    workshop.spots > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {workshop.spots > 0 ? `${workshop.spots} spots left` : 'Full'}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {workshop.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {workshop.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{workshop.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Max {workshop.maxParticipants} participants</span>
                  </div>
                </div>
                
                <button
                  onClick={() => onNavigate('contact')}
                  disabled={workshop.spots === 0}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    workshop.spots > 0
                      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {workshop.spots > 0 ? 'Register Now - $25' : 'Workshop Full'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Series */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Session Learning Series
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dive deeper with our comprehensive learning series designed to build skills progressively over multiple sessions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {workshopSeries.map((series, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${colorClasses[series.color as keyof typeof colorClasses]}`}>
                    {series.color === 'purple' && <Brain size={32} />}
                    {series.color === 'blue' && <Smartphone size={32} />}
                    {series.color === 'green' && <Shield size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {series.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {series.sessions} Sessions
                  </p>
                </div>

                <p className="text-gray-600 mb-6 text-center">
                  {series.description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900">Topics Covered:</h4>
                  {series.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    ${series.sessions * 20}/series
                  </p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full btn-secondary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Information */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Small Groups</h4>
                    <p className="text-gray-600">Maximum 8-10 participants for personalized attention</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hands-On Learning</h4>
                    <p className="text-gray-600">Bring your own device and practice in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Patient Instruction</h4>
                    <p className="text-gray-600">We go at your pace with plenty of time for questions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Take-Home Materials</h4>
                    <p className="text-gray-600">Written guides and resources to continue learning</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Seniors learning together in a workshop setting"
                className="rounded-2xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join a Workshop?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Register for upcoming workshops or inquire about private group sessions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary"
              >
                Register for Workshop
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary"
              >
                Request Private Session
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkshopsPage;