'use client';

import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';
import Image from 'next/image';

const AcademicContactPage = () => {
  const organizers = [
    {
      name: "Dr. A. Shahina",
      title: "Professor & Head of Department",
      department: "Department of Information Technology",
      image: "/images/hod.jpg",
      email: "shahina@ssn.edu.in",
      phone: "+91 98765 43210",
      linkedin: "https://linkedin.com/in/shahina",
      role: "convenor"
    },
    {
      name: "Dr. I. Joe Louis Paul",
      title: "Associate Professor",
      department: "Department of Information Technology",
      image: "/images/joe.jpg",
      email: "joelouispaul@ssn.edu.in",
      phone: "+91 98415 14128",
      linkedin: "https://linkedin.com/in/joelouispaul",
      role: "organizer"
    },
    {
      name: "Dr. R. Swathika",
      title: "Assistant Professor",
      department: "Department of Information Technology",
      image: "/images/swathika.jpg",
      email: "swathikar@ssn.edu.in",
      phone: "+91 99403 56882",
      linkedin: "https://linkedin.com/in/swathika",
      role: "organizer"
    },
    {
      name: "Dr. N. Radha",
      title: "Associate Professor",
      department: "Department of Information Technology",
      image: "/images/radha.jpg",
      email: "radhan@ssn.edu.in",
      phone: "+91 99443 58632",
      linkedin: "https://linkedin.com/in/radhan",
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
              Event Information
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
        </div>

        {/* Organizing Committee Section - Similar to Student Coordinators */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
              <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Faculty Leadership</span>
              <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Organizing <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Committee</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distinguished faculty members guiding VIVID 10.0 with their expertise and vision
            </p>
          </div>

          {/* Organizers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizers.map((organizer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Role Badge */}
                  {organizer.role === 'convenor' && (
                    <div className="absolute top-4 left-4 bg-[#0D4BA0] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Convenor
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {organizer.name}
                  </h3>
                  <p className="text-[#0D4BA0] font-semibold text-sm mb-1">
                    {organizer.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {organizer.department}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {/* Email */}
                    <a
                      href={`mailto:${organizer.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#0D4BA0] transition-colors text-sm group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                        <Mail className="w-4 h-4 text-[#0D4BA0]" />
                      </div>
                      <span className="truncate">{organizer.email}</span>
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${organizer.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#0D4BA0] transition-colors text-sm group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center group-hover/link:bg-green-100 transition-colors">
                        <Phone className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{organizer.phone}</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={organizer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-[#0D4BA0] transition-colors text-sm group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm md:text-base italic">
              For academic queries and event coordination, reach out to any member of the organizing committee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicContactPage;