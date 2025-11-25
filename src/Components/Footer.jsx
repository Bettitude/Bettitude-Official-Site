import React from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiArrowUp,
  FiTrendingUp,
  FiHeart,
} from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
    ],
    product: [
      { name: 'BettiSportsblog', href: 'https://BettiSportsblog.com', external: true },
      { name: 'ProBetPicks', href: 'https://ProBetPicks.com', external: true },
      { name: 'BettiScores', href: 'https://BettiScores.com', external: true },
    ],
    services: [
      { name: 'Betting Analytics', href: '/services/analytics' },
      { name: 'Live Predictions', href: '/services/predictions' },
      { name: 'Sports News', href: '/services/news' },
      { name: 'Consultancy', href: '/services/consultancy' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help' },
      { name: 'API Docs', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Feedback', href: '/feedback' },
    ],
    legal: [
      { name: 'Legal', href: '/legal' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookies-poilcy' },
    ],
  };

  const socialLinks = [
    {
      icon: FiFacebook,
      href: 'https://facebook.com/people/Bettitude/100071057204593/',
      label: 'Facebook',
      color: 'hover:text-[#1877F2]',
    },
    {
      icon: FiTwitter,
      href: 'https://twitter.com/bettitude',
      label: 'Twitter',
      color: 'hover:text-[#1DA1F2]',
    },
    {
      icon: FiInstagram,
      href: 'https://instagram.com/bettitude_',
      label: 'Instagram',
      color: 'hover:text-[#E4405F]',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/company/bettitude',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
    },
    {
      icon: FiYoutube,
      href: 'https://youtube.com/@bettitudeofficial',
      label: 'YouTube',
      color: 'hover:text-[#FF0000]',
    },
    {
      icon: FiYoutube,
      href: 'https://youtube.com',
      label: 'YouTube',
      color: 'hover:text-[#FF0000]',
    },
    {
      icon: FiYoutube,
      href: 'https://youtube.com',
      label: 'YouTube',
      color: 'hover:text-[#FF0000]',
    },
  ];

  return (
    <footer className="relative bg-[#0B0F19] border-t border-[#0057B8]/30">
      {/* Decorative top line */}
      <div className="h-1 bg-gradient-to-r from-[#0057B8] via-[#FFC527] to-[#0057B8]"></div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 lg:right-20 w-12 h-12 bg-gradient-to-r from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFC527]/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-[#0B0F19] text-xl group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content - 7 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 pb-12">
          
          {/* Brand Column - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <a href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0057B8] blur-xl opacity-50"></div>
                  <div className="relative text-4xl font-black">
                    <span className="text-[#FFFFFF]">Bett</span>
                    <span className="text-[#FFC527]">itude</span>
                  </div>
                </div>
              </div>
            </a>

            <p className="text-[#E0E0E0] leading-relaxed">
              Your trusted partner for smart betting insights and sports analytics. We bring data-driven predictions to help you win smarter.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@bettitude.com" className="flex items-center space-x-3 text-[#E0E0E0] hover:text-[#FFC527] transition-colors group">
                <div className="w-10 h-10 bg-[#0057B8]/20 rounded-lg flex items-center justify-center group-hover:bg-[#0057B8]/40 transition-colors">
                  <FiMail className="text-[#FFC527]" />
                </div>
                <span>hello@bettitude.com</span>
              </a>

              <a href="tel:+61412877500" className="flex items-center space-x-3 text-[#E0E0E0] hover:text-[#FFC527] transition-colors group">
                <div className="w-10 h-10 bg-[#0057B8]/20 rounded-lg flex items-center justify-center group-hover:bg-[#0057B8]/40 transition-colors">
                  <FiPhone className="text-[#FFC527]" />
                </div>
                <span>+61 412 877 500</span>
              </a>

              <div className="flex items-start space-x-3 text-[#E0E0E0]">
                <div className="w-10 h-10 bg-[#0057B8]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-[#FFC527]" />
                </div>
                <span>25 Ladbroke Avenue, Burnie, Tas 7320, Australlia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 bg-[#0057B8]/20 rounded-lg flex items-center justify-center text-[#E0E0E0] ${social.color} hover:scale-110 transition-all duration-300`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Company</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Products</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Services</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Resources</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - These will link to specific sections on the legal page */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#0057B8] rounded-full"></div>
              <span>Legal</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FFC527] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter CTA Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#0057B8]/20 via-[#FFC527]/10 to-[#0057B8]/20 backdrop-blur-sm border border-[#0057B8]/30 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center">
                <FiTrendingUp className="text-[#0B0F19] text-3xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Stay Ahead of the Game</h3>
                <p className="text-[#E0E0E0]">Get weekly predictions and exclusive insights</p>
              </div>
            </div>
            <a
              href="/newsletter"
              className="px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0057B8]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#E0E0E0] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bettitude. All rights reserved. 
              <span className="inline-flex items-center ml-2">
                Made with <FiHeart className="text-[#FFC527] mx-1" /> for sports enthusiasts
              </span>
            </p>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 bg-[#0057B8]/20 rounded-lg border border-[#0057B8]/30">
                <span className="text-[#E0E0E0] text-xs font-semibold">🔒 SSL Secured</span>
              </div>
              <div className="px-4 py-2 bg-[#0057B8]/20 rounded-lg border border-[#0057B8]/30">
                <span className="text-[#E0E0E0] text-xs font-semibold">✓ Verified</span>
              </div>
            </div>
          </div>

          {/* Responsible Gaming Notice */}
          <div className="mt-6 p-4 bg-[#FFC527]/10 border border-[#FFC527]/30 rounded-lg">
            <p className="text-[#E0E0E0] text-xs text-center leading-relaxed">
              <strong className="text-[#FFC527]">Responsible Gaming:</strong> Betting should be fun and entertaining. 
              Please gamble responsibly and only bet what you can afford to lose. If you need help, visit BeGambleAware.org
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}