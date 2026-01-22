// src/components/PlayListItem.jsx
import React from 'react';

const PlayListItem = ({ title, artist, duration, isActive = false }) => {
  return (
    <div
      className={`flex justify-between items-center py-3 px-4 rounded-xl transition-colors ${
        isActive
          ? 'bg-primary-500 text-white'
          : 'text-text dark:text-text-light hover:bg-background/50 dark:hover:bg-background-dark/50'
      }`}
    >
      <div>
        <p className="font-medium">{title}</p>
        <p className={`text-sm ${isActive ? 'text-primary-100' : 'text-text-muted-light dark:text-text-muted-dark'}`}>
          {artist}
        </p>
      </div>
      <span className={`text-sm ${isActive ? 'text-primary-100' : 'text-text-muted-light dark:text-text-muted-dark'}`}>
        {duration}
      </span>
    </div>
  );
};

export default PlayListItem;
