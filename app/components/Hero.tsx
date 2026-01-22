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
      {/* Geometric Particles Background - Enhanced with dense elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Lavender Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#e6e6fa 1px, transparent 1px), linear-gradient(90deg, #e6e6fa 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Dense Lavender Triangles Layer 1 */}
        <div className="absolute top-10 left-5 w-12 h-12 border border-[#e6e6fa]/25 animate-pulse triangle lavender-glow"></div>
        <div className="absolute top-20 right-16 w-8 h-8 border border-[#e6e6fa]/25 animate-pulse triangle animation-delay-300 lavender-glow"></div>
        <div className="absolute top-40 left-1/4 w-10 h-10 border border-[#e6e6fa]/25 animate-pulse triangle animation-delay-600 lavender-glow"></div>
        <div className="absolute top-60 right-1/3 w-14 h-14 border border-[#e6e6fa]/25 animate-pulse triangle animation-delay-900 lavender-glow"></div>
        <div className="absolute top-80 left-10 w-16 h-16 border border-[#e6e6fa]/25 animate-pulse triangle animation-delay-1200 lavender-glow"></div>
        <div className="absolute top-32 right-10 w-12 h-12 border border-[#e6e6fa]/25 animate-pulse triangle animation-delay-1500 lavender-glow"></div>

        {/* Layer 2 Triangles */}
        <div className="absolute bottom-40 left-20 w-18 h-18 border border-[#e6e6fa]/20 animate-pulse triangle animation-delay-400 lavender-glow"></div>
        <div className="absolute bottom-60 right-40 w-22 h-22 border border-[#e6e6fa]/20 animate-pulse triangle animation-delay-800 lavender-glow"></div>
        <div className="absolute bottom-20 left-1/3 w-14 h-14 border border-[#e6e6fa]/20 animate-pulse triangle animation-delay-1100 lavender-glow"></div>

        {/* Dense Lavender Circles */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border border-[#e6e6fa]/30 rounded-full animate-pulse animation-delay-200 lavender-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-[#e6e6fa]/30 rounded-full animate-pulse animation-delay-500 lavender-glow"></div>
        <div className="absolute top-2/3 left-1/2 w-10 h-10 border border-[#e6e6fa]/30 rounded-full animate-pulse animation-delay-700 lavender-glow"></div>
        <div className="absolute bottom-1/4 right-1/2 w-12 h-12 border border-[#e6e6fa]/30 rounded-full animate-pulse animation-delay-900 lavender-glow"></div>
        <div className="absolute top-3/4 left-1/3 w-8 h-8 border border-[#e6e6fa]/30 rounded-full animate-pulse animation-delay-1100 lavender-glow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 border border-[#e6e6fa]/30 rounded-full animate-pulse animation-delay-1300 lavender-glow"></div>

        {/* Lavender Squares - Dense Layout */}
        <div className="absolute top-48 left-16 w-10 h-10 border border-[#e6e6fa]/20 animate-pulse square animation-delay-300 lavender-glow"></div>
        <div className="absolute top-96 right-24 w-12 h-12 border border-[#e6e6fa]/20 animate-pulse square animation-delay-600 lavender-glow"></div>
        <div className="absolute bottom-48 left-32 w-8 h-8 border border-[#e6e6fa]/20 animate-pulse square animation-delay-900 lavender-glow"></div>
        <div className="absolute top-64 right-48 w-14 h-14 border border-[#e6e6fa]/20 animate-pulse square animation-delay-1200 lavender-glow"></div>
        <div className="absolute bottom-64 left-48 w-16 h-16 border border-[#e6e6fa]/20 animate-pulse square animation-delay-1500 lavender-glow"></div>

        {/* Lavender Hexagons - Multiple Sizes */}
        <div className="absolute top-36 left-64 w-18 h-18 border border-[#e6e6fa]/25 animate-pulse hexagon animation-delay-400 lavender-glow"></div>
        <div className="absolute bottom-36 right-64 w-24 h-24 border border-[#e6e6fa]/25 animate-pulse hexagon animation-delay-800 lavender-glow"></div>
        <div className="absolute top-72 left-80 w-20 h-20 border border-[#e6e6fa]/25 animate-pulse hexagon animation-delay-1100 lavender-glow"></div>
        <div className="absolute bottom-72 right-80 w-16 h-16 border border-[#e6e6fa]/25 animate-pulse hexagon animation-delay-1400 lavender-glow"></div>

        {/* Lavender Moving Dots - Multiple Layers */}
        <div className="absolute top-24 left-32 w-3 h-3 bg-[#e6e6fa]/40 rounded-full animate-bounce lavender-dot"></div>
        <div className="absolute bottom-24 right-32 w-3 h-3 bg-[#e6e6fa]/40 rounded-full animate-bounce animation-delay-300 lavender-dot"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[#e6e6fa]/50 rounded-full animate-bounce animation-delay-600 lavender-dot"></div>
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-[#e6e6fa]/35 rounded-full animate-bounce animation-delay-900 lavender-dot"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3.5 h-3.5 bg-[#e6e6fa]/45 rounded-full animate-bounce animation-delay-1200 lavender-dot"></div>
        <div className="absolute top-1/4 right-1/5 w-2.5 h-2.5 bg-[#e6e6fa]/35 rounded-full animate-bounce animation-delay-1500 lavender-dot"></div>

        {/* Lavender Blobs - Multiple Sizes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#e6e6fa]/15 via-[#e6e6fa]/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#e6e6fa]/15 via-[#e6e6fa]/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#e6e6fa]/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-800"></div>
        <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-gradient-to-l from-[#e6e6fa]/12 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1100"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-bl from-[#e6e6fa]/15 to-transparent rounded-full blur-3xl animate-pulse animation-delay-900"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-tr from-[#e6e6fa]/15 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1300"></div>

        {/* Lavender Wave Elements - Multiple */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] border border-[#e6e6fa]/15 rounded-full animate-pulse lavender-wave"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] border border-[#e6e6fa]/15 rounded-full animate-pulse animation-delay-300 lavender-wave"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#e6e6fa]/12 rounded-full animate-pulse animation-delay-600 lavender-wave"></div>
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] border border-[#e6e6fa]/10 rounded-full animate-pulse animation-delay-900 lavender-wave"></div>

        {/* Lavender Starbursts - Multiple */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={`starburst-${i}`} className={`absolute ${getStarburstPosition(i)} w-${getStarburstSize(i)} h-${getStarburstSize(i)} animate-spin-slow animation-delay-${i * 200}`}>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/30 to-transparent absolute top-1/2"></div>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/30 to-transparent absolute top-1/2 rotate-45"></div>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/30 to-transparent absolute top-1/2 rotate-90"></div>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/30 to-transparent absolute top-1/2 rotate-135"></div>
          </div>
        ))}

        {/* Lavender Rings - Multiple Sizes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#e6e6fa]/20 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-[#e6e6fa]/20 rounded-full animate-ping-slow animation-delay-400"></div>
        <div className="absolute top-64 right-64 w-40 h-40 border-2 border-[#e6e6fa]/15 rounded-full animate-ping-slow animation-delay-800"></div>
        <div className="absolute bottom-64 left-64 w-28 h-28 border-2 border-[#e6e6fa]/15 rounded-full animate-ping-slow animation-delay-1200"></div>

        {/* Lavender Lines/Connections */}
        <div className="absolute top-1/4 left-1/4 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/20 to-transparent rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/20 to-transparent -rotate-30"></div>
        <div className="absolute top-2/3 left-1/2 w-56 h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/15 to-transparent rotate-15"></div>

        {/* Lavender Diamond Shapes */}
        <div className="absolute top-44 left-44 w-16 h-16 border border-[#e6e6fa]/20 animate-pulse diamond animation-delay-500 lavender-glow"></div>
        <div className="absolute bottom-44 right-44 w-20 h-20 border border-[#e6e6fa]/20 animate-pulse diamond animation-delay-1000 lavender-glow"></div>
        <div className="absolute top-2/3 left-1/4 w-12 h-12 border border-[#e6e6fa]/20 animate-pulse diamond animation-delay-1500 lavender-glow"></div>

        {/* Lavender Crosses */}
        <div className="absolute top-96 left-96 w-8 h-8 animate-pulse animation-delay-700">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/25 to-transparent absolute top-1/2"></div>
          <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-[#e6e6fa]/25 to-transparent absolute left-1/2"></div>
        </div>

        {/* Lavender Orbs (Solid circles) */}
        <div className="absolute top-32 right-32 w-6 h-6 bg-[#e6e6fa]/20 rounded-full animate-pulse animation-delay-400"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-[#e6e6fa]/15 rounded-full animate-pulse animation-delay-800"></div>
        <div className="absolute top-2/3 right-2/3 w-8 h-8 bg-[#e6e6fa]/25 rounded-full animate-pulse animation-delay-1200"></div>

        {/* Lavender Abstract Shapes */}
        <div className="absolute top-1/2 left-10 w-24 h-24 border-2 border-[#e6e6fa]/15 rounded-full animate-pulse animation-delay-300"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#e6e6fa]/10 rounded-[30%] animate-pulse animation-delay-600"></div>

        {/* Background Noise/Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #e6e6fa 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
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
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes wave {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(10px) translateY(-10px); }
          66% { transform: translateX(-10px) translateY(10px); }
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
        
        .diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s ease-out infinite;
        }
        
        .lavender-wave {
          animation: wave 6s ease-in-out infinite;
        }
        
        .animate-drift {
          animation: drift 15s ease-in-out infinite;
        }
        
        .lavender-glow {
          box-shadow: 0 0 15px rgba(230, 230, 250, 0.15),
                     0 0 30px rgba(230, 230, 250, 0.08);
        }
        
        .lavender-dot {
          box-shadow: 0 0 10px rgba(230, 230, 250, 0.3),
                     0 0 20px rgba(230, 230, 250, 0.2);
        }
        
        /* Generate animation delay classes */
        ${Array.from({length: 20}, (_, i) => `
          .animation-delay-${(i+1)*100} {
            animation-delay: ${(i+1)*0.1}s;
          }
        `).join('\n')}
        
        .animate-bounce {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Optional: Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center">
          {/* Badge with lavender accent */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6e6fa]/10 to-transparent opacity-30"></div>
            <Sparkles className="w-4 h-4 text-white relative z-10" aria-hidden="true" />
            <span className="text-sm font-bold text-white relative z-10">
              10th Edition • National Level Project Competition
            </span>
          </div>

         {/* Main Title with Logo */}
<div className="flex flex-col items-center justify-center mb-6">
  {/* VIVID Logo Image */}
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-[#e6e6fa]/20 to-purple-400/20 blur-xl rounded-full"></div>
    <img 
      src="/images/vivid.png" 
      alt="VIVID 10.0" 
      className="relative h-[70px] sm:h-[85px] md:h-[100px] lg:h-[120px] xl:h-[140px] w-auto drop-shadow-lg" 
    />
  </div>
  
  {/* VIVID 10.0 Text with lavender gradient - Reduced margin */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight -mt-2 sm:-mt-3 md:-mt-4">
    <span className="bg-gradient-to-r from-white via-blue-100 to-[#e6e6fa] bg-clip-text text-transparent font-black drop-shadow-lg">
      10.0
    </span>
  </h1>
</div>
          {/* Divider with lavender accents */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#e6e6fa]/50 to-white"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-bold drop-shadow">
              Realize Your Creative Thoughts
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent via-[#e6e6fa]/50 to-white"></div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
              <time dateTime="2026-03-26" className="font-bold text-white">
                March 26-27, 2026
              </time>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-[#e6e6fa]/50 rounded-full"></div>
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

          {/* CTA Buttons with lavender accents */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-[#e6e6fa]/20 transition-all duration-200 w-full sm:w-auto max-w-sm relative overflow-hidden"
              aria-label="Download project template document"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6e6fa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform relative z-10" aria-hidden="true" />
              <span className="font-bold text-white relative z-10">
                Download Template
              </span>
            </Link>

            <Link
              href="https://forms.gle/qUdaBkHGURLt1d7eA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-[#e6e6fa] rounded-xl hover:from-white hover:to-blue-200 hover:shadow-xl hover:shadow-[#e6e6fa]/30 transition-all duration-200 w-full sm:w-auto max-w-sm font-bold text-[#0D4BA0]"
              aria-label="Submit your project"
            >
              <Upload className="w-5 h-5 text-[#0D4BA0] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-bold">Submit Project</span>
              <ArrowRight className="w-4 h-4 text-[#0D4BA0] opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" aria-hidden="true" />
            </Link>
          </div>

          {/* Trust badges with lavender accents */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#e6e6fa]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Est. 2016</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-[#e6e6fa]/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#e6e6fa]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">1000+ Participants</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-[#e6e6fa]/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#e6e6fa]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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

// Helper functions for positioning
const getStarburstPosition = (index: number) => {
  const positions = [
    'top-16 left-16',
    'top-16 right-16',
    'bottom-16 left-16',
    'bottom-16 right-16',
    'top-1/3 right-1/3',
    'bottom-1/3 left-1/3'
  ];
  return positions[index - 1] || 'top-1/2 left-1/2';
};

const getStarburstSize = (index: number) => {
  const sizes = ['6', '8', '10', '6', '8', '10'];
  return sizes[index - 1] || '8';
};

export default Hero;