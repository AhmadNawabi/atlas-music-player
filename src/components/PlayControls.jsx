import React from "react";
import { Play, SkipBack, SkipForward, Shuffle, FastForward } from "lucide-react";
import controlsImg from "../../images/play-controls.png"; // Just for verification

export default function PlayControls() {
  return (
    <div className="flex justify-center items-center gap-6 mt-6">
      <button className="text-white p-2 rounded-full hover:bg-gray-700">
        <Shuffle size={24} />
      </button>
      <button className="text-white p-2 rounded-full hover:bg-gray-700">
        <SkipBack size={24} />
      </button>
      <button className="bg-white text-black p-4 rounded-full hover:scale-105 transform transition">
        <Play size={24} />
      </button>
      <button className="text-white p-2 rounded-full hover:bg-gray-700">
        <SkipForward size={24} />
      </button>
      <button className="text-white p-2 rounded-full hover:bg-gray-700">
        <FastForward size={24} />
      </button>
    </div>
  );
}
