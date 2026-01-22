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
                      Participants must be from <span className="font-bold text-[#0D4BA0]">IT, CSE, ECE, BME, MECH, or EEE</span> streams (UG/PG)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Maximum <span className="font-bold">3 members per team</span>
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
                      <h4 className="font-bold text-lg text-gray-900">External College Participants</h4>
                    </div>
                    <p className="text-gray-600 ml-10">
                      <span className="font-bold text-[#0D4BA0]">₹1,000 + GST</span> (for entire team, only if shortlisted for Phase 2)
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0D4BA0] text-white text-sm font-bold">2</span>
                      <h4 className="font-bold text-lg text-gray-900">SSN College Participants</h4>
                    </div>
                    <p className="text-gray-600 ml-10">
                      <span className="font-bold text-[#0D4BA0]">₹500 + GST</span> (for entire team, only if shortlisted for Phase 2)
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
                      <p className="font-bold text-lg text-gray-900">27 March 2026</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-red-200 border-l-4 border-l-red-500">
                    <p className="text-sm text-gray-600 mb-3 font-semibold">Project Submission Deadline</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Early Deadline</p>
                        <p className="font-bold text-[#0D4BA0] text-lg">Before 21 March 2026</p>
                      </div>
                      <div className="hidden sm:block w-px bg-gray-300"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Final Deadline</p>
                        <p className="font-bold text-red-600 text-lg">22 March 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Prizes */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-50/50 rounded-2xl border border-amber-200 p-8 md:p-10 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              🏆 Rewards & Recognition
            </h3>
            <p className="text-gray-600 mb-6">
              Prize amounts are subject to confirmation. The organizer reserves the right to substitute with equivalent value prizes. All awards are subject to VIVID 10.0 terms & conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-4">In-House (SSN Students)</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">1st Prize</span>
                    <span className="font-bold text-[#0D4BA0]">TBD</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">2nd Prize</span>
                    <span className="font-bold text-[#0D4BA0]">TBD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">3rd Prize</span>
                    <span className="font-bold text-[#0D4BA0]">TBD</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-4">External Participants</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">1st Prize</span>
                    <span className="font-bold text-[#0D4BA0]">TBD</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">2nd Prize</span>
                    <span className="font-bold text-[#0D4BA0]">TBD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">3rd Prize</span>
                    <span className="font-bold text-[#0D4BA0]">TBD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;