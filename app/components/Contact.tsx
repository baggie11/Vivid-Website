'use client';

import React from 'react';
import { Mail, Phone, MapPin, Globe, LinkedinIcon } from 'lucide-react';

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
            Reach out to the VIVID 9.0 organizing committee for any queries or assistance
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Contact Information */}
          <div>
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
                    Department of Information Technology<br/>
                    SSN College of Engineering<br/>
                    Rajiv Gandhi Salai (OMR)<br/>
                    SSN Nagar, Kalavakkam – 603110<br/>
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

          {/* Committee Information */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Organizing Committee
            </h3>
            
            <div className="space-y-6">
              {organizers.map((person, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-gray-50/50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-[#0D4BA0]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar placeholder - would use image in production */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D4BA0] to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {person.name.charAt(0)}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900">
                        {person.name}
                      </h4>
                      <p className="text-[#0D4BA0] font-semibold text-sm mb-1">
                        {person.title}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {person.department}
                      </p>
                      {person.phone && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone className="w-4 h-4 text-[#0D4BA0]" />
                          <a href={`tel:${person.phone}`} className="hover:text-[#0D4BA0] transition-colors text-sm">
                            {person.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              About SSN College of Engineering
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              SSN Institutions, founded by <span className="font-semibold">Dr. Shiv Nadar</span>, Chairman of HCL Technologies, 
              stands as a premier center of higher learning. With a steadfast commitment to pursuing excellence in education 
              and research, SSN College of Engineering offers comprehensive graduate, undergraduate, and research programs 
              across multiple disciplines.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <span className="font-semibold">Department of Information Technology</span>, established in 1999, continues 
              to provide quality education while imparting IT excellence. The department is dedicated to creating responsible 
              technologists and industry professionals who contribute meaningfully to society and the technology sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicContactPage;