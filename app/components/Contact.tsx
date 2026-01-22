'use client';

import React from 'react';
import { Mail, Phone, MapPin, Globe, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

const AcademicContactPage = () => {
  const organizers = [
    {
      name: "Dr. A. Shahina",
      title: "Professor & Head of Department",
      department: "Department of Information Technology",
      image: "/images/hod.jpg",
      role: "convenor"
    },
    {
      name: "Dr. I. Joe Louis Paul",
      title: "Associate Professor",
      department: "Department of Information Technology",
      phone: "+91 98415 14128",
      image: "/images/joe.jpg",
      role: "organizer"
    },
    {
      name: "Dr. R. Swathika",
      title: "Assistant Professor",
      department: "Department of Information Technology",
      phone: "+91 99403 56882",
      image: "/images/swathika.jpg",
      role: "organizer"
    },
    {
      name: "Dr. N. Radha",
      title: "Associate Professor",
      department: "Department of Information Technology",
      phone: "+91 99443 58632",
      image: "/images/radha.jpg",
      role: "organizer"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Get in Touch</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Contact</span> Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to the VIVID 10.0 organizing committee for any queries or assistance
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Event Coordinator
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0D4BA0]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:vivid25@it.ssn.edu.in" className="text-[#0D4BA0] hover:text-[#0a3d87] transition-colors">
                    vivid25@it.ssn.edu.in
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Department of Information Technology<br />
                    SSN College of Engineering<br />
                    Rajiv Gandhi Salai (OMR)<br />
                    SSN Nagar, Kalavakkam – 603110<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Institution</h4>
                  <a href="https://www.ssn.edu.in" target="_blank" rel="noopener noreferrer" className="text-[#0D4BA0] hover:text-[#0a3d87] transition-colors">
                    www.ssn.edu.in
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://forms.gle/qUdaBkHGURLt1d7eA" target="_blank" rel="noopener noreferrer" className="text-[#0D4BA0] hover:text-[#0a3d87] transition-colors flex items-center gap-2">
                    <span>→</span> Project Submission Form
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#0D4BA0] hover:text-[#0a3d87] transition-colors flex items-center gap-2">
                    <span>→</span> Download Rules & Regulations
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-[#0D4BA0] hover:text-[#0a3d87] transition-colors flex items-center gap-2">
                    <span>→</span> Event Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Committee Information - Right Column */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Organizing Committee
            </h3>

            <div className="space-y-6">
              {/* All Organizers with Uniform Style */}
              <div className="grid grid-cols-1 gap-4">
                {organizers.map((person, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0 group-hover:border-[#0D4BA0] transition-colors relative">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      {person.role === 'convenor' && (
                        <span className="inline-block bg-[#0D4BA0] text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                          Convenor
                        </span>
                      )}
                      <h4 className="font-bold text-gray-900 truncate">
                        {person.name}
                      </h4>
                      <p className="text-[#0D4BA0] font-medium text-xs md:text-sm mb-0.5 truncate">
                        {person.title}
                      </p>
                      {person.phone && (
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs md:text-sm mt-1">
                          <Phone className="w-3.5 h-3.5" />
                          <a href={`tel:${person.phone}`} className="hover:text-[#0D4BA0] transition-colors">
                            {person.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicContactPage;