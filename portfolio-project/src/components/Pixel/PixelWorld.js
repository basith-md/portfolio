import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import PixelFireplace from './PixelFireplace';
import RPGTextBox from '../UI/RPGTextBox';
import Bookshelves from './Bookshelves';
import RetroComputer from './RetroComputer';
import DeskArea from './DeskArea';
import SkillsCoffeeTable from './SkillsCoffeeTable';
import { scrollBleep, hoverBleep } from '../../utils/soundfx';

// Simple grid world: center = fireplace, up = bookshelves, left = retro computer, right = desk area, down = skills coffee table
const PixelWorld = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      scrollBleep(e.deltaY);
      const dx = Math.sign(e.deltaX + 0.0001) * 1;
      const dy = Math.sign(e.deltaY + 0.0001) * 1;
      animate(x, x.get() - dx * 320, { type: 'tween', duration: 0.35 });
      animate(y, y.get() - dy * 240, { type: 'tween', duration: 0.35 });
    };
    el.addEventListener('wheel', onWheel, { passive: true });
    return () => el.removeEventListener('wheel', onWheel);
  }, [x, y]);

  const translate = useTransform([x, y], ([mx, my]) => `translate3d(${mx}px, ${my}px, 0)`);

  return (
    <div ref={containerRef} className="pixel-world">
      <motion.div
        className="w-[400vw] h-[400vh] grid grid-rows-3 grid-cols-3 place-items-center"
        style={{ transform: translate }}
      >
        {/* Row 1 */}
        <div />
        <section className="pixel-section flex flex-col items-center">
          <div className="text-[10px] text-[color:#19ff6b] mb-2">north: bookshelves</div>
          <Bookshelves education={[{
            degree: 'B.Tech CS', school: 'NIT Trichy', year: '2021', gpa: '8.5/10'
          },{
            degree: 'MS Data Analytics', school: 'UMass Amherst', year: '2023', gpa: '3.8/4.0'
          },{
            degree: 'Relevant Courses', school: 'Highlights', year: '-', gpa: '-'
          }]} />
        </section>
        <div />

        {/* Row 2 */}
        <section className="pixel-section flex flex-col items-center">
          <div className="text-[10px] text-[color:#19ff6b] mb-2">west: retro computer</div>
          <RetroComputer text={"$ cat story.txt\n> Hi, I'm Basit — I build data experiences\n> Azure, Python, SQL, BI, and pixels."} />
        </section>

        {/* Center: Fireplace */}
        <section className="pixel-section flex flex-col items-center">
          <PixelFireplace spriteUrl="/sprites/fireplace-sprite.png" />
        </section>

        <section className="pixel-section flex flex-col items-center">
          <div className="text-[10px] text-[color:#19ff6b] mb-2">east: desk area</div>
          <DeskArea />
        </section>

        {/* Row 3 */}
        <div />
        <section className="pixel-section flex flex-col items-center">
          <div className="text-[10px] text-[color:#19ff6b] mb-2">south: coffee table</div>
          <SkillsCoffeeTable />
        </section>
        <div />
      </motion.div>
    </div>
  );
};

export default PixelWorld;


