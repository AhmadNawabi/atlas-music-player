// ProgressBar.jsx
export default function ProgressBar() {
  return (
    <div className="w-full max-w-xs mt-4 px-1">
      <div className="flex justify-between text-xs text-player-muted dark:text-player-muted mb-1">
        <span>1:24</span>
        <span>4:30</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="30"
        className="w-full h-1.5 rounded-full appearance-none bg-player-surface dark:bg-player-surface-dark accent-player-accent cursor-pointer"
      />
    </div>
  );
}
