'use client';

import { Building2, GraduationCap, Target, BookOpen, Cpu, Globe } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: "SSN Institutions",
      icon: <Building2 className="w-8 h-8" />,
      content: "SSN Institutions, founded by Dr. Shiv Nadar, Chairman of HCL Technologies, is a premier center of higher learning with a steadfast mission of pursuing excellence in education and research. The institution offers comprehensive graduate, undergraduate, and research programs.",
      highlight: "Founded by Dr. Shiv Nadar, Chairman of HCL Technologies",
      accentColor: "from-blue-500 to-blue-600"
    },
    {
      title: "VIVID 10.0",
      icon: <Target className="w-8 h-8" />,
      content: "VIVID 10.0 is a prestigious National Level Project Competition for IT, CSE, ECE, BME, MECH, and EEE (UG/PG) students. It encourages participants to leverage their knowledge, skills, and creativity to develop innovative technology solutions that create meaningful impact.",
      highlight: "9th National Level Project Competition",
      accentColor: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Department of IT",
      icon: <GraduationCap className="w-8 h-8" />,
      content: "Established in 1999, the Department of Information Technology is committed to providing quality education and fostering IT excellence among students. Beyond technical expertise, we emphasize holistic development to create responsible citizens and industry professionals.",
      highlight: "Established in 1999 with focus on IT excellence",
      accentColor: "from-purple-500 to-purple-600"
    }
  ];

  const keyPoints = [
    {
      title: "Industry Collaboration",
      description: "Strong partnerships with technology leaders",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Academic Excellence",
      description: "Rigorous educational standards and curricula",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Global Perspective",
      description: "Solutions addressing real-world challenges",
      icon: <Globe className="w-6 h-6" />
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">About the Institution</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">VIVID 10.0</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the premier national-level project competition by SSN College of Engineering
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div 
              key={section.title} 
              className="group h-full"
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
                {/* Top accent border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.accentColor} rounded-t-2xl`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.accentColor} flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow`}>
                  <div className="text-white">
                    {section.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                
                {/* Highlight */}
                <p className="text-gray-600 text-sm mb-4 font-semibold">
                  {section.highlight}
                </p>
                
                {/* Content */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Why Choose VIVID?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-md mx-auto mb-4 flex items-center justify-center text-[#0D4BA0]">
                  {point.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;