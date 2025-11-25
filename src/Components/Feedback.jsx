import React, { useState } from 'react';
import { FiMail, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    area: '',
    feedback: ''
  });

  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'feedback') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    if (formData.email && formData.category && formData.area && formData.feedback) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <main className="w-full bg-gradient-to-br from-[#0B0F19] via-[#0B0F19] to-[#0057B8]/10 text-gray-100 py-30 px-6 md:px-20 relative overflow-hidden min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0057B8]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#FFC527]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#0057B8]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-[#0057B8]/30 to-[#FFC527]/30 backdrop-blur-xl border border-[#FFC527]/50 rounded-full shadow-lg shadow-[#FFC527]/20 mb-6">
            <FiMessageSquare className="text-[#FFC527] text-xl" />
            <span className="text-white text-sm font-bold tracking-wide">WE'RE LISTENING</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFC527] to-[#0057B8]">
            Your Voice Matters
          </h1>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#FFC527] rounded-full"></div>
            <p className="text-xl text-[#FFC527] font-bold">Give Us Your Feedback</p>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#FFC527] rounded-full"></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your continuous feedback is the single most valuable resource for us. Help us make Bettitude better by sharing your suggestions, bug reports, and ideas.
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-12 p-8 bg-gradient-to-br from-[#0057B8]/10 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/30 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-black text-white mb-4 flex items-center space-x-3">
            <span className="text-[#FFC527]">→</span>
            <span>Help Us Build the Future of Bettitude</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              At Bettitude, our primary mission is to provide you with the <span className="text-white font-semibold">best possible premium and free contents</span> using modern analytical tools, experts inputs and user experience. We are committed to continuous innovation, and that process is guided directly by the people who use our platform every day: <span className="text-[#FFC527] font-bold">you</span>.
            </p>
            
            <p>
              Whether you've encountered a minor technical issue, have a brilliant idea for a new feature, or simply want to let us know what you love, your feedback is crucial. It's not just read—<span className="text-[#FFC527] font-semibold">it drives our development priorities</span>.
            </p>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl shadow-lg">
              <FiCheckCircle className="text-[#0B0F19] text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-white">Guidelines for Constructive Feedback</h2>
          </div>
          
          <p className="mb-6 text-gray-300 text-lg">
            To ensure your input is acted upon quickly and effectively, please follow these guidelines when completing the form:
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl hover:border-[#FFC527]/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center font-black text-[#0B0F19]">1</span>
                <div>
                  <h3 className="text-xl font-bold text-[#FFC527] mb-2">Be Specific</h3>
                  <p className="text-gray-300">Reference the exact page, tool, or feature you are commenting on (e.g., "The volatility indicator on the Market X page").</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl hover:border-[#FFC527]/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center font-black text-[#0B0F19]">2</span>
                <div>
                  <h3 className="text-xl font-bold text-[#FFC527] mb-2">Detail the Experience</h3>
                  <p className="text-gray-300">If you are reporting a bug, describe the steps you took leading up to the issue. If you are suggesting a feature, explain how it would benefit your workflow.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-xl hover:border-[#FFC527]/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-full flex items-center justify-center font-black text-[#0B0F19]">3</span>
                <div>
                  <h3 className="text-xl font-bold text-[#FFC527] mb-2">Be Honest</h3>
                  <p className="text-gray-300">We welcome constructive criticism. Your candid thoughts are the most valuable data we receive.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#0057B8] to-[#003d82] rounded-xl shadow-lg">
              <FiSend className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-white">Feedback Submission Form</h2>
          </div>
          
          <p className="mb-6 text-gray-300 text-lg">
            Please fill out the form below. We appreciate you taking the time to help us improve!
          </p>

          <div className="p-8 bg-gradient-to-br from-[#0057B8]/20 to-[#0057B8]/5 backdrop-blur-sm border border-[#0057B8]/40 rounded-2xl space-y-6">
            {/* Your Name */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Your Name <span className="text-gray-400 text-sm font-normal">(Optional)</span>
              </label>
              <p className="text-sm text-gray-400 mb-3">Only needed if you'd like credit for an idea!</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0B0F19]/50 border border-[#0057B8]/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC527] focus:ring-2 focus:ring-[#FFC527]/20 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Your Email */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Your Email <span className="text-[#FFC527]">*</span>
              </label>
              <p className="text-sm text-gray-400 mb-3">Only used if we need to follow up for clarification on a bug report.</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0B0F19]/50 border border-[#0057B8]/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC527] focus:ring-2 focus:ring-[#FFC527]/20 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Category of Feedback */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Category of Feedback <span className="text-[#FFC527]">*</span>
              </label>
              <p className="text-sm text-gray-400 mb-3">Please choose the category that best fits your submission.</p>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0B0F19]/50 border border-[#0057B8]/40 rounded-xl text-white focus:outline-none focus:border-[#FFC527] focus:ring-2 focus:ring-[#FFC527]/20 transition-all duration-300"
              >
                <option value="">Select a category...</option>
                <option value="bug">Bug/Technical Issue Report</option>
                <option value="feature">Feature Request</option>
                <option value="suggestion">General Suggestion/Improvement</option>
                <option value="content">Content/Data Accuracy</option>
                <option value="praise">Positive Comment/Praise</option>
              </select>
            </div>

            {/* Area of the Website */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Area of the Website <span className="text-[#FFC527]">*</span>
              </label>
              <p className="text-sm text-gray-400 mb-3">Which specific area does your feedback relate to?</p>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0B0F19]/50 border border-[#0057B8]/40 rounded-xl text-white focus:outline-none focus:border-[#FFC527] focus:ring-2 focus:ring-[#FFC527]/20 transition-all duration-300"
              >
                <option value="">Select an area...</option>
                <option value="homepage">Homepage/Navigation</option>
                <option value="account">Account & Profile</option>
                <option value="analytical">Analytical Tool X</option>
                <option value="prediction">Prediction Engine</option>
                <option value="mobile">Mobile Experience</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Your Detailed Feedback */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Your Detailed Feedback <span className="text-[#FFC527]">*</span>
              </label>
              <p className="text-sm text-gray-400 mb-3">Please describe your feedback clearly and specifically. Focus on the "what" and the "why."</p>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                maxLength={1000}
                rows={6}
                className="w-full px-4 py-3 bg-[#0B0F19]/50 border border-[#0057B8]/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC527] focus:ring-2 focus:ring-[#FFC527]/20 transition-all duration-300 resize-none"
                placeholder="Share your thoughts, suggestions, or report issues here..."
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-400">Limit: 1000 Characters</p>
                <p className={`text-sm font-semibold ${charCount > 950 ? 'text-[#FFC527]' : 'text-gray-400'}`}>
                  {charCount} / 1000
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="group relative w-full px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0B0F19] font-black rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC527]/50 hover:scale-105 text-lg"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>Submit Feedback</span>
                  <FiSend className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffb700] to-[#FFC527] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/50 rounded-xl flex items-center space-x-3 animate-fade-in">
                <FiCheckCircle className="text-green-400 text-2xl" />
                <p className="text-green-300 font-semibold">Thank you! Your feedback has been submitted successfully.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <footer className="text-center p-8 bg-gradient-to-br from-[#0057B8]/20 to-[#FFC527]/10 backdrop-blur-sm border border-[#0057B8]/40 rounded-2xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FiMail className="text-[#FFC527] text-3xl" />
            <h3 className="text-2xl font-black text-white">Need More Help?</h3>
          </div>
          <p className="text-gray-300 text-lg">
            Reach us for more feedback at{" "}
            <a
              href="mailto:hello@bettitude.com"
              className="text-[#FFC527] hover:text-[#ffb700] font-bold transition-colors duration-300"
            >
              hello@bettitude.com
            </a>
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default Feedback;