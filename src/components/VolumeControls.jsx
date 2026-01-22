import React from "react";

export default function VolumeControls() {
  return (
    <div className="flex items-center justify-center mt-6">
      <input
        type="range"
        min="0"
        max="100"
        className="w-48 h-1 rounded-full bg-gray-600 accent-white"
      />
    </div>
  );
}
