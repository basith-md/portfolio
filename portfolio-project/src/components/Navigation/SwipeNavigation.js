import React from 'react';
import { motion } from 'framer-motion';

const SwipeNavigation = ({ currentSection, onSectionChange, sections }) => {
  const sectionLabels = {
    about: 'About',
    experience: 'Experience', 
    projects: 'Projects'
  };

  const sectionIcons = {
    about: '👤',
    experience: '💼',
    projects: '🚀'
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-700/50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Basit Ali</h1>
              <p className="text-sm text-gray-400">Data Analytics Engineer</p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center space-x-2">
            {sections.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentSection === section
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{sectionIcons[section]}</span>
                <span className="hidden sm:block font-medium">
                  {sectionLabels[section]}
                </span>
                
                {/* Active indicator */}
                {currentSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary-500/10 rounded-lg border border-primary-500/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Contact Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
          >
            <span>📧</span>
            <span className="font-medium">Contact</span>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4">
          <div className="flex justify-center space-x-1">
            {sections.map((section, index) => (
              <motion.div
                key={section}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === section
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SwipeNavigation;
