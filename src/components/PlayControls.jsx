import { useState } from 'react'
import { 
  CirclePlay, 
  CirclePause, 
  FastForward, 
  Repeat1
} from 'lucide-react'

export default function PlayControls() {
  const [playing, setPlaying] = useState(false)
  const speeds = ['0.5x', '1x', '1.5x', '2x']
  const [speedIndex, setSpeedIndex] = useState(1)

  const handleSpeedClick = () => {
    setSpeedIndex((prev) => (prev + 1) % speeds.length)
  }

  return (
    <div
      className="
        flex items-center justify-between gap-8
        bg-controlBg/90
        px-12 py-2
        rounded-3xl
        border border-gray-200
        shadow-lg
        backdrop-blur-md
        transition-all duration-300
        hover:shadow-xl
        w-full max-w-4xl
        mx-auto
      "
    >
      {/* Playback speed */}
      <button
        onClick={handleSpeedClick}
        className="
          cursor-pointer
          text-gray-500 font-medium
          hover:text-blue-500
          transition-colors duration-200
        "
      >
        {speeds[speedIndex]}
      </button>

      {/* Fast-backward */}
      <button
        className="
          cursor-pointer
          hover:text-blue-500
          transition-colors duration-200
        "
      >
        <FastForward strokeWidth={0.5} className="rotate-180" />
      </button>

      {/* Play / Pause */}
      <button
        onClick={() => setPlaying(!playing)}
        className="
          cursor-pointer
          flex h-12 w-12 items-center justify-center
          rounded-full
          bg-white
          text-black
          shadow-md
          transition-all duration-300
          hover:scale-105 hover:shadow-xl
          active:scale-95
        "
        aria-label="Play or pause"
      >
        {playing ? (
          <CirclePause strokeWidth={0.5} />
        ) : (
          <CirclePlay strokeWidth={0.5} />
        )}
      </button>

      {/* Fast-forward */}
      <button
        className="
          cursor-pointer
          hover:text-blue-500
          transition-colors duration-200
        "
      >
        <FastForward strokeWidth={0.5} />
      </button>

      {/* Repeat */}
      <button
        className="
          cursor-pointer
          hover:text-blue-500
          transition-colors duration-200
        "
      >
        <Repeat1 strokeWidth={0.5} />
      </button>
    </div>
  )
}
