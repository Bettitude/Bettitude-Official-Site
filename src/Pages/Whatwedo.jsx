import React, { useState } from 'react';
import { FiTrendingUp, FiBarChart2, FiRss, FiVideo, FiCpu, FiBriefcase, FiArrowRight, FiCheck } from 'react-icons/fi';

export default function Whatwedo() {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      icon: FiTrendingUp,
      title: 'Betting Analytics & Combination',
      description: 'We LOVE data. We gather and design the best possible betting picks to maximize your winning potential.',
      features: [
        'Advanced statistical models',
        'Multi-match combinations',
        'Risk assessment tools',
        'Odds comparison engine'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      glowColor: 'shadow-[#FFC527]/50'
    },
    {
      icon: FiBarChart2,
      title: 'Stats Gathering',
      description: 'There is no analytics without STATS. Finding out new betting trends is our thing—we track, analyze, and deliver.',
      features: [
        'Real-time data collection',
        'Historical trend analysis',
        'Performance metrics',
        'Pattern recognition'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      glowColor: 'shadow-[#0057B8]/50'
    },
    {
      icon: FiRss,
      title: 'News & Live Updates',
      description: 'Bringing you the latest on whatever interests you have towards football. Stay informed, stay ahead.',
      features: [
        'Breaking news alerts',
        'Live match updates',
        'Injury reports',
        'Transfer news coverage'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      glowColor: 'shadow-[#FFC527]/50'
    },
    {
      icon: FiVideo,
      title: 'Sports Media & Production',
      description: 'See your world through our EYES. Our backdoor original productions aim to bring the very best of content to you.',
      features: [
        'Original video content',
        'Match highlights',
        'Expert analysis shows',
        'Behind-the-scenes access'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      glowColor: 'shadow-[#0057B8]/50'
    },
    {
      icon: FiCpu,
      title: 'Stat Research & AI',
      description: 'Automation makes the FUN better. We constantly strive for up-to-date algorithms that predict with precision.',
      features: [
        'Machine learning models',
        'Predictive algorithms',
        'Automated insights',
        'Real-time AI analysis'
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      glowColor: 'shadow-[#FFC527]/50'
    },
    {
      icon: FiBriefcase,
      title: 'Sports Business Consultancy',
      description: 'Providing business and social connections via our B2B access through areas such as partnerships and strategic growth.',
      features: [
        'Partnership brokerage',
        'Market analysis',
        'Brand strategy',
        'Revenue optimization'
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      glowColor: 'shadow-[#0057B8]/50'
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full animate-in fade-in slide-in-from-top duration-700">
            <div className="w-2 h-2 bg-[#FFC527] rounded-full animate-pulse"></div>
            <span className="text-[#E0E0E0] text-sm font-semibold">Our Services</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
              What We Do
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Best</span>
            </h2>
            <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
              From cutting-edge analytics to premium content production, we deliver comprehensive solutions that keep you ahead of the game
            </p>
          </div>

          {/* Accent line */}
          <div className="flex justify-center animate-in fade-in duration-700 delay-200">
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl p-8 hover:border-[#FFC527]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: activeCard === index ? `0 20px 60px ${service.glowColor}` : 'none'
              }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-[#0B0F19] text-3xl" />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#FFC527] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#E0E0E0] leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start space-x-2 text-sm text-[#E0E0E0] opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <FiCheck className="text-[#FFC527] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-6">
                  <a 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center space-x-2 text-[#FFC527] font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Learn More</span>
                    <FiArrowRight className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-bl-full rounded-tr-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <div className="bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl p-12">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Experience the 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]"> Difference?</span>
            </h3>
            <p className="text-lg text-[#E0E0E0] mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust Bettitude for their betting intelligence and sports insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/appointment" 
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
              >
                <span>Get Started Now</span>
                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#0057B8]/20 backdrop-blur-sm border-2 border-[#0057B8] text-white font-bold rounded-xl hover:bg-[#0057B8]/40 transition-all duration-300"
              >
                <span>View All Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}