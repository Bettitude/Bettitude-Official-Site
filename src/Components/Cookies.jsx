import React from "react";

const Cookies = () => {
  return (
    <div className="w-full bg-white py-30 px-5 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Bettitude Inc. Cookie Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: November, 2025
        </p>

        <p className="text-gray-700 mb-6">
          This Cookie Policy explains what cookies are, how Bettitude Inc.
          ("Bettitude," "We," "Us") uses cookies and similar technologies on our
          websites (Bettitude.com, BettiScores.com, ProbetPicks.com, etc.) and
          services (the "Service"), and what choices you have regarding them.
          This policy should be read alongside our Privacy Policy.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          1. What Are Cookies?
        </h2>
        <p className="text-gray-700 mb-6">
          Cookies are small text files placed on your computer, tablet, or
          mobile phone when you visit a website. They help websites function
          properly, remember preferences, and collect analytics to improve user
          experience.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          2. How Bettitude Uses Cookies
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Ensure the Service functions correctly and securely.</li>
          <li>
            Analyze how the Service is used to measure performance and improve
            user experience.
          </li>
          <li>Remember your preferences and settings.</li>
          <li>
            Deliver relevant advertising and track the effectiveness of campaigns
            and affiliate partnerships.
          </li>
        </ul>

        {/* Section 3: Table */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          3. Types of Cookies We Use
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-800">
                <th className="p-3 font-semibold border-b">Category</th>
                <th className="p-3 font-semibold border-b">Purpose</th>
                <th className="p-3 font-semibold border-b">User Control</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Strictly Necessary Cookies</td>
                <td className="p-3">
                  Essential for website navigation and secure access.
                </td>
                <td className="p-3">Cannot be disabled.</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Performance & Analytics</td>
                <td className="p-3">
                  Aggregate data analysis to improve performance.
                </td>
                <td className="p-3">Controllable by user.</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Functionality Cookies</td>
                <td className="p-3">
                  Remember user preferences like language and region.
                </td>
                <td className="p-3">Controllable by user.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Targeting & Advertising</td>
                <td className="p-3">
                  Ads personalization and affiliate revenue tracking.
                </td>
                <td className="p-3">Controllable by user.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          4. Third-Party Cookies
        </h2>
        <p className="text-gray-700 mb-6">
          We use third-party services like analytics providers, advertising
          networks, affiliate partners, and social media platforms. These third
          parties may set their own cookies. We recommend reviewing their
          privacy and cookie policies.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          5. Your Choices: Managing Cookies
        </h2>
        <p className="text-gray-700 mb-4">
          You can manage your cookie preferences using:
        </p>

        <h3 className="text-xl font-medium mb-2">A. Cookie Preference Center</h3>
        <p className="text-gray-700 mb-4">
          On your first visit, you can accept or reject non-essential cookies.
          You can change preferences anytime through the Cookie Settings link in
          the footer.
        </p>

        <h3 className="text-xl font-medium mb-2">B. Browser Controls</h3>
        <p className="text-gray-700 mb-6">
          You can set your browser to block or delete cookies. Note that this
          may affect website functionality.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this policy periodically. Changes will be posted on this
          page with an updated Effective Date.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          7. Contact Us
        </h2>
        <p className="text-gray-700 mb-1">Email: legal@bettitude.com</p>
        <p className="text-gray-700 mb-20">
          Mailing Address: Bettitude Inc., Legal Department, 58 Berrigan Rd,
          Miandetta, Tas 7320, AUS
        </p>
      </div>
    </div>
  );
};

export default Cookies;
