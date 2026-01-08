import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PixelWorld from './components/Pixel/PixelWorld';
import PixelCat from './components/Pixel/PixelCat';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Remove old navigation; PixelWorld handles movement via scroll

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const sectionVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold gradient-text">Loading Portfolio...</h2>
          <p className="text-gray-400 mt-2">Preparing your experience</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[color:#120e0e]">
      <PixelWorld />
      <PixelCat />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 text-[10px] text-[color:#19ff6b]"
      >
        Use scroll to explore the cozy 8-bit room
      </motion.div>
    </div>
  );
}

export default App;
