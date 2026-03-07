'use client';

import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const EventDetails = () => {
  return (
    <section id="details" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#0D4BA0] to-transparent"></div>
            <span className="text-[#0D4BA0] font-bold tracking-widest uppercase text-xs md:text-sm">Competition Details</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-[#0D4BA0] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event <span className="bg-gradient-to-r from-[#0D4BA0] to-[#1E6FE8] bg-clip-text text-transparent">Details</span>
          </h2>
          <p className="text-lg text-gray-600">
            Essential information for VIVID 10.0 participation
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Eligibility Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-2xl border border-blue-200 p-8 md:p-10 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Participants must be from <span className="font-bold text-[#0D4BA0]">IT, CSE, ECE, BME, MECH or EEE</span> streams (UG/PG)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
               <span className="font-bold">4 members per team</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <span className="font-bold">Both individual students</span> and <span className="font-bold">college teams</span> are welcome
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Registration Fee Section */}
          <div className="bg-gradient-to-br from-green-50 to-green-50/50 rounded-2xl border border-green-200 p-8 md:p-10 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Registration Fee
                </h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0D4BA0] text-white text-sm font-bold">1</span>
                      <h4 className="font-bold text-lg text-gray-900">All College Students</h4>
                    </div>
                    <p className="text-gray-600 ml-10">
                      <span className="font-bold text-[#0D4BA0]">₹2,000 + GST</span> (for entire team, only if shortlisted for Phase 2)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Dates Section */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-50/50 rounded-2xl border border-purple-200 p-8 md:p-10 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Important Dates
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">In-House Event</p>
                      <p className="font-bold text-lg text-gray-900">26 March 2026</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">External Event</p>
                      <p className="font-bold text-lg text-gray-900">26 March 2026</p>
                    </div>
                  </div>
                  
                 
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Prizes */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-50/50 rounded-2xl border border-amber-200 p-8 md:p-10 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Rewards & Recognition
              </h3>
            </div>
            
            {/* Professional Trophy Showcase */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative w-full max-w-2xl">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D4BA0] via-[#1E6FE8] to-[#0D4BA0] rounded-2xl blur-xl opacity-20"></div>
                
                {/* Main container */}
                <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-[#0D4BA0] shadow-xl">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    {/* Trophy Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-md opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 p-6 rounded-full shadow-lg">
                          <Trophy className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Excellence Recognized
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 font-medium">
                        Certificates will be provided.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-[#0D4BA0] rounded-tl-lg"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-[#0D4BA0] rounded-tr-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-[#0D4BA0] rounded-bl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-[#0D4BA0] rounded-br-lg"></div>
              </div>
            </div>
            
          
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;