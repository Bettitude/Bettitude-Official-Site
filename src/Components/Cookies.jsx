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
      color: "red"
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
      color: "purple"
    },
    {
      icon: IoMegaphone,
      category: "Targeting & Advertising",
      purpose: "Ads personalization and affiliate revenue tracking.",
      control: "Controllable by user.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "bg-red-100 text-red-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color];
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <FaCookie className="text-5xl" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Cookie Policy
              </h1>
              <p className="text-xl text-green-100 mt-2">Bettitude Inc.</p>
            </div>
          </div>
          <p className="text-sm text-green-200">Effective Date: November, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-12">
        {/* Intro */}
        <section className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            This Cookie Policy explains what cookies are, how Bettitude Inc.
            ("Bettitude," "We," "Us") uses cookies and similar technologies on our
            websites (Bettitude.com, BettiScores.com, ProbetPicks.com, etc.) and
            services (the "Service"), and what choices you have regarding them.
            This policy should be read alongside our Privacy Policy.
          </p>
        </section>

        {/* Section 1 */}
        <article className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-green-100 rounded-lg p-3 mr-4">
              <span className="text-2xl font-bold text-green-700">1</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              What Are Cookies?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files placed on your computer, tablet, or
            mobile phone when you visit a website. They help websites function
            properly, remember preferences, and collect analytics to improve user
            experience.
          </p>
        </article>

        {/* Section 2 */}
        <article className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-start mb-6">
            <div className="bg-green-100 rounded-lg p-3 mr-4">
              <span className="text-2xl font-bold text-green-700">2</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              How Bettitude Uses Cookies
            </h2>
          </div>
          <ul className="space-y-3">
            {[
              "Ensure the Service functions correctly and securely.",
              "Analyze how the Service is used to measure performance and improve user experience.",
              "Remember your preferences and settings.",
              "Deliver relevant advertising and track the effectiveness of campaigns and affiliate partnerships."
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 text-xl">●</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Section 3: Cookie Types Cards */}
        <article className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-start mb-8">
            <div className="bg-green-100 rounded-lg p-3 mr-4">
              <span className="text-2xl font-bold text-green-700">3</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Types of Cookies We Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`${getColorClasses(cookie.color)} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <cookie.icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {cookie.category}
                </h3>
                <p className="text-gray-700 mb-3 text-sm">
                  <strong>Purpose:</strong> {cookie.purpose}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Control:</strong> {cookie.control}
                </p>
              </div>
            ))}
          </div>

          {/* Traditional Table for Desktop View */}
          <div className="mt-8 hidden lg:block overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-green-50">
                  <th className="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Category</th>
                  <th className="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Purpose</th>
                  <th className="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">User Control</th>
                </tr>
              </thead>
              <tbody>
                {cookieTypes.map((cookie, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{cookie.category}</td>
                    <td className="p-4 text-gray-700">{cookie.purpose}</td>
                    <td className="p-4 text-gray-700">{cookie.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* Section 4 */}
        <article className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-green-100 rounded-lg p-3 mr-4">
              <span className="text-2xl font-bold text-green-700">4</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Third-Party Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We use third-party services like analytics providers, advertising
            networks, affiliate partners, and social media platforms. These third
            parties may set their own cookies. We recommend reviewing their
            privacy and cookie policies.
          </p>
        </article>

        {/* Section 5 */}
        <article className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-start mb-6">
            <div className="bg-green-100 rounded-lg p-3 mr-4">
              <span className="text-2xl font-bold text-green-700">5</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Your Choices: Managing Cookies
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            You can manage your cookie preferences using:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                A. Cookie Preference Center
              </h3>
              <p className="text-gray-700">
                On your first visit, you can accept or reject non-essential cookies.
                You can change preferences anytime through the Cookie Settings link in
                the footer.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                B. Browser Controls
              </h3>
              <p className="text-gray-700">
                You can set your browser to block or delete cookies. Note that this
                may affect website functionality.
              </p>
            </div>
          </div>
        </article>

        {/* Section 6 */}
        <article className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-green-100 rounded-lg p-3 mr-4">
              <span className="text-2xl font-bold text-green-700">6</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Changes to This Policy
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy periodically. Changes will be posted on this
            page with an updated Effective Date.
          </p>
        </article>

        {/* Section 7: Contact */}
        <footer className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-sm p-8 border border-green-100">
          <div className="flex items-start mb-6">
            <div className="bg-green-100 rounded-lg p-3 mr-4">
              <span className="text-2xl font-bold text-green-700">7</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Contact Us</h2>
          </div>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong className="text-gray-900">Email:</strong>{" "}
              <a
                href="mailto:legal@bettitude.com"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                legal@bettitude.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Mailing Address:</strong> Bettitude Inc., Legal Department, 58 Berrigan Rd, Miandetta, Tas 7320, AUS
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
            © {new Date().getFullYear()} Bettitude Inc. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Cookies;