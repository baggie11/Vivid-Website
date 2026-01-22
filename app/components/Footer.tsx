'use client';

import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About VIVID */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              VIVID 10.0
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              A premier national-level project competition organized by the Department of Information Technology, SSN College of Engineering.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-400 flex items-center justify-center transition-all hover:scale-110" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-pink-600 flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-red-600 flex items-center justify-center transition-all hover:scale-110" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> About VIVID
                </Link>
              </li>
              <li>
                <Link href="#tracks" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> Competition Tracks
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> Timeline
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> Gallery
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://forms.gle/qUdaBkHGURLt1d7eA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> Register Now
                </a>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> Rules & Regulations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> FAQs
                </Link>
              </li>
              <li>
                <Link href="#student-coordinators" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> Student Coordinators
                </Link>
              </li>
              <li>
                <a href="https://www.ssn.edu.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→</span> SSN Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:vivid25@it.ssn.edu.in" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    vivid25@it.ssn.edu.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dept. of IT, SSN College<br />
                    Kalavakkam, Chennai - 603110
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href="tel:+914427469700" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    +91 44 2746 9700
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} VIVID 10.0 - Department of Information Technology, SSN College of Engineering. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
