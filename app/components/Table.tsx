const EventTimeline = () => {
    const inHouseEvents = [
      { event: "Phase 1: Submission (Problem Statement)", startDate: "28-February-2026", endDate: "", note: "<21-March-2026>\n\n<22-March-2026>" },
      { event: "Phase 1: Screening", startDate: "15-March-2026", endDate: "21-March-2026", note: "" },
      { event: "Declaration of shortlisted candidates for Phase 2", startDate: "21-March-2026", endDate: "25-March-2026", note: "" },
      { event: "Phase 2: Registration", startDate: "21-March-2026", endDate: "25-March-2026", note: "" },
      { event: "VIVID 10.0 - In-House", startDate: "26-March-2026", endDate: "26-March-2026", note: "" },
      { event: "Project Presentation In-House", startDate: "26-March-2026", endDate: "26-March-2026", note: "" },
      { event: "Declaration of Shortlisted Candidates for Phase 3 In-House", startDate: "26-March-2026", endDate: "26-March-2026", note: "" },
      { event: "Phase 3: Power Judging In-House", startDate: "26-March-2026", endDate: "26-March-2026", note: "" },
      { event: "Prize Distribution In-House", startDate: "26-March-2026", endDate: "26-March-2026", note: "" },
    ];
  
    const externalEvents = [
      { event: "Phase 1: Submission (Problem Statement)", startDate: "28-February-2026", endDate: "", note: "<21-March-2026>\n\n22-March-2026" },
      { event: "Phase 1: Screening", startDate: "15-March-2026", endDate: "22-March-2026", note: "" },
      { event: "Declaration of shortlisted candidates for Phase 2", startDate: "21-March-2026", endDate: "24-March-2026", note: "" },
      { event: "Phase 2: Registration", startDate: "21-March-2026", endDate: "25-March-2026", note: "" },
      { event: "VIVID 10.0 - External Participants", startDate: "27-March-2026", endDate: "27-March-2026", note: "" },
      { event: "Project Presentation External Participants", startDate: "27-March-2026", endDate: "27-March-2026", note: "" },
      { event: "Declaration of Shortlisted Candidates for Phase 3 External Participants", startDate: "27-March-2026", endDate: "27-March-2026", note: "" },
      { event: "Phase 3: Power Judging External Participants", startDate: "27-March-2026", endDate: "27-March-2026", note: "" },
      { event: "Prize Distribution External Participants", startDate: "27-March-2026", endDate: "27-March-2026", note: "" },
    ];
  
    return (
      <section id="event-timeline" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event <span className="text-[#0D4BA0]">Timeline</span>
            </h2>
            <p className="text-gray-600">Complete schedule for all VIVID 10.0 participants</p>
          </div>
  
          {/* Side-by-Side Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* In-House Table */}
            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
              <div className="bg-[#0D4BA0] text-white p-4">
                <h3 className="text-xl font-bold">In-House Projects (SSN Students)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-300">Events</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-300">Start Date</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-300">End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inHouseEvents.map((item, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="p-3 text-gray-900">
                          <div className="font-medium">{item.event}</div>
                          {item.note && (
                            <div className="mt-1 space-y-1">
                              {item.note.split('\n').map((line, i) => (
                                line.includes('<') ? (
                                  <div key={i} className="text-xs text-red-600 font-medium">
                                    {line.replace(/[<>]/g, '')}
                                  </div>
                                ) : line ? (
                                  <div key={i} className="text-xs text-blue-600 font-medium">
                                    {line}
                                  </div>
                                ) : null
                              ))}
                            </div>
                          )}
                        </td>
                        <td className="p-3 text-gray-800">{item.startDate}</td>
                        <td className="p-3 text-gray-800">{item.endDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  
            {/* External Table */}
            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
              <div className="bg-[#0D4BA0] text-white p-4">
                <h3 className="text-xl font-bold">External College Projects</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-300">Events</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-300">Start Date</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-300">End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {externalEvents.map((item, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="p-3 text-gray-900">
                          <div className="font-medium">{item.event}</div>
                          {item.note && (
                            <div className="mt-1 space-y-1">
                              {item.note.split('\n').map((line, i) => (
                                line.includes('<') ? (
                                  <div key={i} className="text-xs text-red-600 font-medium">
                                    {line.replace(/[<>]/g, '')}
                                  </div>
                                ) : line ? (
                                  <div key={i} className="text-xs text-blue-600 font-medium">
                                    {line}
                                  </div>
                                ) : null
                              ))}
                            </div>
                          )}
                        </td>
                        <td className="p-3 text-gray-800">{item.startDate}</td>
                        <td className="p-3 text-gray-800">{item.endDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  
         
        </div>
      </section>
    );
  };
  
  export default EventTimeline;