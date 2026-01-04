'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Download, Upload, Award, Users, Sparkles } from 'lucide-react';

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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0">
        {/* Top left geometric shape */}
        <div className="absolute top-0 left-0 w-96 h-96">
          <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-blue-100 dark:border-blue-900/30 rounded-tl-3xl"></div>
        </div>
        
        {/* Bottom right geometric shape */}
        <div className="absolute bottom-0 right-0 w-96 h-96">
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-blue-100 dark:border-blue-900/30 rounded-br-3xl"></div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"></div>
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              9th Edition • National Level
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-gray-900 dark:text-white">VIVID</span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-[#0D4BA0] via-blue-600 to-blue-700 bg-clip-text text-transparent">
                9.0
              </span>
            </span>
          </h1>

          {/* Subtitle with icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-0.5 bg-blue-500 dark:bg-blue-400"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
              Realize Your Creative Thoughts
            </p>
            <div className="w-4 h-0.5 bg-blue-500 dark:bg-blue-400"></div>
          </div>

          {/* Date with Calendar Icon */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <time className="text-xl font-semibold text-gray-900 dark:text-white">
              March 26-27, 2025
            </time>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            9<sup>th</sup> National Level Project Competition organized by Department of IT, 
            <span className="font-semibold text-gray-800 dark:text-gray-200"> SSN College of Engineering</span>, 
            Kalavakkam, Tamil Nadu
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="./VIVID 9.0 - Project Template.docx"
              className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Download className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                Download Project Template
              </span>
            </Link>

            <Link
              href="https://forms.gle/qUdaBkHGURLt1d7eA"
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0D4BA0] to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Upload className="w-5 h-5 text-white" />
              <span className="text-base font-semibold text-white">
                Submit Your Project
              </span>
            </Link>
          </div>



         
        </div>
      </div>
    </div>
  );
};

export default Hero;