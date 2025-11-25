import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BiMenu, 
  BiX, 
  BiSearch, 
  BiTrendingUp, 
  BiNews, 
  BiBarChart,
  BiChevronDown,
  BiUser,
  BiBell
} from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'Predictions', 
      href: '#',
      dropdown: [
        { name: "Today's Picks", icon: BiTrendingUp },
        { name: 'Premium Tips', icon: BiBarChart },
        { name: 'Markets', icon: BiChevronDown },
        { name: 'Success Rate', icon: BiBarChart }
      ]
    },
    { name: 'Sports Blog', href: '#', icon: BiNews },
    { name: 'Coverage', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <BiTrendingUp className="text-white text-2xl" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Bettitude
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={link.href}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group flex items-center space-x-1"
                    whileHover={{ y: -2 }}
                  >
                    {link.icon && <link.icon className="text-lg" />}
                    <span>{link.name}</span>
                    {link.dropdown && <BiChevronDown className="text-sm" />}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-xl border border-purple-500/20 overflow-hidden"
                      >
                        {link.dropdown.map((item, idx) => (
                          <motion.a
                            key={idx}
                            href="#"
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <item.icon className="text-purple-400" />
                            <span>{item.name}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Live Indicator */}
              <motion.div 
                className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-red-500/10 rounded-full border border-red-500/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BsCircleFill className="text-red-500 text-xs animate-pulse" />
                <span className="text-red-400 text-sm font-medium">Live</span>
              </motion.div>

              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block p-2 text-gray-400 hover:text-white transition-colors"
              >
                <BiSearch className="text-xl" />
              </motion.button>

              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block p-2 text-gray-400 hover:text-white transition-colors relative"
              >
                <BiBell className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
              </motion.button>

              {/* Login */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <BiUser className="text-lg" />
                <span>Login</span>
              </motion.button>

              {/* Get Started CTA */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30"
              >
                Get Started
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <BiX className="text-2xl" /> : <BiMenu className="text-2xl" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-slate-900 z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <BiTrendingUp className="text-white text-2xl" />
                    </div>
                    <span className="text-xl font-bold text-white">Bettitude</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <BiX className="text-2xl text-gray-400" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      <motion.a
                        href={link.href}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>{link.name}</span>
                        {link.dropdown && <BiChevronDown />}
                      </motion.a>
                      {link.dropdown && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.dropdown.map((item, idx) => (
                            <motion.a
                              key={idx}
                              href="#"
                              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-purple-500/5 rounded-lg"
                              whileHover={{ x: 5 }}
                            >
                              <item.icon />
                              <span>{item.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-gray-300 hover:text-white border border-gray-700 rounded-lg transition-colors">
                    <BiUser />
                    <span>Login</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Demo Content */}
      <div className="pt-32 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Modern Navbar
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Scroll down to see the navbar transform with glassmorphism effect
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-purple-400">✨ Smooth Animations</p>
              </div>
              <div className="px-6 py-3 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                <p className="text-pink-400">🎨 Glassmorphism</p>
              </div>
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400">📱 Fully Responsive</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-20 h-[2000px] flex items-center justify-center">
            <p className="text-gray-500 text-lg">Scroll to see navbar effects...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;