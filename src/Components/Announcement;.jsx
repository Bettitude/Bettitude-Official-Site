import React, { useState } from 'react';
import { FiX, FiVolume2, FiArrowRight, FiStar, FiTrendingUp } from 'react-icons/fi';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#0B0F19] py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0057B8] border-2 border-[#FFC527] rounded-2xl py-4 px-6 overflow-hidden shadow-2xl">
          {/* Accent corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#FFC527] opacity-20 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#FFC527] opacity-20 rounded-tl-full"></div>

          {/* Animated dots pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, #FFC527 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          <div className="relative flex items-center justify-between gap-4">
            {/* Left Icon */}
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-12 h-12 bg-[#FFC527] rounded-xl flex items-center justify-center shadow-lg">
                <FiVolume2 className="text-[#0057B8] text-2xl animate-pulse" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2 bg-[#FFC527]/20 px-4 py-2 rounded-lg border border-[#FFC527]/40">
                <FiStar className="text-[#FFC527] text-xl animate-pulse" />
                <span className="font-black text-sm sm:text-base text-white">
                  New Feature Alert!
                </span>
              </div>

              <span className="text-sm sm:text-base text-white font-medium">
                ProBetpicks now offers live match predictions with 95% accuracy
              </span>

              <a
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#FFC527] hover:bg-[#ffb700] rounded-lg text-sm font-bold text-[#0057B8] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Learn More</span>
                <FiArrowRight className="text-base" />
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 w-10 h-10 bg-white/10 hover:bg-[#FFC527] hover:text-[#0057B8] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
              aria-label="Close announcement"
            >
              <FiX className="text-white hover:text-[#0057B8] text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;