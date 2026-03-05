'use client';

import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';
import Image from 'next/image';

const AcademicContactPage = () => {
  const convenor = {
    name: "Dr. A. Shahina",
    title: "Professor & Head of Department",
    department: "Department of Information Technology",
    image: "/images/hod.jpg",
    email: "shahina@ssn.edu.in",
    phone: "+91 98765 43210",
    role: "convenor"
  };

  const organizers = [
    {
      name: "Dr. I. Joe Louis Paul",
      title: "Associate Professor",
      department: "Department of Information Technology",
      image: "/images/joe.jpg",
      email: "joelouispaul@ssn.edu.in",
      phone: "+91 98415 14128",
      role: "organizer"
    },
    {
      name: "Dr. R. Swathika",
      title: "Assistant Professor",
      department: "Department of Information Technology",
      image: "/images/swathika.jpg",
      email: "swathikar@ssn.edu.in",
      phone: "+91 99403 56882",
      role: "organizer"
    },
    {
      name: "Dr. N. Radha",
      title: "Associate Professor",
      department: "Department of Information Technology",
      image: "/images/radha.jpg",
      email: "radhan@ssn.edu.in",
      phone: "+91 99443 58632",
      role: "organizer"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-24">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Event Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0D4BA0]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:vivid25@it.ssn.edu.in" className="text-[#0D4BA0] hover:text-[#0a3d87] transition-colors break-all">
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
          </div>

          {/* Quick Links Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Quick Links
            </h3>
            <div className="space-y-4">
              <a href="https://forms.gle/qUdaBkHGURLt1d7eA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#0D4BA0] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">→</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-[#0D4BA0] transition-colors">Project Submission</h4>
                  <p className="text-sm text-gray-600">Submit your innovative project</p>
                </div>
              </a>

              <a href="#timeline" className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">→</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Event Timeline</h4>
                  <p className="text-sm text-gray-600">View important dates</p>
                </div>
              </a>

              <a href="#tracks" className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">→</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">Competition Tracks</h4>
                  <p className="text-sm text-gray-600">Explore available categories</p>
                </div>
              </a>

              <a href="#rules" className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">→</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Rules & Guidelines</h4>
                  <p className="text-sm text-gray-600">Download complete rulebook</p>
                </div>
              </a>
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
          {/* Convenor - Full Width */}
          <div className="max-w-60 mx-auto mb-8" id = "staff-coordinators">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
              {/* Image Section */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                <Image
                  src={convenor.image}
                  alt={convenor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Role Badge */}
                <div className="absolute top-2 left-2 bg-[#0D4BA0] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  Convenor
                </div>
              </div>

              {/* Info Section */}
              <div className="p-3">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  {convenor.name}
                </h3>
                <p className="text-[#0D4BA0] font-semibold text-[11px] mb-0.5">
                  {convenor.title}
                </p>
                <p className="text-gray-600 text-[10px] mb-2">
                  {convenor.department}
                </p>

                {/* Contact Info */}
                <div className="space-y-1 pt-2 border-t border-gray-100">
                  {/* Email */}
                  <a
                    href={`mailto:${convenor.email}`}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-[11px] group/link"
                  >
                    <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                      <Mail className="w-2.5 h-2.5 text-[#0D4BA0]" />
                    </div>
                    <span className="truncate">{convenor.email}</span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${convenor.phone}`}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-[11px] group/link"
                  >
                    <div className="w-5 h-5 rounded-md bg-green-50 flex items-center justify-center group-hover/link:bg-green-100 transition-colors">
                      <Phone className="w-2.5 h-2.5 text-green-600" />
                    </div>
                    <span className="truncate">{convenor.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Faculty Coordinators - 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {organizers.map((organizer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group max-w-60 mx-auto w-full"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Role Badge */}
                  <div className="absolute top-2 left-2 bg-[#0D4BA0] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                    Organizer
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                    {organizer.name}
                  </h3>
                  <p className="text-[#0D4BA0] font-semibold text-[11px] mb-0.5">
                    {organizer.title}
                  </p>
                  <p className="text-gray-600 text-[10px] mb-2">
                    {organizer.department}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-1 pt-2 border-t border-gray-100">
                    {/* Email */}
                    <a
                      href={`mailto:${organizer.email}`}
                      className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-[11px] group/link"
                    >
                      <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                        <Mail className="w-2.5 h-2.5 text-[#0D4BA0]" />
                      </div>
                      <span className="truncate">{organizer.email}</span>
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${organizer.phone}`}
                      className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-[11px] group/link"
                    >
                      <div className="w-5 h-5 rounded-md bg-green-50 flex items-center justify-center group-hover/link:bg-green-100 transition-colors">
                        <Phone className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="truncate">{organizer.phone}</span>
                    </a>

                    {/* LinkedIn */}
                   
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