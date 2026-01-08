import React from 'react';

// The sprite sheet should be a free asset or CSS-generated. Placeholder CSS class expects a background-image set via style.
const PixelFireplace = ({ spriteUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="fireplace-sprite pixel-shadow"
        style={{ backgroundImage: `url(${spriteUrl})` }}
      />
      <div className="mt-2 text-[10px] text-[color:#f5a11a]">cozy fireplace</div>
    </div>
  );
};

export default PixelFireplace;


