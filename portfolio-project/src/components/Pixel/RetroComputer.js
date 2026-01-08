import React from 'react';

const RetroComputer = ({ text }) => {
  return (
    <div className="w-72 h-56 bg-[color:#241b1b] rpg-box p-3 text-[color:#19ff6b]">
      <div className="typewriter text-[9px] leading-relaxed whitespace-pre-wrap">{text}</div>
    </div>
  );
};

export default RetroComputer;


