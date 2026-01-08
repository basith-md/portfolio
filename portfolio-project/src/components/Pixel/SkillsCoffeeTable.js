import React from 'react';

const SkillBar = ({ name, value }) => (
  <div className="mb-2">
    <div className="text-[10px] mb-1">{name}</div>
    <div className="w-full h-4 bg-[color:#241b1b]">
      <div className="h-4 bg-[color:#19ff6b]" style={{ width: `${value}%`, transition: 'width 600ms steps(8)' }} />
    </div>
  </div>
);

const SkillsCoffeeTable = () => {
  const skills = [
    ['Azure', 90],
    ['Python', 85],
    ['SQL', 95],
    ['PowerBI', 80],
  ];
  return (
    <div className="w-80 bg-[color:#3b2f2f] p-3 rpg-box">
      {skills.map(([n, v]) => <SkillBar key={n} name={n} value={v} />)}
    </div>
  );
};

export default SkillsCoffeeTable;


