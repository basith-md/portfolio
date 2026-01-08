import React, { useEffect, useRef } from 'react';

const PixelCat = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e) => {
      const { clientX, clientY } = e;
      el.style.transform = `translate3d(${clientX * 0.02}px, ${clientY * 0.02}px, 0)`;
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      <div className="w-10 h-10 bg-[color:#19ff6b]" style={{ imageRendering: 'pixelated' }} />
      <div className="text-[10px] text-[color:#19ff6b] mt-1 text-center">cat</div>
    </div>
  );
};

export default PixelCat;


