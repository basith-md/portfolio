import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ personalInfo, onCardExpand }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleSkillCardClick = (skill) => {
    onCardExpand({
      type: 'skill',
      data: skill,
      title: skill.name,
      content: `Proficiency: ${skill.level}%`
    });
  };

  const handleEducationClick = (education) => {
    onCardExpand({
      type: 'education',
      data: education,
      title: `${education.degree} - ${education.school}`,
      content: education
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
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.summary}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Skills */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-3xl font-bold text-white mb-6">Technical Skills</h3>
          
          <div className="space-y-4">
            {personalInfo.skills.technical.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass-effect rounded-lg p-4 cursor-pointer card-hover"
                onClick={() => handleSkillCardClick(skill)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="text-primary-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white mb-4">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {personalInfo.skills.tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  variants={itemVariants}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                  whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Education & Contact */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect rounded-lg p-6 cursor-pointer card-hover"
                  onClick={() => handleEducationClick(edu)}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-400 font-medium mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {edu.year} • GPA: {edu.gpa}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {edu.relevant_courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="glass-effect rounded-lg p-6 space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <span className="text-primary-400 text-xl">📧</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <span className="text-primary-400 text-xl">📱</span>
                <span className="text-gray-300">{personalInfo.phone}</span>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <span className="text-primary-400 text-xl">📍</span>
                <span className="text-gray-300">{personalInfo.location}</span>
              </motion.div>

              <div className="flex space-x-4 pt-4">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div variants={itemVariants} className="mt-16">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">Certifications</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {personalInfo.skills.certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-lg p-4 text-center card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary-400 text-2xl mb-2 block">🏆</span>
              <p className="text-white font-medium">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
