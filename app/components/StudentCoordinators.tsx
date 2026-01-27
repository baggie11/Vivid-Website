'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const StudentCoordinators = () => {
  // Group coordinators by rows as specified
  const row1 = [
    {
      name: "Kathir Kaman A",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "kathirkaman2210947@ssn.edu.in",
      image: "/images/kathir.jpg"
    }
  ];

  const row2 = [
    {
      name: "Ananya Sivakumar",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "ananya2210316@ssn.edu.in",
      image: "/images/ananya.png"
    },
    {
      name: "Nithish Kumar S",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "nithishkumar2210202@ssn.edu.in",
      image: "/images/nitish.png"
    },
    {
      name: "Sudharshan PS",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "sudharshan2210414@ssn.edu.in",
      image: "/images/sudarshan.png"
    }
  ];

  const row3 = [
    {
      name: "Kavyasri VJ",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "kavyasri2210393@ssn.edu.in",
      image: "/images/kavyasri.png"
    },
    {
      name: "Piriyadharshini",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "piriyadharshini2210418@ssn.edu.in",
      image: "/images/piriya.png"
    },
    {
      name: "Vithula S",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "vithula2210417@ssn.edu.in",
      image: "/images/vithula.png"
    },
    {
      name: "Harishraj S",
      department: "Department of Information Technology",
      year: "Final Year",
      email: "harishraj2210713@ssn.edu.in",
      image: "/images/harishraj.png"
    }
  ];

  // Render card component
  const renderCard = (coordinator: typeof row1[0], index: number) => (
    <div
      key={index}
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
        <Image
          src={coordinator.image}
          alt={coordinator.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Info Section */}
      <div className="p-2">
        <h3 className="text-sm font-bold text-gray-900 mb-0.5 line-clamp-1">
          {coordinator.name}
        </h3>
        <p className="text-gray-600 text-[10px] mb-0.5 line-clamp-1">
          {coordinator.department}
        </p>
        <p className="text-[#0D4BA0] font-semibold text-[10px] mb-1.5">
          {coordinator.year}
        </p>

        {/* Contact Info */}
        <div className="pt-1 border-t border-gray-100">
          <a
            href={`mailto:${coordinator.email}`}
            className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-[10px] group/link"
          >
            <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
              <Mail className="w-2.5 h-2.5 text-[#0D4BA0]" />
            </div>
            <span className="truncate">{coordinator.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
  return (
  <section id="student-coordinators" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-0.5 w-8 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
          <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs">Meet the Team</span>
          <div className="h-0.5 w-8 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Student <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Coordinators</span>
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          The driving force behind VIVID 10.0 - dedicated students committed to making this event a success
        </p>
      </div>

      {/* Square Cards Layout */}
      
      {/* First Row  centered */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-[300px]">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
            {/* Square Image Section */}
            <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
              <Image
                src={row1[0].image}
                alt={row1[0].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Info Section */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                {row1[0].name}
              </h3>
              <p className="text-gray-600 text-sm mb-1 line-clamp-1">
                {row1[0].department}
              </p>
              <p className="text-[#0D4BA0] font-semibold text-sm mb-3">
                {row1[0].year}
              </p>

              {/* Contact Info */}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href={`mailto:${row1[0].email}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#0D4BA0] transition-colors text-sm group/link"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                    <Mail className="w-4 h-4 text-[#0D4BA0]" />
                  </div>
                  <span className="truncate">{row1[0].email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row  */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {row2.map((coordinator, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[300px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
                {/* Square Image Section */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                  <Image
                    src={coordinator.image}
                    alt={coordinator.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Info Section */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1">
                    {coordinator.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-1 line-clamp-1">
                    {coordinator.department}
                  </p>
                  <p className="text-[#0D4BA0] font-semibold text-xs mb-2">
                    {coordinator.year}
                  </p>

                  {/* Contact Info */}
                  <div className="pt-2 border-t border-gray-100">
                    <a
                      href={`mailto:${coordinator.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#0D4BA0] transition-colors text-xs group/link"
                    >
                      <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                        <Mail className="w-3 h-3 text-[#0D4BA0]" />
                      </div>
                      <span className="truncate">{coordinator.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Third Row  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {row3.map((coordinator, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[280px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
                {/* Square Image Section */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                  <Image
                    src={coordinator.image}
                    alt={coordinator.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Info Section */}
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
                    {coordinator.name}
                  </h3>
                  <p className="text-gray-600 text-[11px] mb-1 line-clamp-1">
                    {coordinator.department}
                  </p>
                  <p className="text-[#0D4BA0] font-semibold text-[11px] mb-2">
                    {coordinator.year}
                  </p>

                  {/* Contact Info */}
                  <div className="pt-2 border-t border-gray-100">
                    <a
                      href={`mailto:${coordinator.email}`}
                      className="flex items-center gap-1.5 text-gray-600 hover:text-[#0D4BA0] transition-colors text-[11px] group/link"
                    >
                      <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">
                        <Mail className="w-3 h-3 text-[#0D4BA0]" />
                      </div>
                      <span className="truncate">{coordinator.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Note */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm italic">
          For any queries or assistance, feel free to reach out to any of our student coordinators
        </p>
      </div>
    </div>
  </section>
);
  };

export default StudentCoordinators;