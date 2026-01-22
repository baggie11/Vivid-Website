'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Download, Upload, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-[#0a1a3a] via-[#0D4BA0] to-[#1a237e]"
    >
      {/* Geometric Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Triangles */}
        <div className="absolute top-1/4 left-10 w-16 h-16 border border-white/10 animate-pulse triangle"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 border border-white/10 animate-pulse triangle animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-white/10 animate-pulse triangle animation-delay-2000"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-10 right-1/3 w-20 h-20 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-pulse animation-delay-1500"></div>
        
        {/* Animated Squares */}
        <div className="absolute top-1/2 left-20 w-14 h-14 border border-white/10 animate-pulse square animation-delay-500"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 border border-white/10 animate-pulse square animation-delay-1000"></div>
        
        {/* Hexagons */}
        <div className="absolute top-20 left-1/3 w-16 h-16 border border-white/10 animate-pulse hexagon"></div>
        <div className="absolute bottom-1/3 right-1/3 w-22 h-22 border border-white/10 animate-pulse hexagon animation-delay-1200"></div>
        
        {/* Moving Dots */}
        <div className="absolute top-40 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-white/20 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white/30 rounded-full animate-bounce animation-delay-600"></div>
      </div>

      {/* Add CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        .square {
          transform: rotate(45deg);
        }
        
        .hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        
        .animate-bounce {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>

      {/* Optional: Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
            <span className="text-sm font-bold text-white">
              10th Edition • National Level Competition
            </span>
          </div>

          {/* Main Title with Logo */}
          <div className="flex flex-col items-center justify-center mb-6">
            {/* VIVID Logo Image */}
            <div className="mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl rounded-full"></div>
              <img 
                src="/images/vivid.png" 
                alt="VIVID 10.0" 
                className="relative h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] xl:h-[180px] w-auto drop-shadow-lg" 
              />
            </div>
            
            {/* VIVID 10.0 Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent font-black drop-shadow-lg">
                10.0
              </span>
            </h1>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-bold drop-shadow">
              Realize Your Creative Thoughts
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
              <time dateTime="2026-03-26" className="font-bold text-white">
                March 26-27, 2026
              </time>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <p className="font-bold text-white">
              SSN College of Engineering
            </p>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 mb-12 leading-relaxed font-medium">
            A premier national-level project competition organized by the{' '}
            <span className="font-bold text-white">Department of Information Technology</span>{' '}
            at{' '}
            <span className="font-bold text-white">SSN College of Engineering</span>,
            Kalavakkam, Tamil Nadu. Join students and innovators from across the nation to showcase groundbreaking 
            projects across IoT, AI/ML, Blockchain, Data Analytics, and Cybersecurity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 hover:shadow-lg transition-all duration-200 w-full sm:w-auto max-w-sm"
              aria-label="Download project template document"
            >
              <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-bold text-white">
                Download Template
              </span>
            </Link>

            <Link
              href="https://forms.gle/qUdaBkHGURLt1d7eA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-blue-100 rounded-xl hover:from-white hover:to-blue-200 hover:shadow-xl transition-all duration-200 w-full sm:w-auto max-w-sm font-bold text-[#0D4BA0]"
              aria-label="Submit your project"
            >
              <Upload className="w-5 h-5 text-[#0D4BA0] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-bold">Submit Project</span>
              <ArrowRight className="w-4 h-4 text-[#0D4BA0] opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" aria-hidden="true" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Est. 2016</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">1000+ Participants</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Multiple Tracks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;