'use client';

import { Cpu, Brain, BarChart3, Link2, Shield } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      title: "IoT",
      fullTitle: "Internet of Things",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      description: "Harness the power of connected devices and smart systems to create innovative IoT solutions that solve real-world problems and drive digital transformation."
    },
    {
      title: "AI & ML",
      fullTitle: "Artificial Intelligence & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      description: "Develop intelligent applications powered by machine learning algorithms to unlock insights, automate processes, and create transformative user experiences."
    },
    {
      title: "Data Analytics",
      fullTitle: "Data Science & Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Transform raw data into actionable insights using advanced analytics and visualization techniques to drive strategic business decisions."
    },
    {
      title: "Blockchain",
      fullTitle: "Distributed Ledger Technology",
      icon: <Link2 className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      description: "Build secure, decentralized solutions leveraging blockchain technology for enhanced transparency, security, and trust in modern applications."
    },
    {
      title: "Cybersecurity",
      fullTitle: "Information Security",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      description: "Develop robust security solutions to protect systems and networks from evolving cyber threats, ensuring data integrity and user privacy."
    }
  ];

  return (
    <section id="tracks" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Technology Domains</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Competition <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Tracks</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your technology domain and showcase your expertise across multiple innovative areas
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className="group h-full"
            >
              <div className={`relative h-full ${track.bgColor} rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-colors duration-200`}>
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.color} rounded-t-2xl`}></div>
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-6 text-white transition-colors`}>
                  {track.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {track.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-semibold">
                  {track.fullTitle}
                </p>
                
                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {track.description}
                </p>
                
                {/* Badge */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full ${track.bgColor.replace('50', '100').replace('900/10', '900/30')} text-gray-700`}>
                    Track Available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center p-8 md:p-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to showcase your innovation?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Select your preferred track and submit your groundbreaking project. Make your mark on the national stage!
          </p>
          <a 
            href="#hero"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0D4BA0] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
          >
            Submit Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tracks;