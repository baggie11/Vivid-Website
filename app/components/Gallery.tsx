'use client';

import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // All available images from day1 and day2 folders
  const allImages = useMemo(() => {
    const day1Images = Array.from({ length: 20 }, (_, i) => ({
      src: `/images/day1/day1_${i + 1}.jpg`,
      alt: `VIVID Day 1 - Image ${i + 1}`
    }));
    
    const day2Images = Array.from({ length: 20 }, (_, i) => ({
      src: `/images/day2/day2_${i + 1}.jpg`,
      alt: `VIVID Day 2 - Image ${i + 1}`
    }));
    
    return [...day1Images, ...day2Images];
  }, []);

  // Select random images on component mount
  const images = useMemo(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12); // Show 12 random images
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore moments from VIVID and SSN College of Engineering
          </p>
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

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Don't miss important deadlines!
          </h3>
          <p className="text-gray-600 mb-6">
            Mark these dates and ensure your team submits before the final deadline
          </p>
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#0D4BA0] text-white font-semibold rounded-lg hover:bg-[#0a3d87] transition-all hover:shadow-lg"
          >
            Download Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
