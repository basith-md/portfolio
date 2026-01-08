import React from 'react';

const RPGTextBox = ({ title, children, onClick }) => {
  return (
    <div className="rpg-box p-4 text-sm leading-relaxed cursor-pointer" onClick={onClick}>
      {title && (
        <div className="mb-2 text-[10px] uppercase tracking-widest text-[color:#19ff6b]">
          {title}
        </div>
      )}
      <div className="typewriter">{children}</div>
    </div>
  );
};

export default RPGTextBox;


