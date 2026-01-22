import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return (
    <div className="bg-black p-6 rounded-xl flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      {/* Cover Art */}
      <CoverArt />

      {/* Song Title */}
      <SongTitle />

      {/* Play Controls */}
      <PlayControls />

      {/* Volume Controls */}
      <VolumeControls />

      {/* Playlist Item */}
      <div className="w-full">
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </div>
    </div>
  );
}
