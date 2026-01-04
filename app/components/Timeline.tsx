'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const RoadMap = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(4); // Phase 2: Registration is expanded by default

  const phases = [
    {
      id: 1,
      title: "Phase 1: Submission",
      subtitle: "Problem Statement",
      date: "Jan 15 - Feb 28, 2025",
      description: "Participants submit their problem statements and initial project proposals through online forms."
    },
    {
      id: 2,
      title: "Phase 1: Screening",
      date: "Mar 1 - Mar 15, 2025",
      description: "Initial screening of submitted proposals by expert panel for technical feasibility and innovation."
    },
    {
      id: 3,
      title: "Declaration of Shortlisted Candidates",
      subtitle: "For Phase 2",
      date: "Mar 24, 2025",
      description: "Announcement of shortlisted candidates for Phase 2. Three lists published on March 24, 2025."
    },
    {
      id: 4,
      title: "Phase 2: Registration",
      date: "Mar 25 - Mar 31, 2025",
      description: "Shortlisted teams complete formal registration, payment, and document submission."
    },
    {
      id: 5,
      title: "Presentation",
      date: "Mar 26-27, 2025",
      description: "Live project presentations and demonstrations before judges at SSN College of Engineering."
    },
    {
      id: 6,
      title: "VIVID 9.0",
      subtitle: "Main Event",
      date: "March 27, 2025",
      description: "Final round of the competition with all shortlisted teams presenting their projects."
    },
    {
      id: 7,
      title: "Declaration of Shortlisted Candidates",
      subtitle: "For Phase 3",
      date: "March 27, 2025",
      description: "Announcement of finalists selected for the power judging round."
    },
    {
      id: 8,
      title: "Phase 3: Power Judging",
      date: "March 27, 2025",
      description: "Intensive final judging round with detailed project evaluation and technical questioning."
    },
    {
      id: 9,
      title: "Prize Distribution",
      date: "March 27, 2025",
      description: "Award ceremony and prize distribution for winners at the main event venue."
    }
  ];

  const togglePhase = (id: number) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  return (
    <section id="roadmap" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event <span className="text-[#0D4BA0]">Road Map</span>
          </h2>
          <p className="text-gray-600">
            Timeline for VIVID 9.0 - National Level Project Competition
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-[#0D4BA0] to-blue-200"></div>

          {/* Phases */}
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const isExpanded = expandedPhase === phase.id;
              const isCurrent = phase.id === 4; // Phase 2: Registration

              return (
                <div 
                  key={phase.id} 
                  className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <div className={`
                      w-4 h-4 rounded-full border-2 border-white shadow-md
                      ${isCurrent ? 'bg-[#0D4BA0]' : 'bg-[#0D4BA0]'}
                    `}></div>
                  </div>

                  {/* Phase Card - All cards use same style */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div 
                      onClick={() => togglePhase(phase.id)}
                      className={`
                        bg-white border rounded-lg shadow-sm cursor-pointer transition-all duration-200
                        hover:shadow-md ${isExpanded ? 'shadow-md border-[#0D4BA0]' : 'border-gray-200'}
                        border-l-4 border-l-[#0D4BA0]
                      `}
                    >
                      <div className="p-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#0D4BA0]"></div>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{phase.title}</h3>
                              {phase.subtitle && (
                                <p className="text-sm text-gray-600">{phase.subtitle}</p>
                              )}
                            </div>
                          </div>
                          <div className={`${isExpanded ? 'text-[#0D4BA0]' : 'text-gray-400'}`}>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-2 mt-3">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{phase.date}</span>
                        </div>

                        {/* Expanded Content */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-gray-700">{phase.description}</p>
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

      
      </div>
    </section>
  );
};

export default RoadMap;