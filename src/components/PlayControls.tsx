// src/components/PlayControls.tsx
import { CirclePlay, CirclePause, FastForward, Repeat1 } from "lucide-react";

type PlayControlsProps = {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  speed: number; // 0.5, 1, 1.5, 2
  setSpeed: (value: number) => void;
  onNext?: () => void;
  onPrev?: () => void;
  onRepeat?: () => void;
};

export default function PlayControls({
  isPlaying,
  setIsPlaying,
  speed,
  setSpeed,
  onNext,
  onPrev,
  onRepeat,
}: PlayControlsProps) {
  const speeds = [0.5, 1, 1.5, 2];

  const handleSpeedClick = () => {
    const currentIndex = speeds.indexOf(speed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setSpeed(speeds[nextIndex]);
  };

  return (
    <div className="flex items-center justify-between gap-8 bg-controlBg/90 px-12 py-2 rounded-3xl border border-gray-200 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl w-full max-w-4xl mx-auto">
      {/* Playback speed */}
      <button
        onClick={handleSpeedClick}
        className="cursor-pointer text-gray-500 font-medium hover:text-blue-500 transition-colors duration-200"
      >
        {speed}x
      </button>

      {/* Back button */}
      <button
        onClick={onPrev}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
        aria-label="Previous song"
      >
        <FastForward strokeWidth={0.5} className="rotate-180" />
      </button>

      {/* Play / Pause */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
        aria-label="Play or pause"
      >
        {isPlaying ? <CirclePause strokeWidth={0.5} /> : <CirclePlay strokeWidth={0.5} />}
      </button>

      {/* Forward button */}
      <button
        onClick={onNext}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
        aria-label="Next song"
      >
        <FastForward strokeWidth={0.5} />
      </button>

      {/* Repeat button */}
      <button
        onClick={onRepeat}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
        aria-label="Repeat song"
      >
        <Repeat1 strokeWidth={0.5} />
      </button>
    </div>
  );
}
