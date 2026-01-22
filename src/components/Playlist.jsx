// src/components/Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Playlist</h2>
      <div className="space-y-2">
        <PlayListItem title="Blinding Lights" artist="The Weeknd" duration="3:20" />
        <PlayListItem
          title="Save Your Tears"
          artist="The Weeknd"
          duration="3:35"
          isActive={true}
        />
        <PlayListItem title="Starboy" artist="The Weeknd" duration="3:50" />
        <PlayListItem title="Take My Breath" artist="The Weeknd" duration="4:10" />
        <PlayListItem title="Die For You" artist="The Weeknd" duration="4:20" />
      </div>
    </div>
  );
};

export default Playlist;
