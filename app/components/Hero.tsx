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
      className="relative min-h-screen overflow-hidden pt-16 md:pt-20"
    >
      {/* Optimized Background Image */}
      <Image
        src="/images/ssn.jpg"
        alt="SSN College of Engineering"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/50 z-[1]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#0D4BA0]" aria-hidden="true" />
            <span className="text-sm font-bold text-[#0D4BA0]">
              10th Edition • National Level Competition
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-gray-900">VIVID</span>
            <span className="block mt-4">
              <span className="bg-gradient-to-r from-[#0D4BA0] via-blue-600 to-[#1E6FE8] bg-clip-text text-transparent font-black">
                10.0
              </span>
            </span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#0D4BA0]"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
              Realize Your Creative Thoughts
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#0D4BA0]"></div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#0D4BA0]" aria-hidden="true" />
              <time dateTime="2026-03-26" className="font-bold text-gray-900">
                March 26-27, 2026
              </time>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <p className="font-bold text-gray-900">
              SSN College of Engineering
            </p>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-900 mb-12 leading-relaxed font-bold">
            A premier national-level project competition organized by the{' '}
            <span className="font-bold text-gray-900">Department of Information Technology</span>{' '}
            at{' '}
            <span className="font-bold text-gray-900">SSN College of Engineering</span>,
            Kalavakkam, Tamil Nadu. Join students and innovators from across the nation to showcase groundbreaking 
            projects across IoT, AI/ML, Blockchain, Data Analytics, and Cybersecurity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full">
            <Link
              href="#"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#0D4BA0] hover:shadow-md transition-colors duration-200 w-full sm:w-auto"
              aria-label="Download project template document"
            >
              <Download className="w-5 h-5 text-[#0D4BA0] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-bold text-gray-900">
                Download Template
              </span>
            </Link>

            <Link
              href="https://forms.gle/qUdaBkHGURLt1d7eA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0D4BA0] to-blue-700 rounded-xl hover:from-[#0a3d87] hover:to-blue-800 hover:shadow-md transition-colors duration-200 w-full sm:w-auto font-bold text-white"
              aria-label="Submit your project"
            >
              <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-bold">Submit Project</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" aria-hidden="true" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Est. 2016</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">1000+ Participants</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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