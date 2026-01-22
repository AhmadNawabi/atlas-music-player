// src/components/CoverArt.jsx
import React from 'react';

const CoverArt = () => {
  return (
    <div className="w-52 h-52 rounded-xl overflow-hidden shadow-lg">
      <img
        src="/images/cover-art.png"
        alt="Album Cover"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CoverArt;
