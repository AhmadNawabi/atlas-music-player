// src/components/MusicPlayer.jsx
import React from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

const MusicPlayer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 max-w-6xl mx-auto">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
};

export default MusicPlayer;
