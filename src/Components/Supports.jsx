import React, { useState } from 'react';
import { FiHeart, FiCoffee, FiDollarSign, FiTarget, FiUsers, FiTrendingUp, FiCheckCircle, FiArrowRight, FiAward, FiMonitor } from 'react-icons/fi';

export default function Support() {
  const supportOptions = [
    {
      icon: FiTarget,
      title: 'GoFundMe',
      description: 'Support in achieving our goal to raise funding on GoFundMe',
      action: 'Support Campaign',
      color: 'from-[#02A95C] to-[#028a4c]',
      link: '#gofundme'
    },
    {
      icon: FiDollarSign,
      title: 'Donate',
      description: 'Donate to support our work and keep the beautiful contents coming via Stripe',
      action: 'Make Donation',
      color: 'from-[#635BFF] to-[#4F46E5]',
      link: '#donate'
    },
    {
      icon: FiUsers,
      title: 'Support',
      description: 'Support our cause to bring you the best unbiased contents via Patreon',
      action: 'Become Patron',
      color: 'from-[#FF424D] to-[#E63946]',
      link: '#support'
    },
    {
      icon: FiCoffee,
      title: 'Buy Us A Coffee',
      description: 'Every tip matters. Support our writers, editors and everyone with a Cup of Coffee',
      action: 'Buy Coffee',
      color: 'from-[#FFDD00] to-[#FFC527]',
      link: '#coffee'
    },
    {
      icon: FiAward,
      title: 'Sponsorship',
      description: 'Partner with us as a sponsor and reach our engaged audience of sports enthusiasts',
      action: 'Become Sponsor',
      color: 'from-[#0057B8] to-[#003d82]',
      link: '#sponsorship'
    },
    {
      icon: FiMonitor,
      title: 'Advertise With Us',
      description: 'Showcase your brand to thousands of daily visitors through our advertising platform',
      action: 'Start Advertising',
      color: 'from-[#FFC527] to-[#ffb700]',
      link: '#advertise'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      
      {/* Hero Section */}
      <div className="relative min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
            alt="Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/40 to-[#FFC527]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 lg:space-y-8 py-12 sm:py-16 lg:py-20">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFC527]/20 backdrop-blur-sm border border-[#FFC527]/50 rounded-full">
            <FiHeart className="text-[#FFC527] text-xs sm:text-sm animate-pulse" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-semibold">Support Our Mission</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight px-2">
            Join Our Cause As We
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] to-[#ffb700]">
              Raise Funding
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed px-4">
            Kindly support us to keep the Rights on and bring you the best contents there is...
          </p>

          <div className="flex justify-center">
            <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-gradient-to-r from-[#FFC527] to-[#0057B8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Support Options Grid */}
      <div className="relative py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#0057B8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white px-4">
              Ways to Support
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] px-4">Choose the platform that works best for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#FFC527]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC527]/0 to-[#FFC527]/0 group-hover:from-[#FFC527]/10 group-hover:to-[#0057B8]/10 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                
                <div className="relative space-y-4 sm:space-y-6">
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.color} blur-xl sm:blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${option.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <option.icon className="text-white text-3xl sm:text-4xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FFC527] transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#E0E0E0] leading-relaxed min-h-[48px] sm:min-h-[60px]">
                      {option.description}
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    href={option.link}
                    className={`group/btn flex items-center justify-center space-x-2 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${option.color} text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    <span>{option.action}</span>
                    <FiArrowRight className="text-lg sm:text-xl group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-transparent to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-xl border border-[#0057B8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#FFC527]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#0057B8]/20 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left Side */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  Partner With
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
                    Bettitude
                  </span>
                </h3>

                <p className="text-base sm:text-lg md:text-xl text-[#E0E0E0] leading-relaxed">
                  Join forces with one of the fastest-growing sports media platforms. Reach our engaged audience of 50,000+ daily readers and position your brand at the forefront of sports entertainment.
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    'Brand visibility across all our platforms',
                    'Access to a highly engaged sports audience',
                    'Custom partnership packages available',
                    'Detailed analytics and performance reports'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <FiCheckCircle className="text-[#FFC527] text-lg sm:text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#E0E0E0]">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:b2bops@bettitude.com"
                  className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <FiArrowRight className="text-lg sm:text-xl" />
                </a>
              </div>

              {/* Right Side - Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {[
                  { value: '50K+', label: 'Daily Readers' },
                  { value: '100K+', label: 'Active Users' },
                  { value: '500+', label: 'Live Matches' },
                  { value: '2,500+', label: 'Articles' }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[#0057B8]/20 to-transparent backdrop-blur-sm border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#E0E0E0] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}