import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoData } from '../types';

interface VideoCarouselProps {
  videos: VideoData[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3; 
  // In a real app, use a hook to determine items based on screen width
  
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 > videos.length - itemsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? videos.length - itemsToShow : prev - 1
    );
  };

  const handleVideoClick = (video: VideoData) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Slice the videos array to show only current window
  // Note: For a true infinite loop, logic is more complex. 
  // This is a simple sliding window for the prompt requirements.
  const visibleVideos = [];
  for (let i = 0; i < Math.min(videos.length, itemsToShow); i++) {
      const index = (currentIndex + i) % videos.length;
      visibleVideos.push(videos[index]);
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 group">
      {/* Carousel Controls */}
      <div className="flex items-center justify-between space-x-4">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full border border-ortho-cyan text-ortho-cyan hover:bg-ortho-cyan hover:text-black transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleVideos.map((video) => (
              <div 
                key={`${video.id}-${currentIndex}`} // Force re-render for animation simply
                className="group/item relative bg-ortho-black border border-gray-800 hover:border-ortho-cyan transition-all duration-300 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-ortho-cyan/20"
                onClick={() => handleVideoClick(video)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transform group-hover/item:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover/item:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-ortho-cyan/20 border border-ortho-cyan flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Play size={20} className="text-ortho-cyan fill-current" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg truncate group-hover/item:text-ortho-cyan transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="p-3 rounded-full border border-ortho-cyan text-ortho-cyan hover:bg-ortho-cyan hover:text-black transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-ortho-navy rounded-lg shadow-2xl border border-ortho-cyan p-1">
             <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-ortho-cyan transition-colors flex items-center gap-2"
            >
              Fechar <X size={24} />
            </button>
            <div className="aspect-video bg-black rounded w-full flex items-center justify-center relative">
               {/* Simulation of a video player */}
               <img 
                src={selectedVideo.thumbnail} 
                className="w-full h-full object-cover opacity-50" 
                alt="Video playing"
               />
               <div className="absolute text-center">
                 <p className="text-ortho-cyan text-2xl font-bold mb-4">Reproduzindo: {selectedVideo.title}</p>
                 <p className="text-gray-400 text-sm">(Simulação de Player de Vídeo)</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;