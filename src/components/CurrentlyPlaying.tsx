// src/components/CurrentlyPlaying.tsx
import { useState } from "react";
import CoverArt, { Song } from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import AudioPlayer from "./AudioPlayer";

type CurrentlyPlayingProps = {
  currentSong: Song;
  onNext?: () => void;
  onPrev?: () => void;
};

export default function CurrentlyPlaying({
  currentSong,
  onNext,
  onPrev,
}: CurrentlyPlayingProps) {
  // ⚡ Add state for controlling audio
  const [isPlaying, setIsPlaying] = useState(false); // Play / pause
  const [volume, setVolume] = useState(0.5);         // 0 to 1
  const [speed, setSpeed] = useState(1);             // 0.5, 1, 1.5, 2

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Cover art */}
      <CoverArt currentSong={currentSong} showLyricsOnHover />

      {/* Song title */}
      <SongTitle currentSong={currentSong} />

      {/* Play controls */}
      <PlayControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        speed={speed}
        setSpeed={setSpeed}
        onNext={onNext}
        onPrev={onPrev}
      />

      {/* Volume controls */}
      <VolumeControls volume={volume} setVolume={setVolume} />

      {/* Audio player */}
      <AudioPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        volume={volume}
        speed={speed}
      />
    </div>
  );
}
