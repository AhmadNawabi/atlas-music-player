// src/components/VolumeControls.jsx
import React from 'react';
import { Volume2 } from 'lucide-react';

const VolumeControls = () => {
  return (
    <div className="flex items-center space-x-3 w-64">
      <Volume2 size={20} className="text-text/70" />
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="80"
        className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-primary-500"
      />
    </div>
  );
};

export default VolumeControls;
