'use client';

import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Image from 'next/image';

const StudentCoordinators = () => {
  const coordinators = [
    {
      name: "Student Name 1",
      role: "Lead Coordinator",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "student1@example.com",
      phone: "+91 98765 43210",
      linkedin: "https://linkedin.com/in/student1",
      image: "/images/student1.jpg"
    },
    {
      name: "Student Name 2",
      role: "Technical Coordinator",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "student2@example.com",
      phone: "+91 98765 43211",
      linkedin: "https://linkedin.com/in/student2",
      image: "/images/student2.jpg"
    },
    {
      name: "Student Name 3",
      role: "Marketing Coordinator",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "student3@example.com",
      phone: "+91 98765 43212",
      linkedin: "https://linkedin.com/in/student3",
      image: "/images/student3.jpg"
    },
    {
      name: "Student Name 4",
      role: "Operations Coordinator",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "student4@example.com",
      phone: "+91 98765 43213",
      linkedin: "https://linkedin.com/in/student4",
      image: "/images/student4.jpg"
    },
    {
      name: "Student Name 5",
      role: "Events Coordinator",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "student5@example.com",
      phone: "+91 98765 43214",
      linkedin: "https://linkedin.com/in/student5",
      image: "/images/student5.jpg"
    }
  ];

  return (
    <section id="student-coordinators" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Meet the Team</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Coordinators</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The driving force behind VIVID 10.0 - dedicated students committed to making this event a success
          </p>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[1/1] bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                <Image
                  src={coordinator.image}
                  alt={coordinator.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Role Badge */}
                <div className="absolute top-2 left-2 bg-[#0D4BA0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg">
                  {coordinator.role}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-3">
                <h3 className="text-base font-bold text-gray-900 mb-0.5">
                  {coordinator.name}
                </h3>
                <p className="text-gray-600 text-[11px] mb-0.5">
                  {coordinator.department}
                </p>
                <p className="text-[#0D4BA0] font-semibold text-xs mb-2">
                  {coordinator.year}
                </p>

                {/* Contact Info */}
                <div className="space-y-1 pt-2 border-t border-gray-100">
                  {/* Email */}
                  <a
                    href={`mailto:${coordinator.email}`}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-xs group/link"
                  >
                    <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                      <Mail className="w-3 h-3 text-[#0D4BA0]" />
                    </div>
                    <span className="truncate">{coordinator.email}</span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-xs group/link"
                  >
                    <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center group-hover/link:bg-green-100 transition-colors">
                      <Phone className="w-3 h-3 text-green-600" />
                    </div>
                    <span>{coordinator.phone}</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={coordinator.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-xs group/link"
                  >
                    <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                      <Linkedin className="w-3 h-3 text-blue-600" />
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
            For any queries or assistance, feel free to reach out to any of our student coordinators
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentCoordinators;
