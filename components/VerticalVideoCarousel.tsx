import React, { useState, useEffect, useRef } from 'react';
import { Play, X, Pause } from 'lucide-react';
import { VideoData } from '../types';

interface VerticalVideoCarouselProps {
  videos: VideoData[];
}

const VerticalVideoCarousel: React.FC<VerticalVideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Determine items to show based on responsive width (simplified)
  // Mobile: 1.5, Tablet: 3, Desktop: 4
  const itemsToShow = 4;

  useEffect(() => {
    if (isPaused || selectedVideo) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, selectedVideo, videos.length]);

  const handleInteraction = () => {
    // Pause immediately
    setIsPaused(true);

    // Clear existing timeout to restart the 5s countdown
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Set timeout to resume after 5 seconds of no interaction
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleVideoClick = (video: VideoData) => {
    setSelectedVideo(video);
    handleInteraction();
  };

  const closeModal = () => {
    setSelectedVideo(null);
    handleInteraction();
  };

  // Logic to show a continuous loop effect visually
  // We duplicate the array to allow seamless scrolling appearance in a robust implementation,
  // but here we will use a sliding window index logic for simplicity.
  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % videos.length;
      visible.push(videos[index]);
    }
    return visible;
  };

  const visibleVideos = getVisibleVideos();

  return (
    <div 
      className="w-full py-8 relative group" 
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
    >
       <div className="flex items-center justify-between mb-4 px-4 max-w-7xl mx-auto">
          <h3 className="text-white text-xl font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-ortho-cyan rounded-full animate-pulse"></span>
            Acompanhe Nossos Stories
          </h3>
          {isPaused && !selectedVideo && (
             <span className="text-xs text-ortho-cyan border border-ortho-cyan px-2 py-1 rounded flex items-center gap-1 animate-pulse">
               <Pause size={10} /> Pausado
             </span>
          )}
       </div>

      <div className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleVideos.map((video, idx) => (
              <div 
                key={`${video.id}-${currentIndex}-${idx}`} // Key changes to force animation
                className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden border border-gray-800 cursor-pointer hover:border-ortho-cyan transition-all duration-500 transform hover:scale-105 shadow-lg"
                onClick={() => handleVideoClick(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-ortho-cyan/20 backdrop-blur-sm border border-ortho-cyan flex items-center justify-center">
                    <Play size={20} className="text-ortho-cyan fill-current ml-1" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-mono text-ortho-cyan mb-1 block">{video.duration}</span>
                  <h4 className="text-white font-semibold text-sm leading-tight line-clamp-2">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-ortho-cyan transition-colors bg-black/50 p-2 rounded-full"
            >
              <X size={32} />
          </button>
          
          <div className="relative w-full max-w-sm md:max-w-md bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-[80vh]">
             {/* Simulation of vertical video player */}
             <img 
              src={selectedVideo.thumbnail} 
              className="w-full h-full object-cover opacity-60" 
              alt="Video playing"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
               <div className="w-16 h-16 rounded-full bg-ortho-cyan/20 border border-ortho-cyan flex items-center justify-center mb-6 animate-pulse">
                 <Play size={32} className="text-ortho-cyan fill-current ml-1" />
               </div>
               <p className="text-ortho-cyan text-2xl font-bold mb-2">{selectedVideo.title}</p>
               <p className="text-gray-400 text-sm">Reproduzindo Story...</p>
             </div>
             
             {/* Progress Bar Simulation */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
               <div className="h-full bg-ortho-cyan w-1/3"></div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticalVideoCarousel;