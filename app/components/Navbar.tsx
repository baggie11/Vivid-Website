'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home', href: '#hero' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Tracks', id: 'tracks', href: '#tracks' },
    { name: 'Details', id: 'details', href: '#details' },
    { name: 'Timeline', id: 'timeline', href: '#timeline' },
    
    {name : 'Staff Coordinators', id : "staff", href : "#staff-coordinators"},
    {name : 'Student Coordinators', id : "stud", href : "#student-coordinators"},
    { name: 'Contact', id: 'contact', href: '#contact' }

    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Container */}
          <Link
            href="/"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D4BA0] rounded"
            aria-label="SSN College Home"
          >
           
            {/* VIVID Logo */}
            <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-md flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="VIVID 10.0 Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 48px, 56px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative ${
                  activeLink === item.id
                    ? 'text-[#0D4BA0]'
                    : 'text-gray-700 hover:text-[#0D4BA0]'
                }`}
              >
                {item.name}
                {activeLink === item.id && (
                  <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#0D4BA0] rounded-full"></div>
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <button
              className="ml-4 px-6 py-2 rounded-lg text-white font-semibold bg-[#0D4BA0] hover:bg-[#0a3d87] hover:shadow-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Register for VIVID 10.0"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu and Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D4BA0]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Fixed to ensure Register button is visible */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-[500px] opacity-100 overflow-y-auto' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                  activeLink === item.id
                    ? 'bg-blue-50 text-[#0D4BA0]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Register Button with proper spacing */}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                className="w-full px-4 py-3 rounded-lg text-white font-semibold bg-[#0D4BA0] hover:bg-[#0a3d87] transition-colors shadow-sm"
                aria-label="Register for VIVID 10.0"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;