// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 max-w-6xl mx-auto">
      {/* Currently Playing Skeleton */}
      <div className="flex flex-col items-center space-y-6">
        {/* Cover Art Skeleton */}
        <div className="w-52 h-52 rounded-xl bg-player-surface dark:bg-player-surface-dark animate-pulse shadow-card dark:shadow-card-dark" />

        {/* Song Title Skeleton */}
        <div className="text-center space-y-2 w-48">
          <div className="h-6 rounded bg-player-surface dark:bg-player-surface-dark animate-pulse" />
          <div className="h-4 rounded bg-player-surface dark:bg-player-surface-dark animate-pulse w-3/4 mx-auto" />
        </div>

        {/* Play Controls Skeleton */}
        <div className="flex items-center space-x-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-player-surface dark:bg-player-surface-dark animate-pulse"
            />
          ))}
        </div>

        {/* Volume Control Skeleton */}
        <div className="flex items-center space-x-3 w-64">
          <div className="w-5 h-5 rounded bg-player-surface dark:bg-player-surface-dark animate-pulse" />
          <div className="w-full h-2 rounded-lg bg-player-surface dark:bg-player-surface-dark animate-pulse" />
        </div>
      </div>

      {/* Playlist Skeleton */}
      <div className="w-full max-w-md">
        <div className="h-5 w-20 rounded bg-player-surface dark:bg-player-surface-dark animate-pulse mb-3" />
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-3 px-4 rounded-xl bg-player-surface dark:bg-player-surface-dark animate-pulse"
            >
              <div className="space-y-1.5 flex-1">
                <div className="h-4 rounded w-3/4" />
                <div className="h-3 rounded w-1/2" />
              </div>
              <div className="h-3 rounded w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
