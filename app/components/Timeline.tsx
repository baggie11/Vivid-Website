'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const RoadMap = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(4);

  const phases = [
    {
      id: 1,
      title: "Project Submission",
      date: "Jan 15 - Feb 28, 2025",
      description: "Submit your problem statement and initial project proposals through the online portal.",
      status: "Completed"
    },
    {
      id: 2,
      title: "Phase 1: Screening",
      date: "Mar 1 - Mar 15, 2025",
      description: "Expert panel reviews all submissions for technical feasibility, innovation, and potential impact.",
      status: "Completed"
    },
    {
      id: 3,
      title: "Shortlisting Announcement",
      date: "Mar 24, 2025",
      description: "Three separate lists published for in-house, external, and special category shortlisted candidates.",
      status: "Upcoming"
    },
    {
      id: 4,
      title: "Phase 2: Registration",
      date: "Mar 25 - Mar 31, 2025",
      description: "Shortlisted teams complete formal registration, payment processing, and final document submission.",
      status: "Current"
    },
    {
      id: 5,
      title: "Project Presentations",
      date: "Mar 26-27, 2025",
      description: "Live presentations and demonstrations before judges at SSN College of Engineering campus.",
      status: "Upcoming"
    },
    {
      id: 6,
      title: "Main Event - VIVID 9.0",
      date: "March 27, 2025",
      description: "Grand finale with all shortlisted teams presenting their innovative projects to the evaluation panel.",
      status: "Upcoming"
    },
    {
      id: 7,
      title: "Phase 3: Power Judging",
      date: "March 27, 2025",
      description: "Intensive final round with detailed evaluation, technical questioning, and finalist selection.",
      status: "Upcoming"
    },
    {
      id: 8,
      title: "Prize Distribution",
      date: "March 27, 2025",
      description: "Award ceremony recognizing outstanding projects and presenting prizes to winners.",
      status: "Upcoming"
    }
  ];

  const togglePhase = (id: number) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  return (
    <section id="timeline" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Process Flow</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-lg text-gray-600">
            Complete schedule for VIVID 9.0 - 9th National Level Project Competition
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-[#0D4BA0] to-blue-200"></div>

          {/* Phase items */}
          <div className="space-y-6 md:space-y-8">
            {phases.map((phase, index) => {
              const isExpanded = expandedPhase === phase.id;
              const isCurrent = phase.status === "Current";
              const isCompleted = phase.status === "Completed";

              return (
                <div 
                  key={phase.id} 
                  className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <div className={`
                      w-5 h-5 rounded-full border-4 border-white shadow-md transition-all
                      ${isCurrent ? 'bg-[#0D4BA0] ring-2 ring-offset-2 ring-blue-400' : 
                        isCompleted ? 'bg-green-500' : 'bg-gray-300'}
                    `}></div>
                  </div>

                  {/* Phase card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div 
                      onClick={() => togglePhase(phase.id)}
                      className={`
                        bg-white border-2 rounded-xl shadow-sm cursor-pointer transition-colors duration-200
                        hover:shadow-md ${isExpanded ? 'shadow-lg border-[#0D4BA0]' : 'border-gray-200'}
                      `}
                    >
                      {/* Card header */}
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />}
                              <h3 className="font-bold text-lg md:text-xl text-gray-900">
                                {phase.title}
                              </h3>
                            </div>
                            <p className="text-sm md:text-base font-semibold text-[#0D4BA0]">
                              {phase.date}
                            </p>
                          </div>
                          <div className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-[#0D4BA0]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>

                        {/* Expanded content */}
                        {isExpanded && (
                          <div className="mt-5 pt-5 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {phase.description}
                            </p>
                            <div className="mt-4 inline-block px-3 py-1 bg-blue-50 text-[#0D4BA0] text-xs font-bold rounded-full">
                              {phase.status}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Don't miss important deadlines!
          </h3>
          <p className="text-gray-600 mb-6">
            Mark these dates and ensure your team submits before the final deadline
          </p>
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#0D4BA0] text-white font-semibold rounded-lg hover:bg-[#0a3d87] transition-all hover:shadow-lg"
          >
            Download Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;