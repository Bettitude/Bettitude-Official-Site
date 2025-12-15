import React from 'react';
import { FiBarChart2, FiDatabase, FiTrendingUp, FiVideo, FiCpu, FiBriefcase, FiTarget, FiZap } from 'react-icons/fi';

const FooterService = () => {
  const services = [
    {
      id: 'analytics',
      icon: FiBarChart2,
      title: 'Betting Analytics & Combination',
      description: 'Sophisticated betting analytics that go beyond simple predictions. We leverage proprietary AI-driven predictive models that synthesize vast historical and real-time data to generate high-probability wagers.',
      features: [
        'Meticulously researched picks',
        'Tailored funds management plans',
        'Detailed risk analysis',
        'Strategic, data-informed investment approach'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50'
    },
    {
      id: 'data',
      icon: FiDatabase,
      title: 'Sports Stats and Data Gathering',
      description: 'At the heart of Bettitude is our comprehensive data gathering capability. We utilize robust, high-speed APIs and proprietary scraping technologies to collect, clean, and consolidate massive volumes of global sports data in real-time.',
      features: [
        'Real-time data collection',
        'Player performance metrics',
        'Team trends analysis',
        'Historical results database'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50'
    },
    {
      id: 'news',
      icon: FiTrendingUp,
      title: 'Sports News and Live Updates',
      description: 'Stay ahead with timely sports news and live updates. We deliver lightning-fast live scores, critical match events, and breaking news coverage, ensuring you\'re never behind the action.',
      features: [
        'Lightning-fast live scores',
        'Breaking news coverage',
        'Real-time data visualization',
        'Context-rich actionable insights'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50'
    },
    {
      id: 'media',
      icon: FiVideo,
      title: 'Sports Media and Production',
      description: 'Expanding our footprint with engaging and accessible content. We create video analysis segments, produce explanatory tutorials, develop insightful podcasts, and generate visually appealing infographics.',
      features: [
        'Video analysis segments',
        'Explanatory tutorials',
        'Insightful podcasts',
        'Visual infographics'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50'
    },
    {
      id: 'ai-research',
      icon: FiCpu,
      title: 'Stats Research and AI in Sports',
      description: 'The innovation engine of Bettitude. We invest heavily in designing and refining cutting-edge machine learning and deep learning models, identifying overlooked variables and optimizing predictive algorithms.',
      features: [
        'Machine learning models',
        'Predictive algorithm optimization',
        'Proprietary statistical methodologies',
        'Advanced technology research'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      bgGradient: 'from-[#FFC527]/10 to-[#0B0F19]/50'
    },
    {
      id: 'consultancy',
      icon: FiBriefcase,
      title: 'Sports Business Consultancy',
      description: 'Leveraging our deep expertise in sports data, technology, and analytics to provide specialized insights and solutions to professional sports teams, media companies, and investment firms.',
      features: [
        'Performance optimization models',
        'Scouting analysis',
        'Audience monetization strategies',
        'B2B sports tech authority'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      bgGradient: 'from-[#0057B8]/10 to-[#0B0F19]/50'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      
      {/* Hero Section */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Bettitude Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 lg:space-y-8 py-12 sm:py-16 lg:py-30">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <FiTarget className="text-[#FFC527] text-xs sm:text-sm" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">What We Do</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight px-4">
            Bettitude Core
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Services
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E0E0E0] max-w-4xl mx-auto leading-relaxed px-4">
            Transforming sports data into actionable insights through advanced AI, comprehensive analytics, and cutting-edge technology solutions
          </p>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-500 group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/5 group-hover:to-[#0057B8]/5 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
              
              <div className="relative space-y-5 sm:space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-white text-2xl sm:text-3xl lg:text-4xl" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center space-x-2 px-2 sm:px-3 py-1 bg-[#FFC527]/20 border border-[#FFC527]/30 rounded-full mb-2 sm:mb-3">
                      <span className="text-[#FFC527] text-xs sm:text-sm font-bold">Service {index + 1}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center">
                    <FiZap className="text-[#FFC527] mr-2" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 bg-[#0B0F19]/30 backdrop-blur-sm border border-[#0057B8]/20 rounded-lg p-2 sm:p-3 hover:border-[#FFC527]/40 transition-all duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-[#E0E0E0]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#FFC527]/30 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center overflow-hidden group hover:border-[#FFC527]/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#0057B8]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 transition-all duration-500 rounded-2xl sm:rounded-3xl"></div>
          
          <div className="relative space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              Ready to Experience
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Our Services?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#E0E0E0] max-w-3xl mx-auto">
              Discover how Bettitude's cutting-edge technology and data-driven insights can transform your sports experience
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/contact"
                className="group/btn flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
              >
                <span>Get Started</span>
                <FiTarget className="text-xl group-hover/btn:rotate-90 transition-transform duration-300" />
              </a>
              <a
                href="/about"
                className="group/btn flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#0057B8]/20 border border-[#0057B8]/50 text-white rounded-xl font-bold hover:bg-[#0057B8]/30 hover:border-[#0057B8] hover:scale-105 transition-all duration-300"
              >
                <span>Learn More</span>
                <FiZap className="text-xl group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterService;