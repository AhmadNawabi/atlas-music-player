// src/components/SongTitle.tsx
import React from "react";
import { Song } from "./CoverArt"; // Reuse the Song type from CoverArt

type SongTitleProps = {
  currentSong: Song;
};

const SongTitle: React.FC<SongTitleProps> = ({ currentSong }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-text dark:text-text-dark">
        {currentSong.title}
      </h2>
      <p className="text-textMuted dark:text-textMuted-dark text-gray-500">
        {currentSong.artist}
      </p>
    </div>
  );
};

export default SongTitle;
