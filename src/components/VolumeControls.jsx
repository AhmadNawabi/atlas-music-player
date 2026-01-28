import { useState } from 'react'
import { Volume2, VolumeOff } from 'lucide-react'

export default function VolumeControls() {
  const [muted, setMuted] = useState(false)

  return (
    <div className="mt-2 flex w-64 items-center gap-3">
      {/* Volume toggle */}
      <button
        onClick={() => setMuted(!muted)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-200"
      >
        {muted ? <VolumeOff strokeWidth={0.5} className="text-textMuted dark:text-textMuted-dark" /> : <Volume2 strokeWidth={0.5} className="text-text dark:text-text-dark" />}
      </button>

      {/* Volume slider */}
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="70"
        disabled={muted}
        className={`w-full h-1.5 rounded-full ${muted ? 'opacity-40 cursor-not-allowed' : ''} bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 accent-gray-700 transition-all duration-300`}
      />
    </div>
  )
}
