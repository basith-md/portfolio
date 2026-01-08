import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandableCard = ({ cardData, onClose }) => {
  const { type, data, title, content } = cardData;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 50
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'skill':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">{data.name}</h3>
              <div className="text-6xl font-bold gradient-text mb-4">{data.level}%</div>
              <p className="text-gray-400">Proficiency Level</p>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-accent-500 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${data.level}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            
            <div className="text-center">
              <p className="text-gray-300">
                {data.level >= 90 ? "Expert Level" : 
                 data.level >= 75 ? "Advanced Level" : 
                 data.level >= 60 ? "Intermediate Level" : "Beginner Level"}
              </p>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">{data.degree}</h3>
              <h4 className="text-xl text-primary-400 mb-4">{data.school}</h4>
              <div className="flex justify-center space-x-6 text-gray-400">
                <span>📅 {data.year}</span>
                <span>📊 GPA: {data.gpa}</span>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Relevant Courses</h5>
              <div className="grid grid-cols-2 gap-2">
                {data.relevant_courses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-primary-400">✓</span>
                    <span className="text-gray-300">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">{data.position}</h3>
              <h4 className="text-xl text-primary-400 mb-2">{data.company}</h4>
              <div className="flex justify-center space-x-6 text-gray-400 mb-4">
                <span>📅 {data.duration}</span>
                <span>📍 {data.location}</span>
              </div>
              <p className="text-gray-300">{data.description}</p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
              <div className="space-y-2">
                {data.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Key Metrics</h5>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(data.metrics).map(([key, value], index) => (
                  <div key={index} className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-primary-400 font-bold text-lg">{value}</div>
                    <div className="text-gray-400 text-sm">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">{data.title}</h3>
              <div className="flex justify-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {data.category}
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {data.duration}
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {data.status}
                </span>
              </div>
              <p className="text-gray-300">{data.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Problem Statement</h5>
                <p className="text-gray-300">{data.problem}</p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Solution Approach</h5>
                <p className="text-gray-300">{data.solution}</p>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Key Features</h5>
              <div className="grid md:grid-cols-2 gap-2">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Results Achieved</h5>
              <div className="space-y-2">
                {data.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>🐙</span>
                <span>View Code</span>
              </motion.a>
              
              <motion.a
                href={data.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>🚀</span>
                <span>Live Demo</span>
              </motion.a>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300">{JSON.stringify(content, null, 2)}</p>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold gradient-text">{title}</h2>
            <motion.button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-gray-400 text-xl">✕</span>
            </motion.button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {renderContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandableCard;
