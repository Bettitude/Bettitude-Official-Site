import React, { useState } from 'react';
import { FiExternalLink, FiFacebook, FiTwitter, FiYoutube, FiInstagram, FiLinkedin, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import ProBetPick from '../assets/ProBetPick.png'
import BScores from '../assets/BScores.png'
export default function Service() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      name: 'Bettitude SportsBlog',
      tagline: 'Your Gateway to Premium Sports Content',
      description: 'Bettisports is a sports media platform that connects people to the latest news reports, sports analysis, previews and lots more. Our mission is to provide access to premium information and entertainment whilst promoting community spirit through sports.',
      features: [
        'Daily sports news & updates',
        'In-depth match analysis',
        'Expert opinions & previews',
        'Community engagement',
        'Trending sports topics',
        'Live match coverage'
      ],
      website: 'BettiSportsblog.com',
      link: 'https://bettisportsblog.com',
      social: [
        { icon: FiFacebook, link: 'https://facebook.com' },
        { icon: FiTwitter, link: 'https://twitter.com/bettitude' },
        { icon: FiYoutube, link: 'https://youtube.com' }
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      glowColor: 'shadow-[#FFC527]/50',
      bgImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80'
    },
    {
      // name: 'Bettitude ProBetPicks',
      image: ProBetPick,
      size: 300,
      tagline: 'Precision Predictions for Winning Bets',
      description: "Bettitude's main aim is to provide accurate and precise sports predictions, betting tips, and strategies that may be viewed, considered or used by its subscribers.",
      features: [
        'AI-powered predictions',
        'Expert betting strategies',
        'High accuracy rate',
        'Multi-sport coverage',
        'Real-time tip updates',
        'Subscriber-exclusive content'
      ],
      website: 'ProBetPicks.com',
      link: 'https://probetpicks.com',
      social: [
        { icon: FiFacebook, link: 'https://facebook.com' },
        { icon: FiTwitter, link: 'https://twitter.com' },
        { icon: FiYoutube, link: 'https://youtube.com' }
      ],
      color: 'from-[#0057B8] to-[#003d82]',
      glowColor: 'shadow-[#0057B8]/50',
      bgImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80'
    },
    {
      // name: 'BettiScores',
      image: BScores,
      size: 300,
      tagline: 'Real-Time Scores & Live Updates',
      description: 'Bettiscores is a sports media platform that connects people to the latest news reports, sports analysis, previews and lots more. Our mission is to provide access to premium information and entertainment whilst promoting community spirit through sports.',
      features: [
        'Live score tracking',
        'Detailed match statistics',
        'Comprehensive fixtures',
        'Historical data access',
        'Team comparisons',
        'Mobile-optimized platform'
      ],
      website: 'BettiScores.com',
      link: 'https://bettiscores.com',
      social: [
        { icon: FiFacebook, link: 'https://facebook.com' },
        { icon: FiTwitter, link: 'https://twitter.com' },
        { icon: FiYoutube, link: 'https://youtube.com' }
      ],
      color: 'from-[#FFC527] to-[#ffb700]',
      glowColor: 'shadow-[#FFC527]/50',
      bgImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      {/* Hero Section with Brighter Background */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Brighter */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
            alt="Sports"
            className="w-full h-full object-cover brightness-110"
          />
          {/* Reduced gradient opacity for brightness */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-[#0B0F19]/50 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/20 to-[#FFC527]/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8 py-30">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-full">
            <div className="w-2 h-2 bg-[#FFC527] rounded-full animate-pulse"></div>
            <span className="text-[#E0E0E0] text-sm font-semibold">Our Services</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            The Power of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
              Data, Sports & Fun
            </span>
            <br />
            Combined!
          </h1>

          <p className="text-xl lg:text-2xl text-[#E0E0E0] max-w-3xl mx-auto">
            Check out our services and discover how we're revolutionizing the sports entertainment experience
          </p>

          <div className="flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a 
              href="https://probetpicks.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-xl text-white font-semibold hover:bg-[#0057B8]/40 hover:border-[#FFC527]/50 transition-all duration-300"
            >
              ProBetPicks.com
            </a>
            <a 
              href="https://bettisportsblog.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-xl text-white font-semibold hover:bg-[#0057B8]/40 hover:border-[#FFC527]/50 transition-all duration-300"
            >
              BettiSportsblog.com
            </a>
            <a 
              href="https://bettiscores.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/50 rounded-xl text-white font-semibold hover:bg-[#0057B8]/40 hover:border-[#FFC527]/50 transition-all duration-300"
            >
              BettiScores
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-video rounded-3xl overflow-hidden group">
                  <img 
                    src={service.bgImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-[#0B0F19]/80 backdrop-blur-sm rounded-xl border border-[#FFC527]/50">
                    <span className="text-white font-bold">{service.website}</span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br ${service.color} opacity-20 rounded-3xl blur-2xl -z-10`}></div>
              </div>

              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  {/* <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                    {service.name}
                  </h2> */}
                  <img src={service.image} width={service.size} alt="" />
                  <p className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                    {service.tagline}
                  </p>
                  <p className="text-lg text-[#E0E0E0] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start space-x-2 bg-[#0057B8]/10 backdrop-blur-sm border border-[#0057B8]/30 rounded-xl p-4 hover:border-[#FFC527]/50 transition-all duration-300"
                    >
                      <FiCheckCircle className="text-[#FFC527] text-lg flex-shrink-0 mt-0.5" />
                      <span className="text-[#E0E0E0] text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 pt-4">
                  <span className="text-[#E0E0E0] font-semibold">Connect:</span>
                  {service.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-xl flex items-center justify-center text-[#E0E0E0] hover:text-[#FFC527] hover:border-[#FFC527]/50 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${service.color} text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                    style={{ boxShadow: `0 10px 40px ${service.glowColor}` }}
                  >
                    <span>Explore {service.website}</span>
                    <FiExternalLink className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative py-24 bg-gradient-to-b from-transparent to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-3xl p-12 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0057B8]/20 rounded-full blur-3xl"></div>

            <div className="relative text-center space-y-8">
              <h3 className="text-4xl lg:text-5xl font-black text-white">
                Your World of Engaging
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
                  Sports Entertainment
                </span>
              </h3>

              <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
                Join thousands of sports enthusiasts experiencing the future of sports media and betting intelligence
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4 pt-6">
                {[FiFacebook, FiTwitter, FiYoutube, FiInstagram, FiLinkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-14 h-14 bg-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-xl flex items-center justify-center text-[#E0E0E0] hover:text-[#FFC527] hover:border-[#FFC527]/50 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="text-2xl" />
                  </a>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
                >
                  <span>Get Started Today</span>
                  <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}