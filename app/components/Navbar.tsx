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
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed dark mode toggle for a consistently white navbar

  const handleNavClick = (id: string) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D4BA0] rounded"
            aria-label="SSN College Home"
          >
            {/* Vivid Logo Icon */}
            <div className="relative h-16 w-24 md:h-20 md:w-32 overflow-hidden rounded-full border-2 border-gray-100 shadow-md flex-shrink-0 bg-white">
              <Image
                src="/images/vivid.jpg"
                alt="Vivid Logo"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-gray-300 hidden sm:block"></div>

            {/* VIVID Logo */}
            <div className="relative h-14 w-auto md:h-16 aspect-[3.5/1]">
              <Image
                src="/images/logo.png"
                alt="VIVID 10.0 Logo"
                height={64}
                width={224}
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform"
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
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative ${activeLink === item.id
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
              aria-label="Register for VIVID 9.0"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu and Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D4BA0]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-3 rounded-lg transition-colors font-medium ${activeLink === item.id
                  ? 'bg-blue-50 text-[#0D4BA0]'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              className="w-full mt-4 px-4 py-3 rounded-lg text-white font-semibold bg-[#0D4BA0] hover:bg-[#0a3d87] transition-colors"
              aria-label="Register for VIVID 9.0"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;