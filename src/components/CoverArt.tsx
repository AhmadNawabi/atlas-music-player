// src/components/CoverArt.tsx
import React from "react";

export type Song = {
  id: string;
  title: string;
  artist: string;
  coverArtUrl: string;
  audioUrl: string;
  lyrics?: string;
  duration: string;
};

type CoverArtProps = {
  currentSong: Song;
  showLyricsOnHover?: boolean;
};

const CoverArt: React.FC<CoverArtProps> = ({ currentSong, showLyricsOnHover = false }) => {
  return (
    <div
      className="
        h-[280px] w-[380px] overflow-hidden rounded-xl
        relative
        before:absolute before:inset-0 before:rounded-xl
        before:border-t before:border-t-transparent
        before:bg-gradient-to-r before:from-transparent before:via-gray-300/40 before:to-transparent
        dark:before:via-gray-500/30
      "
      title={showLyricsOnHover && currentSong.lyrics ? currentSong.lyrics : undefined}
    >
      <img
        src={currentSong.coverArtUrl}
        alt={`Album cover for ${currentSong.title} by ${currentSong.artist}`}
        className="h-full w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default CoverArt;
