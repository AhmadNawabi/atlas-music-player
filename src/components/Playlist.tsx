import React from "react";
import PlayListItem from "./PlayListItem";
import { Song } from "./CoverArt";

type PlaylistProps = {
  playlist: Song[];
  currentIndex: number;
  onSelectSong: (index: number) => void;
};

const Playlist: React.FC<PlaylistProps> = ({ playlist, currentIndex, onSelectSong }) => {
  return (
    <div className="w-full">
      <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100 relative">
        Playlist
        {/* small underline just below the heading */}
        <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 rounded-full"></span>
      </h3>

      <div className="space-y-2 overflow-y-auto max-h-[460px] rounded-lg p-1">
        {playlist.map((song, index) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={
              typeof song.duration === "number"
                ? `${Math.floor(song.duration / 60)}:${String(song.duration % 60).padStart(2, "0")}`
                : song.duration
            }
            active={index === currentIndex}
            onClick={() => onSelectSong(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
