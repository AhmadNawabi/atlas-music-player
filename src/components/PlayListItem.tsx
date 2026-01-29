import React from "react";

type PlayListItemProps = {
  title: string;
  artist: string;
  duration: string; // MM:SS
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
  return (
    <div
      onClick={onClick}
      className={`
        flex justify-between items-center p-3 rounded-md cursor-pointer transition-colors duration-300 ease-in-out
        ${active
          ? "bg-blue-200 text-blue-900 font-semibold dark:bg-blue-900 dark:text-white"
          : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-blue-800/50"
        }
      `}
    >
      <div>
        <p className={`font-medium ${active ? "text-blue-900 dark:text-white" : "text-gray-900 dark:text-gray-300"}`}>
          {title}
        </p>
        <p className={`text-sm ${active ? "text-blue-800 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}>
          {artist}
        </p>
      </div>
      <span className={`text-sm ${active ? "text-blue-900 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}>
        {duration}
      </span>
    </div>
  );
};

export default PlayListItem;
