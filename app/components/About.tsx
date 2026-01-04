'use client';

import { GraduationCap, Building2, Target, Award, Users, Lightbulb, ChevronRight, BookOpen, Cpu, Globe } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: "SSN Institutions",
      icon: <Building2 className="w-8 h-8" />,
      content: "SSN Institutions, founded by Dr. Shiv Nadar, Chairman, HCL Technologies, is a premier center of higher learning with a mission of pursuing excellence in education and research. It offers some of the finest graduate, undergraduate and research programs.",
      highlight: "Founded by Dr. Shiv Nadar, Chairman of HCL Technologies",
      stats: [
        { label: "Founded by", value: "Dr. Shiv Nadar" },
        { label: "Focus", value: "Excellence" }
      ],
      accentColor: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Department of IT",
      icon: <GraduationCap className="w-8 h-8" />,
      content: "The Department of Information Technology was established in the year 1999. Our mission is to provide quality education to the students and impart IT excellence in them. Apart from making them good technocrats, we also provide individual attention to make them good citizens of our nation to serve the industry and society constructively.",
      highlight: "Established in 1999 with focus on IT excellence",
      stats: [
        { label: "Established", value: "1999" },
        { label: "Mission", value: "Quality Education" }
      ],
      accentColor: "border-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "VIVID 9.0",
      icon: <Target className="w-8 h-8" />,
      content: "VIVID 9.0 is a National Level Project Competition for IT, CSE, ECE, BME, MECH and EEE (UCRPG) students, organized by SSN College of Engineering to encourage students to apply their knowledge, skill, passion and creativity to technology solutions that can make a difference to the world today.",
      highlight: "9th National Level Project Competition",
      stats: [
        { label: "Edition", value: "9th" },
        { label: "Level", value: "National" }
      ],
      accentColor: "border-emerald-500",
      bgColor: "bg-emerald-50"
    }
  ];

  const keyPoints = [
    {
      title: "Industry Collaboration",
      description: "Strong ties with technology leaders",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Academic Excellence",
      description: "Top-tier educational programs",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Global Impact",
      description: "Solutions for real-world problems",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Innovation Hub",
      description: "Fostering creative thinking",
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-[#0D4BA0]"></div>
            <span className="text-[#0D4BA0] font-semibold tracking-wider uppercase text-sm">About The Event</span>
            <div className="w-12 h-0.5 bg-[#0D4BA0]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#0D4BA0]">VIVID 9.0</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the premier national-level project competition organized by SSN College of Engineering
          </p>
        </div>

        {/* Three Column Layout - All Sections Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((section, index) => (
            <div 
              key={section.title} 
              className="group relative"
            >
              {/* Card with hover effect */}
              <div className="relative h-full bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Top accent border */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${section.accentColor} rounded-t-xl`}></div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0D4BA0] to-blue-600 flex items-center justify-center mb-6">
                  <div className="text-white">
                    {section.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                
                {/* Highlight */}
                <p className="text-gray-600 text-sm mb-6 font-medium">
                  {section.highlight}
                </p>
                
                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-8">
                  {section.content}
                </p>
              
                
                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${section.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`}></div>
              </div>
            </div>
          ))}
        </div>

       

      

        
      </div>
    </section>
  );
};

export default About;