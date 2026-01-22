'use client';

import Image from 'next/image';

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Our Sponsors</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proudly supported by SSN Institutions - A legacy of innovation and academic excellence
          </p>
        </div>

        {/* Main Sponsor */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 md:p-16 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex flex-col items-center justify-center">
              {/* Title Sponsor Badge */}
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] text-white font-bold px-6 py-2 rounded-full text-sm tracking-wider uppercase shadow-lg">
                  Title Sponsor
                </span>
              </div>

              {/* SSN Logo */}
              <div className="relative w-full max-w-md aspect-square mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl blur-2xl opacity-50"></div>
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <Image
                    src="/images/logo.png"
                    alt="SSN Institutions Logo"
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>

              {/* Sponsor Info */}
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  SSN Institutions
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Founded by Dr. Shiv Nadar, Chairman of HCL Technologies
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              SSN College of Engineering stands as a premier institution dedicated to excellence in education, 
              research, and innovation. With world-class infrastructure and a commitment to nurturing future leaders, 
              SSN continues to shape the technological landscape of tomorrow.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
