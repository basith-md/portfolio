import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = ({ projects, onCardExpand }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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

  const handleProjectClick = (project) => {
    onCardExpand({
      type: 'project',
      data: project,
      title: project.title,
      content: project
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'prototype':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Innovative solutions that showcase technical expertise and problem-solving abilities
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="glass-effect rounded-xl overflow-hidden cursor-pointer card-hover group"
            onClick={() => handleProjectClick(project)}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover={{ scale: 1.03 }}
            layout
          >
            {/* Project Image/Icon */}
            <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="text-6xl opacity-20"
                animate={{ 
                  scale: hoveredProject === project.id ? 1.1 : 1,
                  rotate: hoveredProject === project.id ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {project.category === 'Data Analytics' && '📊'}
                {project.category === 'Natural Language Processing' && '🤖'}
                {project.category === 'Product Design & Innovation' && '🚀'}
                {project.category === 'Cloud Engineering' && '☁️'}
              </motion.div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-xs font-medium">
                  {project.duration}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Key Results */}
              <div className="space-y-2">
                {project.results.slice(0, 2).map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-start space-x-2">
                    <span className="text-primary-400 text-sm mt-0.5">•</span>
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>🐙</span>
                  <span>Code</span>
                </motion.a>
                
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>🚀</span>
                  <span>Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-2">{projects.length}</div>
          <div className="text-gray-400">Total Projects</div>
        </div>
        
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-2">
            {projects.filter(p => p.status === 'Completed').length}
          </div>
          <div className="text-gray-400">Completed</div>
        </div>
        
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-2">
            {new Set(projects.flatMap(p => p.technologies)).size}
          </div>
          <div className="text-gray-400">Technologies</div>
        </div>
        
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-2">100%</div>
          <div className="text-gray-400">Client Satisfaction</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
