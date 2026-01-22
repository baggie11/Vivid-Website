'use client';

import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // All available images from carousel_images folder
  const allImages = useMemo(() => [
    { src: '/images/carousel_images/DSC04603.JPG', alt: 'VIVID - Event Image 1' },
    { src: '/images/carousel_images/DSC04617.JPG', alt: 'VIVID - Event Image 2' },
    { src: '/images/carousel_images/DSC04630.JPG', alt: 'VIVID - Event Image 3' },
    { src: '/images/carousel_images/IMG_8408.JPG', alt: 'VIVID - Event Image 4' },
    { src: '/images/carousel_images/IMG_8417.JPG', alt: 'VIVID - Event Image 5' },
    { src: '/images/carousel_images/IMG_8427.JPG', alt: 'VIVID - Event Image 6' },
    { src: '/images/carousel_images/IMG_8441.JPG', alt: 'VIVID - Event Image 7' },
    { src: '/images/carousel_images/IMG_8455.JPG', alt: 'VIVID - Event Image 8' },
  ], []);

  // Select random images on component mount
  const images = useMemo(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 8); // Show all 8 images
  }, [allImages]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Visual Showcase</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Gallery</span>
          </h2>
         
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Container */}
          <div 
            className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Gallery;
