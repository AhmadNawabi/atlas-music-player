import React from "react";
import songTitleImg from "../../images/song-title.png";

export default function SongTitle() {
  return (
    <div className="text-center mt-4">
      <img src={songTitleImg} alt="Song Title" className="mx-auto" />
    </div>
  );
}
