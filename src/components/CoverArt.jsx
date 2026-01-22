import React from "react";
import cover from "../../images/cover-art.png";

export default function CoverArt() {
  return (
    <div className="w-48 h-48">
      <img
        src={cover}
        alt="Cover Art"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}
