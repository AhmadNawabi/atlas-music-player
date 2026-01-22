import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg w-full max-w-lg mx-auto">
      {/* Cover Art */}
      <CoverArt />

      {/* Song Title */}
      <div className="mt-4 w-full text-center">
        <SongTitle />
      </div>

      {/* Play Controls */}
      <div className="mt-6 w-full flex justify-center">
        <PlayControls />
      </div>

      {/* Volume Controls */}
      <div className="mt-4 w-full">
        <VolumeControls />
      </div>
    </div>
  );
}
