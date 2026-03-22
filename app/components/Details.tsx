'use client';

import { CheckCircle, Users, Trophy, Clock, Award, IndianRupee } from 'lucide-react';

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
                      <p className="font-bold text-lg text-gray-900">27 March 2026</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">External Event</p>
                      <p className="font-bold text-lg text-gray-900">27 March 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Prizes - Cash Prizes Section */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-50/50 rounded-2xl border border-amber-200 p-8 md:p-10 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <IndianRupee className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Prize Pool
                </h3>
                <p className="text-amber-600 font-bold text-xl mt-1">₹30,000 Total Cash Prizes</p>
              </div>
            </div>
            
            {/* Prize Distribution */}
            <div className="space-y-4">
              {/* 1st Prize */}
           
            </div>
            
            {/* Additional Recognition */}
            <div className="mt-6 pt-4 border-t-2 border-amber-200">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-gray-700">
                  🏆 <span className="font-bold text-[#0D4BA0]">Special Recognition:</span> All finalists receive participation certificates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;