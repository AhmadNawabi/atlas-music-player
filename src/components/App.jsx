// src/App.jsx
import React, { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import MusicPlayer from './MusicPlayer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading delay to showcase the skeleton
    // Replace this with real data fetching logic later if needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8 seconds feels smooth and intentional

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <LoadingSkeleton /> : <MusicPlayer />}
    </>
  );
}
