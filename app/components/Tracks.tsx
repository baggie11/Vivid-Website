'use client';

import { Cpu, Brain, BarChart3, Link2, Shield, ChevronRight } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      title: "IoT",
      subtitle: "Internet of Things",
      icon: <Cpu className="w-6 h-6" />,
      color: "border-blue-200",
      accentColor: "text-blue-600"
    },
    {
      title: "AI and ML",
      subtitle: "Artificial Intelligence & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "border-purple-200",
      accentColor: "text-purple-600"
    },
    {
      title: "Data Analytics",
      subtitle: "Data Science & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "border-emerald-200",
      accentColor: "text-emerald-600"
    },
    {
      title: "Blockchain",
      subtitle: "Distributed Ledger Technology",
      icon: <Link2 className="w-6 h-6" />,
      color: "border-orange-200",
      accentColor: "text-orange-600"
    },
    {
      title: "Cyber Security",
      subtitle: "Information Security",
      icon: <Shield className="w-6 h-6" />,
      color: "border-red-200",
      accentColor: "text-red-600"
    }
  ];

  const descriptions = {
    iot: "The internet of things is a system of interrelated computing devices with unique identifiers and the ability to transfer data over a network.",
    ai: "AI refers to processes and algorithms that simulate human intelligence, including perception, learning and problem solving.",
    analytics: "Analytics is the systematic computational analysis of data for discovery, interpretation, and communication of meaningful patterns.",
    blockchain: "A blockchain is a distributed database that maintains a secure and decentralized record of transactions without third parties.",
    cybersecurity: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks and unauthorized access."
  };

  return (
    <section id="tracks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-[#0D4BA0]"></div>
            <span className="text-[#0D4BA0] font-semibold tracking-wider uppercase text-sm">Technology Tracks</span>
            <div className="w-12 h-0.5 bg-[#0D4BA0]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Competition <span className="text-[#0D4BA0]">Tracks</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose your technology domain for VIVID 9.0 project submission
          </p>
        </div>

        {/* Simple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0D4BA0] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${track.accentColor.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                    <div className={track.accentColor}>
                      {track.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{track.title}</h3>
                    <p className="text-sm text-gray-600">{track.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 ${track.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {Object.values(descriptions)[index]}
              </p>
              
              <div className="mt-4 flex items-center gap-2">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${track.accentColor.replace('text-', 'bg-')}/10 ${track.accentColor}`}>
                  Technology Track
                </span>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Tracks;