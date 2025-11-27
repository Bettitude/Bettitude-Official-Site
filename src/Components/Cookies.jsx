import React from "react";
import { IoShieldCheckmark, IoAnalytics, IoSettings, IoMegaphone } from "react-icons/io5";
import { FaCookie } from "react-icons/fa";

const Cookies = () => {
  const cookieTypes = [
    {
      icon: IoShieldCheckmark,
      category: "Strictly Necessary Cookies",
      purpose: "Essential for website navigation and secure access.",
      control: "Cannot be disabled.",
      color: "gold"
    },
    {
      icon: IoAnalytics,
      category: "Performance & Analytics",
      purpose: "Aggregate data analysis to improve performance.",
      control: "Controllable by user.",
      color: "blue"
    },
    {
      icon: IoSettings,
      category: "Functionality Cookies",
      purpose: "Remember user preferences like language and region.",
      control: "Controllable by user.",
      color: "gold"
    },
    {
      icon: IoMegaphone,
      category: "Targeting & Advertising",
      purpose: "Ads personalization and affiliate revenue tracking.",
      control: "Controllable by user.",
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      gold: "bg-[#FFC527]/20 text-[#FFC527] border-[#FFC527]/30",
      blue: "bg-[#0057B8]/20 text-[#0057B8] border-[#0057B8]/30"
    };
    return colors[color];
  };

  return (
    <div className="w-full bg-[#0B0F19] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#FFC527]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0057B8] to-[#003d82] text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-[#FFC527]/20 backdrop-blur-sm rounded-xl border border-[#FFC527]/30">
              <FaCookie className="text-3xl sm:text-4xl md:text-5xl text-[#FFC527]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                Cookie Policy
              </h1>
              <p className="text-lg sm:text-xl text-[#FFC527] mt-1 sm:mt-2 font-bold">Bettitude Inc.</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/80">Effective Date: November, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        {/* Intro */}
        <section className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-[#E0E0E0] leading-relaxed">
            This Cookie Policy explains what cookies are, how Bettitude Inc.
            ("Bettitude," "We," "Us") uses cookies and similar technologies on our
            websites (Bettitude.com, BettiScores.com, ProbetPicks.com, etc.) and
            services (the "Service"), and what choices you have regarding them.
            This policy should be read alongside our Privacy Policy.
          </p>
        </section>

        {/* Section 1 */}
        <article className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:border-[#FFC527]/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg p-2.5 sm:p-3 mr-0 sm:mr-4 mb-3 sm:mb-0">
              <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-0 sm:mt-2">
              What Are Cookies?
            </h2>
          </div>
          <p className="text-[#E0E0E0] leading-relaxed text-sm sm:text-base">
            Cookies are small text files placed on your computer, tablet, or
            mobile phone when you visit a website. They help websites function
            properly, remember preferences, and collect analytics to improve user
            experience.
          </p>
        </article>

        {/* Section 2 */}
        <article className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:border-[#FFC527]/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg p-2.5 sm:p-3 mr-0 sm:mr-4 mb-3 sm:mb-0">
              <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-0 sm:mt-2">
              How Bettitude Uses Cookies
            </h2>
          </div>
          <ul className="space-y-2.5 sm:space-y-3">
            {[
              "Ensure the Service functions correctly and securely.",
              "Analyze how the Service is used to measure performance and improve user experience.",
              "Remember your preferences and settings.",
              "Deliver relevant advertising and track the effectiveness of campaigns and affiliate partnerships."
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#FFC527] mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-lg sm:text-xl">●</span>
                <span className="text-[#E0E0E0] text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Section 3: Cookie Types Cards */}
        <article className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:border-[#FFC527]/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg p-2.5 sm:p-3 mr-0 sm:mr-4 mb-3 sm:mb-0">
              <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">3</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-0 sm:mt-2">
              Types of Cookies We Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {cookieTypes.map((cookie, index) => (
              <div
                key={index}
                className="bg-[#0B0F19]/50 backdrop-blur-sm border border-[#0057B8]/30 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:border-[#FFC527]/50 hover:scale-105 transition-all duration-300"
              >
                <div className={`${getColorClasses(cookie.color)} w-12 h-12 sm:w-14 sm:h-14 rounded-lg border flex items-center justify-center mb-3 sm:mb-4`}>
                  <cookie.icon className="text-xl sm:text-2xl" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                  {cookie.category}
                </h3>
                <p className="text-[#E0E0E0] mb-2 sm:mb-3 text-xs sm:text-sm">
                  <strong className="text-[#FFC527]">Purpose:</strong> {cookie.purpose}
                </p>
                <p className="text-[#E0E0E0]/80 text-xs sm:text-sm">
                  <strong className="text-[#FFC527]">Control:</strong> {cookie.control}
                </p>
              </div>
            ))}
          </div>

          {/* Traditional Table for Desktop View */}
          <div className="mt-6 sm:mt-8 hidden lg:block overflow-x-auto">
            <table className="w-full border border-[#0057B8]/30 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0057B8]/20">
                  <th className="p-3 sm:p-4 text-left font-bold text-white border-b border-[#0057B8]/30 text-sm sm:text-base">Category</th>
                  <th className="p-3 sm:p-4 text-left font-bold text-white border-b border-[#0057B8]/30 text-sm sm:text-base">Purpose</th>
                  <th className="p-3 sm:p-4 text-left font-bold text-white border-b border-[#0057B8]/30 text-sm sm:text-base">User Control</th>
                </tr>
              </thead>
              <tbody>
                {cookieTypes.map((cookie, index) => (
                  <tr key={index} className="border-b border-[#0057B8]/20 hover:bg-[#0057B8]/10">
                    <td className="p-3 sm:p-4 font-semibold text-white text-sm sm:text-base">{cookie.category}</td>
                    <td className="p-3 sm:p-4 text-[#E0E0E0] text-sm sm:text-base">{cookie.purpose}</td>
                    <td className="p-3 sm:p-4 text-[#E0E0E0] text-sm sm:text-base">{cookie.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* Section 4 */}
        <article className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:border-[#FFC527]/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg p-2.5 sm:p-3 mr-0 sm:mr-4 mb-3 sm:mb-0">
              <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">4</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-0 sm:mt-2">
              Third-Party Cookies
            </h2>
          </div>
          <p className="text-[#E0E0E0] leading-relaxed text-sm sm:text-base">
            We use third-party services like analytics providers, advertising
            networks, affiliate partners, and social media platforms. These third
            parties may set their own cookies. We recommend reviewing their
            privacy and cookie policies.
          </p>
        </article>

        {/* Section 5 */}
        <article className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:border-[#FFC527]/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg p-2.5 sm:p-3 mr-0 sm:mr-4 mb-3 sm:mb-0">
              <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">5</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-0 sm:mt-2">
              Your Choices: Managing Cookies
            </h2>
          </div>
          <p className="text-[#E0E0E0] mb-4 sm:mb-6 text-sm sm:text-base">
            You can manage your cookie preferences using:
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-[#FFC527] pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                A. Cookie Preference Center
              </h3>
              <p className="text-[#E0E0E0] text-sm sm:text-base">
                On your first visit, you can accept or reject non-essential cookies.
                You can change preferences anytime through the Cookie Settings link in
                the footer.
              </p>
            </div>

            <div className="border-l-4 border-[#FFC527] pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                B. Browser Controls
              </h3>
              <p className="text-[#E0E0E0] text-sm sm:text-base">
                You can set your browser to block or delete cookies. Note that this
                may affect website functionality.
              </p>
            </div>
          </div>
        </article>

        {/* Section 6 */}
        <article className="bg-gradient-to-br from-[#0057B8]/10 to-[#0B0F19]/50 backdrop-blur-xl border border-[#0057B8]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:border-[#FFC527]/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg p-2.5 sm:p-3 mr-0 sm:mr-4 mb-3 sm:mb-0">
              <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">6</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-0 sm:mt-2">
              Changes to This Policy
            </h2>
          </div>
          <p className="text-[#E0E0E0] leading-relaxed text-sm sm:text-base">
            We may update this policy periodically. Changes will be posted on this
            page with an updated Effective Date.
          </p>
        </article>

        {/* Section 7: Contact */}
        <footer className="bg-gradient-to-br from-[#FFC527]/10 to-[#0057B8]/10 backdrop-blur-xl border border-[#FFC527]/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-lg p-2.5 sm:p-3 mr-0 sm:mr-4 mb-3 sm:mb-0">
              <span className="text-xl sm:text-2xl font-black text-[#0B0F19]">7</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-0 sm:mt-2">Contact Us</h2>
          </div>
          <div className="space-y-2.5 sm:space-y-3">
            <p className="text-[#E0E0E0] text-sm sm:text-base">
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:legal@bettitude.com"
                className="text-[#FFC527] hover:text-[#ffb700] font-semibold hover:underline transition-colors"
              >
                legal@bettitude.com
              </a>
            </p>
            <p className="text-[#E0E0E0] text-sm sm:text-base">
              <strong className="text-white">Mailing Address:</strong> Bettitude Inc., Legal Department, 58 Berrigan Rd, Miandetta, Tas 7320, AUS
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#0057B8]/30 text-xs sm:text-sm text-[#E0E0E0]/80">
            © {new Date().getFullYear()} Bettitude Inc. All rights reserved.
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Cookies;