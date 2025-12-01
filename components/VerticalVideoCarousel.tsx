
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, X } from 'lucide-react';
import { VideoData } from '../types';

interface VerticalVideoCarouselProps {
  videos: VideoData[];
}

const VerticalVideoCarousel: React.FC<VerticalVideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Determine items to show based on responsive width (simplified)
  // Mobile: 1.5, Tablet: 3, Desktop: 4
  const itemsToShow = 4;

  useEffect(() => {
    // Stop auto-scroll if user is hovering (isPaused) OR if a video is playing
    if (isPaused || playingVideoId) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, playingVideoId, videos.length]);

  const handleInteraction = () => {
    // If a video is playing, we don't want to resume auto-scroll automatically
    if (playingVideoId) return;

    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      if (!playingVideoId) {
        setIsPaused(false);
      }
    }, 5000);
  };

  const handleVideoClick = (video: VideoData) => {
    if (playingVideoId === video.id) {
      // If clicking the currently playing video, stop it
      setPlayingVideoId(null);
      setIsPaused(false); // Resume carousel
    } else {
      // Play new video
      setPlayingVideoId(video.id);
      setIsPaused(true); // Pause carousel permanently while playing
    }
  };

  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % videos.length;
      visible.push(videos[index]);
    }
    return visible;
  };

  const visibleVideos = getVisibleVideos();

  // Helper to extract video ID for playlist looping
  const getVideoIdFromUrl = (url: string | undefined) => {
    if (!url) return '';
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

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
          {(isPaused || playingVideoId) && (
             <span className="text-xs text-ortho-cyan border border-ortho-cyan px-2 py-1 rounded flex items-center gap-1 animate-pulse">
               <Pause size={10} /> {playingVideoId ? 'Reproduzindo' : 'Pausado'}
             </span>
          )}
       </div>

      <div className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleVideos.map((video, idx) => {
              const isPlaying = playingVideoId === video.id;
              const videoId = getVideoIdFromUrl(video.videoUrl);

              return (
                <div 
                  key={`${video.id}-${currentIndex}-${idx}`}
                  className={`relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg transition-all duration-500 ${isPlaying ? 'border-ortho-cyan ring-2 ring-ortho-cyan/20 scale-100 z-10' : 'hover:scale-105 hover:border-ortho-cyan cursor-pointer'}`}
                  onClick={() => !isPlaying && handleVideoClick(video)}
                >
                  {isPlaying && video.videoUrl ? (
                    <div className="w-full h-full relative group/video">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        // playlist={videoId} is required for loop=1 to work on a single video
                        src={`${video.videoUrl}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&loop=1&playlist=${videoId}&playsinline=1`} 
                        title={video.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingVideoId(null);
                          setIsPaused(false);
                        }}
                        className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full opacity-0 group-hover/video:opacity-100 transition-opacity hover:bg-ortho-cyan hover:text-black z-20"
                        title="Fechar Vídeo"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"></div>

                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-ortho-cyan/20 backdrop-blur-sm border border-ortho-cyan flex items-center justify-center">
                          <Play size={20} className="text-ortho-cyan fill-current ml-1" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                        <span className="text-xs font-mono text-ortho-cyan mb-1 block">{video.duration}</span>
                        <h4 className="text-white font-semibold text-sm leading-tight line-clamp-2">{video.title}</h4>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalVideoCarousel;
