const EventDetails = () => {
    return (
      <section id="event-details" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Event Details
          </h2>
  
          <div className="space-y-8">
            {/* Eligibility Criteria */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Eligibility Criteria</h3>
              <div className="space-y-4">
                <p className="text-gray-800">
                  Participant must be only from <span className="font-bold text-[#0D4BA0]">IT/CSE/ECE/BME/MECH/EEE (UG/PG)</span> field.
                </p>
                <p className="text-gray-800">
                  Maximum of 3 members per team (for External College Participants).
                </p>
                <div className="flex items-start gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">NEW</span>
                  <p className="text-gray-800">Maximum of 3 members per team (for SSN Students Only)</p>
                </div>
              </div>
            </div>
  
            {/* Registration Fee */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Registration Fee</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#0D4BA0] text-white flex items-center justify-center font-bold">1</div>
                    <span className="font-bold text-gray-900">External College Participants</span>
                  </div>
                  <p className="text-gray-800 ml-9">
                    ₹ 1000 + Taxes (for entire team) - Paid only by shortlisted teams for Phase 2. Teams will be intimated via email.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#0D4BA0] text-white flex items-center justify-center font-bold">2</div>
                    <span className="font-bold text-gray-900">SSN Participants</span>
                  </div>
                  <p className="text-gray-800 ml-9">
                    ₹ 200 + Taxes (for entire team) - Paid only by shortlisted teams for Phase 2. Teams will be intimated via email.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Rewards */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Rewards</h3>
              <p className="text-gray-800 mb-6">
                Prize is subject to availability. Organizer reserves the right to substitute with equivalent value. Subject to VIVID 9.0 terms & conditions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* In-House */}
                <div className="border border-gray-300 rounded p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">In-House (SSN Students)</h4>
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">NEW</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Theme: Project / Demo</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Winner</span>
                      <span className="font-bold text-[#0D4BA0]">TBD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1st Runner Up</span>
                      <span className="font-bold text-[#0D4BA0]">TBD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2nd Runner Up</span>
                      <span className="font-bold text-[#0D4BA0]">TBD</span>
                    </div>
                  </div>
                </div>
  
                {/* External */}
                <div className="border border-gray-300 rounded p-4">
                  <h4 className="font-bold text-gray-900 mb-3">External College Participants</h4>
                  <p className="text-sm text-gray-600 mb-4">Theme: Project / Demo</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Winner</span>
                      <span className="font-bold text-[#0D4BA0]">TBD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1st Runner Up</span>
                      <span className="font-bold text-[#0D4BA0]">TBD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2nd Runner Up</span>
                      <span className="font-bold text-[#0D4BA0]">TBD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Important Dates */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Important Dates</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-[#0D4BA0] rounded-full"></div>
                    <span className="font-bold">In-house VIVID 9.0:</span>
                    <span className="text-gray-800">26 March 2025</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-[#0D4BA0] rounded-full"></div>
                    <span className="font-bold">External Colleges VIVID 9.0:</span>
                    <span className="text-gray-800">27 March 2025</span>
                  </div>
                </div>
  
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#0D4BA0] rounded-full"></div>
                    <span className="font-bold">Project/Idea submission deadline:</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">(Applicable for both In-House & External Colleges)</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Before</div>
                      <div className="px-4 py-2 border-2 border-red-400 text-red-600 font-bold rounded">21-March-2025</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-white/90 mb-1">Final Deadline</div>
                      <div className="px-4 py-2 bg-[#0D4BA0] text-white font-bold rounded">22-March-2025</div>
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