import React from 'react';

const RetroChart = ({ label }) => (
  <div className="w-56 h-40 bg-[color:#241b1b] rpg-box p-2">
    <div className="text-[8px] text-[color:#19ff6b] mb-2">{label}</div>
    <div className="flex items-end gap-1 h-24">
      {[30, 60, 45, 80, 55].map((h, i) => (
        <div key={i} className="w-6 bg-[color:#19ff6b]" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

const DeskArea = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <RetroChart label="Thorogood Associates" />
      <RetroChart label="Dr Lal PathLabs" />
    </div>
  );
};

export default DeskArea;


