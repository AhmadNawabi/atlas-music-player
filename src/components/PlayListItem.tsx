// src/components/PlayListItem.tsx
import React from "react";

type PlayListItemProps = {
  title: string;
  artist: string;
  duration: number; // duration in seconds
  active?: boolean;
  onClick?: () => void;
};

const PlayListItem: React.FC<PlayListItemProps> = ({
  title,
  artist,
  duration,
  active = false,
  onClick,
}) => {
  // Format seconds to MM:SS or HH:MM:SS
  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center p-3 rounded-md cursor-pointer transition-colors duration-200
        ${active ? "bg-blue-300 text-white" : "hover:bg-gray-100"}`}
    >
      <div>
        <p className="font-medium text-text dark:text-text-dark">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{artist}</p>
      </div>
      <span
        className={`text-sm ${
          active ? "text-white" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        {formatDuration(duration)}
      </span>
    </div>
  );
};

export default PlayListItem;
