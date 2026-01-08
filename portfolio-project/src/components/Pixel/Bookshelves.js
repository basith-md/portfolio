import React from 'react';
import RPGTextBox from '../UI/RPGTextBox';

const PixelBook = ({ title, children, onHover }) => (
  <div className="w-40 h-40 bg-[color:#3b2f2f] p-2 rpg-box cursor-pointer" onMouseEnter={onHover}>
    <RPGTextBox title={title}>{children}</RPGTextBox>
  </div>
);

const Bookshelves = ({ education }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {education.map((edu, idx) => (
        <PixelBook key={idx} title={edu.school}>
          {edu.degree}, {edu.year}\nGPA: {edu.gpa}
        </PixelBook>
      ))}
    </div>
  );
};

export default Bookshelves;


