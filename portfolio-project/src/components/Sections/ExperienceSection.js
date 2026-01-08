import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = ({ experiences, onCardExpand }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleExperienceClick = (experience) => {
    onCardExpand({
      type: 'experience',
      data: experience,
      title: `${experience.position} at ${experience.company}`,
      content: experience
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Professional Experience
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Building data-driven solutions that drive business growth and operational efficiency
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative flex items-start space-x-8"
            >
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-bold text-lg">
                    {experience.company.charAt(0)}
                  </span>
                </motion.div>
              </div>

              {/* Experience Card */}
              <motion.div
                className="flex-1 glass-effect rounded-xl p-8 cursor-pointer card-hover"
                onClick={() => handleExperienceClick(experience)}
                whileHover={{ scale: 1.02 }}
                layout
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experience.position}
                    </h3>
                    <h4 className="text-xl text-primary-400 font-semibold mb-2">
                      {experience.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <span className="flex items-center space-x-1">
                        <span>📅</span>
                        <span>{experience.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>📍</span>
                        <span>{experience.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>💼</span>
                        <span>{experience.type}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <motion.div
                    className="mt-4 md:mt-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Current
                    </span>
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {experience.achievements.slice(0, 4).map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        <span className="text-primary-400 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                        whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(experience.metrics).map(([key, value], metricIndex) => (
                    <motion.div
                      key={key}
                      className="text-center p-3 bg-gray-800/50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: metricIndex * 0.1 }}
                    >
                      <div className="text-primary-400 font-bold text-lg">{value}</div>
                      <div className="text-gray-400 text-xs">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Expand Indicator */}
                <motion.div
                  className="mt-6 flex items-center justify-center text-gray-400"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-sm">Click to view details</span>
                  <span className="ml-2">↓</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="glass-effect rounded-xl p-8 text-center">
          <div className="text-4xl font-bold gradient-text mb-2">2+</div>
          <div className="text-gray-400">Years Experience</div>
        </div>
        
        <div className="glass-effect rounded-xl p-8 text-center">
          <div className="text-4xl font-bold gradient-text mb-2">50+</div>
          <div className="text-gray-400">Projects Delivered</div>
        </div>
        
        <div className="glass-effect rounded-xl p-8 text-center">
          <div className="text-4xl font-bold gradient-text mb-2">90%</div>
          <div className="text-gray-400">Efficiency Improvement</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceSection;
