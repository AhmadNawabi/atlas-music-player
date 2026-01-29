import React, { useState, useEffect } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import Footer from "./Footer";
import { Song } from "./CoverArt";

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch playlist from API
  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const res = await fetch("/api/v1/playlist");
        const data: Song[] = await res.json();
        setPlaylist(data);
        setCurrentIndex(0); // first song is current
      } catch (err) {
        console.error("Failed to fetch playlist:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPlaylist();
  }, []);

  const currentSong = playlist[currentIndex];

  const handleSelectSong = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="min-h-screen flex flex-col bg-appBg dark:bg-darkBg text-text dark:text-text-dark transition-colors duration-300">
      <div className="flex items-center justify-center px-4 py-4 md:px-6">
        <div className="
          w-full max-w-6xl
          rounded-3xl
          p-6
          shadow-xl
          backdrop-blur-md
          bg-panelBg/90 dark:bg-darkPanel/90
          transition-colors duration-300
          bg-panelBg/90 dark:bg-panelBg-dark/80
        ">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8">
            {/* Currently Playing Section */}
            <div className="pr-4 md:border-r md:border-r-gray-300/40 dark:md:border-r-gray-500/30">
              {currentSong && (
                <CurrentlyPlaying
                  currentSong={currentSong}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}
            </div>

            {/* Playlist Section */}
            <div className="pl-6">
              <Playlist
                playlist={playlist}
                currentIndex={currentIndex}
                onSelectSong={handleSelectSong}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
