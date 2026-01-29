import { useEffect, useRef } from "react";
import { Song } from "./CoverArt";

type AudioPlayerProps = {
  currentSong: Song;
  isPlaying: boolean;
  volume: number;
  speed: number;
};

export default function AudioPlayer({
  currentSong,
  isPlaying,
  volume,
  speed,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play or pause when isPlaying changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error("Audio play failed:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Update playback speed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  // Update source when current song changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // reload audio with new src
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Audio play failed:", err);
        });
      }
    }
  }, [currentSong]);

  return (
    <audio
      ref={audioRef}
      src={currentSong.audioUrl} // Song type should have audioUrl
      preload="metadata"
      style={{ display: "none" }} // hide built-in audio controls
    />
  );
}
