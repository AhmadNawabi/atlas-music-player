import React from "react";
import PlayListItem from "./PlayListItem";

export default function Playlist() {
  // Example playlist data
  const songs = [
    { id: 1, title: "Song One", artist: "Artist One", length: "3:45" },
    { id: 2, title: "Song Two", artist: "Artist Two", length: "4:05" },
    { id: 3, title: "Song Three", artist: "Artist Three", length: "2:58" },
  ];

  const selectedSongId = 2; // Highlight the currently playing song

  return (
    <div className="mt-6 w-full max-w-lg mx-auto bg-gray-800 rounded-lg p-4 flex flex-col gap-2">
      {songs.map((song) => (
        <PlayListItem
          key={song.id}
          title={song.title}
          artist={song.artist}
          length={song.length}
          selected={song.id === selectedSongId}
        />
      ))}
    </div>
  );
}
