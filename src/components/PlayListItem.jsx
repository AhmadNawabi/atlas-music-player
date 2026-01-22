import React from "react";
import playlistImg from "../../images/playlistitem.png"; // Just for reference

export default function PlayListItem() {
  return (
    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-800 rounded-lg w-full max-w-md">
      <div>
        <img src={playlistImg} alt="Playlist Item" className="w-12 h-12 inline-block mr-2" />
        <p className="text-white font-medium inline">Song Name</p>
        <p className="text-gray-400 text-sm">Artist Name</p>
      </div>
      <p className="text-gray-400 text-sm">3:45</p>
    </div>
  );
}
