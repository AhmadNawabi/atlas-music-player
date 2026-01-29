import React from "react";
import PlayListItem from "./PlayListItem";
import { Song } from "./CoverArt";

type PlaylistProps = {
  playlist: Song[];
  currentIndex: number;
  onSelectSong: (index: number) => void;
};

const Playlist: React.FC<PlaylistProps> = ({
  playlist,
  currentIndex,
  onSelectSong,
}) => {
  // Convert duration to seconds
  const parseDuration = (duration: string | number): number => {
    if (typeof duration === "number") return duration;
    const parts = duration.split(":").map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return 0;
  };

  // Reorder playlist: current song first
  const reorderedPlaylist = [
    playlist[currentIndex],
    ...playlist.filter((_, i) => i !== currentIndex),
  ];

  return (
    <div className="w-full">
      <h3 className="mb-4 text-lg font-semibold text-text dark:text-text-dark">
        Playlist
      </h3>

      <div className="space-y-2 overflow-y-auto max-h-[460px] rounded-lg p-3">
        {reorderedPlaylist.map((song, index) => {
          // Determine if this song is the current song
          const isActive = song.id === playlist[currentIndex].id;

          return (
            <PlayListItem
              key={song.id}
              title={song.title}
              artist={song.artist}
              duration={parseDuration(song.duration)}
              active={isActive}
              onClick={() => {
                // Find original index in playlist
                const originalIndex = playlist.findIndex((s) => s.id === song.id);
                onSelectSong(originalIndex);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
