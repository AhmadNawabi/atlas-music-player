import LoadingSkeleton from './LoadingSkeleton'
import CurrentlyPlaying from './CurrentlyPlaying'
import Playlist from './Playlist'
import Footer from './Footer'

export default function MusicPlayer() {
  return (
    <div className="min-h-screen flex flex-col bg-appBg dark:bg-appBg-dark text-text dark:text-text-dark transition-colors duration-300">
      
      {/* Main Player Container */}
      <div className="flex items-center justify-center px-4 py-4 md:px-6">
        <div className="
          w-full max-w-6xl
          rounded-3xl
          p-6
          shadow-xl
          backdrop-blur-md
          transition-colors duration-300
          bg-panelBg/90 dark:bg-panelBg-dark/80
        ">
          
          {/* CurrentlyPlaying + Playlist */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8">
            
            {/* Currently Playing Section */}
            <div className="pr-4 md:border-r md:border-r-gray-300/40 dark:md:border-r-gray-500/30">
              <CurrentlyPlaying />
            </div>

            {/* Playlist Section */}
            <div className="pl-6">
              <Playlist />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
