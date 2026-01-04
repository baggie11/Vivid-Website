'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, MapPin, Calendar, Route, Users, FileText, Images, Mail } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', icon: <Home className="w-4 h-4" />, href: '#' },
    { name: 'About', icon: <Info className="w-4 h-4" />, href: '#' },
    { name: 'Tracks', icon: <Route className="w-4 h-4" />, href: '#' },
    { name: 'Event Details', icon: <Calendar className="w-4 h-4" />, href: '#' },
    { name: 'Road Map', icon: <MapPin className="w-4 h-4" />, href: '#' },
    { name: 'Sponsors', icon: <Users className="w-4 h-4" />, href: '#' },
    { name: 'Brochure', icon: <FileText className="w-4 h-4" />, href: '#' },
    { name: 'Gallery', icon: <Images className="w-4 h-4" />, href: '#' },
    { name: 'Contact Us', icon: <Mail className="w-4 h-4" />, href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md" 
                 style={{ backgroundColor: '#0D4BA0' }}>

            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">
                Vivid 2026
              </h1>
              <p className="text-xs text-gray-500"></p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeLink === item.name
                    ? 'text-[#0D4BA0] font-semibold'
                    : 'text-gray-700 hover:text-[#0D4BA0]'
                }`}
              >
                <span className="hidden md:inline">{item.icon}</span>
                <span>{item.name}</span>
                {activeLink === item.name && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0D4BA0] rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <button
              className="ml-4 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
              style={{ backgroundColor: '#0D4BA0' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0a3d87'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D4BA0'}
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveLink(item.name);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeLink === item.name
                    ? 'bg-blue-50 text-[#0D4BA0] font-semibold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            <button
              className="w-full mt-4 px-4 py-3 rounded-lg text-white font-medium transition-all"
              style={{ backgroundColor: '#0D4BA0' }}
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