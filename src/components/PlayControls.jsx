// src/components/PlayControls.jsx
import React from 'react';
import { Play, SkipBack, SkipForward, Shuffle, RotateCcw } from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="flex items-center justify-center space-x-6">
      <button className="text-text/60 hover:text-text transition-colors">
        <RotateCcw size={24} />
      </button>
      <button className="text-text/60 hover:text-text transition-colors">
        <SkipBack size={32} />
      </button>
      <button className="bg-primary-500 text-white rounded-full p-3 hover:bg-primary-600 transition-colors">
        <Play size={28} />
      </button>
      <button className="text-text/60 hover:text-text transition-colors">
        <SkipForward size={32} />
      </button>
      <button className="text-text/60 hover:text-text transition-colors">
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;
