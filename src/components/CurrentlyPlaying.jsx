// src/components/CurrentlyPlaying.jsx
import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-background dark:bg-background-dark rounded-2xl shadow-card dark:shadow-card-dark max-w-md mx-auto transition-colors">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
};

export default CurrentlyPlaying;
