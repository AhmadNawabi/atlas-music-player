// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="flex h-screen bg-background text-text">
      {/* Left Section */}
      <div className="w-1/2 p-4">
        {/* Cover Art */}
        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-xl w-full h-64 animate-pulse" />
        
        {/* Song Title */}
        <div className="mt-6">
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-2 animate-pulse" />
          <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2 animate-pulse" />
        </div>
        
        {/* Play Controls */}
        <div className="flex items-center justify-between mt-8 mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-8 animate-pulse" />
            <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-8 animate-pulse" />
            <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-8 animate-pulse" />
            <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-8 animate-pulse" />
          </div>
          <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-8 animate-pulse" />
        </div>
        
        {/* Volume Controls */}
        <div className="flex items-center space-x-3">
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-4 animate-pulse" />
          <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 p-4 border-l border-neutral-200 dark:border-neutral-700">
        <h2 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-100">Playlist</h2>
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-start py-2">
              <div className="flex-1">
                <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full mb-1.5 animate-pulse" />
                <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3 animate-pulse" />
              </div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-8 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
