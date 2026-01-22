'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Clock, Calendar } from 'lucide-react';

const RoadMap = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [currentPhase, setCurrentPhase] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  const phases = [
    {
      id: 1,
      title: "Project Submission",
      startDate: new Date('2026-01-15'),
      endDate: new Date('2026-01-16'),
      description: "Submit your problem statement and initial project proposals through the online portal.",
      registrationLink: "https://forms.gle/qUdaBkHGURLt1d7eA"
    },
    {
      id: 2,
      title: "Phase 1: Screening",
      startDate: new Date('2026-01-20'),
      endDate: new Date('2026-03-15'),
      description: "Expert panel reviews all submissions for technical feasibility, innovation, and potential impact.",
    },
    {
      id: 3,
      title: "Shortlisting Announcement",
      startDate: new Date('2026-03-24'),
      endDate: new Date('2026-03-24'),
      description: "Three separate lists published for in-house, external, and special category shortlisted candidates.",
    },
    {
      id: 4,
      title: "Phase 2: Registration",
      startDate: new Date('2026-03-25'),
      endDate: new Date('2026-03-31'),
      description: "Shortlisted teams complete formal registration, payment processing, and final document submission.",
      registrationLink: "#"
    },
    {
      id: 5,
      title: "Project Presentations Day 1",
      startDate: new Date('2026-03-26'),
      endDate: new Date('2026-03-26'),
      description: "Live presentations and demonstrations before judges at SSN College of Engineering campus.",
    },
    {
      id: 6,
      title: "Main Event - VIVID 10.0 Day 2",
      startDate: new Date('2026-03-27'),
      endDate: new Date('2026-03-27'),
      description: "Grand finale with all shortlisted teams presenting their innovative projects to the evaluation panel.",
    },
    {
      id: 7,
      title: "Phase 3: Power Judging",
      startDate: new Date('2026-03-27'),
      endDate: new Date('2026-03-27'),
      description: "Intensive final round with detailed evaluation, technical questioning, and finalist selection.",
    },
    {
      id: 8,
      title: "Prize Distribution & Closing",
      startDate: new Date('2026-03-27'),
      endDate: new Date('2026-03-27'),
      description: "Award ceremony recognizing outstanding projects and presenting prizes to winners.",
    }
  ];

  const getPhaseStatus = (phase: any) => {
    const now = new Date();
    const start = new Date(phase.startDate);
    const end = new Date(phase.endDate);
    
    if (now < start) {
      return {
        status: 'Upcoming',
        color: 'bg-gray-100 text-gray-700',
        borderColor: 'border-gray-300',
        iconColor: 'text-gray-400',
        daysLeft: Math.ceil((start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      };
    } else if (now >= start && now <= end) {
      return {
        status: 'Live Now',
        color: 'bg-green-100 text-green-800',
        borderColor: 'border-green-400',
        iconColor: 'text-green-600',
        daysLeft: Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      };
    } else {
      return {
        status: 'Completed',
        color: 'bg-blue-50 text-blue-700',
        borderColor: 'border-blue-300',
        iconColor: 'text-blue-500',
        daysLeft: 0
      };
    }
  };

  const getCurrentPhaseIndex = () => {
    const now = new Date();
    for (let i = 0; i < phases.length; i++) {
      const phase = phases[i];
      if (now >= phase.startDate && now <= phase.endDate) {
        return i;
      }
    }
    // If no current phase, find the next upcoming one
    for (let i = 0; i < phases.length; i++) {
      if (now < phases[i].startDate) {
        return i;
      }
    }
    return phases.length - 1; // Return last phase if all are completed
  };

  const calculateTimeRemaining = () => {
    const now = new Date();
    const currentPhaseIndex = getCurrentPhaseIndex();
    const currentPhaseData = phases[currentPhaseIndex];
    const phaseStatus = getPhaseStatus(currentPhaseData);
    
    if (phaseStatus.status === 'Live Now') {
      const endDate = new Date(currentPhaseData.endDate);
      const diff = endDate.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (days > 0) {
          return `${days} day${days > 1 ? 's' : ''} remaining`;
        } else if (hours > 0) {
          return `${hours} hour${hours > 1 ? 's' : ''} remaining`;
        } else {
          return `${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
        }
      }
    } else if (phaseStatus.status === 'Upcoming') {
      const startDate = new Date(currentPhaseData.startDate);
      const diff = startDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      return `Starts in ${days} day${days > 1 ? 's' : ''}`;
    }
    
    return '';
  };

  useEffect(() => {
    const currentIdx = getCurrentPhaseIndex();
    setCurrentPhase(currentIdx + 1);
    setExpandedPhase(currentIdx + 1);
    setTimeRemaining(calculateTimeRemaining());
    
    // Update every minute
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
      
      // Check if phase changed
      const newCurrentIdx = getCurrentPhaseIndex();
      if (newCurrentIdx + 1 !== currentPhase) {
        setCurrentPhase(newCurrentIdx + 1);
        setExpandedPhase(newCurrentIdx + 1);
      }
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const togglePhase = (id: number) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateRange = (start: Date, end: Date) => {
    const startStr = formatDate(start);
    const endStr = formatDate(end);
    
    if (startStr === endStr) {
      return startStr;
    }
    return `${startStr} - ${endStr}`;
  };

  return (
    <section id="timeline" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
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
          <p className="text-lg text-gray-600 mb-8">
            Complete schedule for VIVID 10.0 - 10th National Level Project Competition
          </p>
          
          {/* Live status indicator */}
          {currentPhase && (
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md border border-blue-100">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                </div>
                <span className="font-bold text-gray-900">Phase {currentPhase}:</span>
                <span className="text-[#0D4BA0] font-bold">
                  {phases[currentPhase - 1]?.title}
                </span>
              </div>
              {timeRemaining && (
                <>
                  <div className="w-1 h-6 bg-gray-200"></div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{timeRemaining}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-[#0D4BA0] to-blue-200"></div>

          {/* Phase items */}
          <div className="space-y-6 md:space-y-8">
            {phases.map((phase, index) => {
              const isExpanded = expandedPhase === phase.id;
              const phaseStatus = getPhaseStatus(phase);
              const isCurrent = phaseStatus.status === 'Live Now';
              const isCompleted = phaseStatus.status === 'Completed';
              const isUpcoming = phaseStatus.status === 'Upcoming';

              return (
                <div 
                  key={phase.id} 
                  className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <div className={`
                      w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300
                      ${isCurrent ? 'bg-green-500 ring-4 ring-offset-2 ring-green-400 animate-pulse' : 
                        isCompleted ? 'bg-blue-500' : 
                        'bg-gray-300'}
                    `}>
                      {isCurrent && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phase card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div 
                      onClick={() => togglePhase(phase.id)}
                      className={`
                        bg-white border-2 rounded-xl shadow-sm cursor-pointer transition-all duration-300
                        hover:shadow-md hover:scale-[1.02] ${isExpanded ? 'shadow-lg scale-[1.02]' : ''}
                        ${isCurrent ? 'border-green-400' : isCompleted ? 'border-blue-300' : 'border-gray-200'}
                      `}
                    >
                      {/* Card header */}
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {isCompleted && <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />}
                              {isCurrent && <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>}
                              <h3 className="font-bold text-lg md:text-xl text-gray-900">
                                {phase.title}
                              </h3>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">
                                {formatDateRange(phase.startDate, phase.endDate)}
                              </span>
                            </div>
                            
                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${phaseStatus.color} ${phaseStatus.borderColor} border`}>
                              {phaseStatus.status}
                              {phaseStatus.daysLeft > 0 && phaseStatus.status !== 'Completed' && (
                                <span className="ml-1">• {phaseStatus.daysLeft} day{phaseStatus.daysLeft > 1 ? 's' : ''}</span>
                              )}
                            </div>
                          </div>
                          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-[#0D4BA0]" />
                            ) : (
                              <ChevronDown className={`w-5 h-5 ${isCurrent ? 'text-green-500' : 'text-gray-400'}`} />
                            )}
                          </div>
                        </div>

                        {/* Expanded content */}
                        {isExpanded && (
                          <div className="mt-5 pt-5 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {phase.description}
                            </p>
                            
                            {phase.registrationLink && (isCurrent || isUpcoming) && (
                              <a
                                href={phase.registrationLink}
                                target={phase.registrationLink.startsWith('http') ? '_blank' : undefined}
                                rel={phase.registrationLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D4BA0] text-white rounded-lg hover:bg-[#0a3d8a] transition-colors duration-200 font-medium"
                              >
                                {isCurrent ? 'Register Now' : 'Pre-Register'}
                                <ChevronUp className="w-4 h-4 rotate-90" />
                              </a>
                            )}
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