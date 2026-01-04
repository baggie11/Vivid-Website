import React from 'react';

const AcademicContactPage = () => {
  return (
    <div className="min-h-screen bg-white p-8 font-serif">
      
      {/* Header Section */}
      <div className="text-center mb-24">
        <h1 className="text-[#0D4BA0] text-4xl font-bold mb-16">Contact Us</h1>
        
        <div className="text-red-600 text-center space-y-3 text-lg">
          <p className="font-semibold">The Convenor</p>
          <p>Department of Information Technology</p>
          <p>SSN College of Engineering</p>
          <p>Rajiv Gandhi Salai (OMR),</p>
          <p>SSN Nagar, Kalavakkam – 603 110</p>
          <p>Tamil Nadu, India.</p>
          <p className="mt-4">E-mail: vivid25@it.ssn.edu.in</p>
        </div>
      </div>

      {/* The Convenor Section */}
      <div className="text-center mb-32">
        <h2 className="text-[#0D4BA0] text-3xl font-bold mb-16">The Convenor</h2>
        
        <div className="flex justify-center mb-8">
          {/* Portrait Image - Replace src with actual image */}
          <img src="/images/hod.jpg" alt="" />
        </div>
        
        <div className="text-red-600">
          <p className="font-bold text-xl mb-2">Dr. A. Shahina</p>
          <p className="text-lg">(Professor & Head)</p>
        </div>
      </div>

      {/* Organizers Section */}
      <div className="text-center">
        <h2 className="text-[#0D4BA0] text-3xl font-bold mb-20">Organizers</h2>
        
        <div className="flex justify-between items-start max-w-6xl mx-auto">
          
          {/* Left Organizer */}
          <div className="w-64 text-center">
          <img src="/images/joe.jpg" alt="" />
            <div className="text-red-600">
              <p className="font-bold text-lg mb-1">Dr. I. Joe Louis Paul</p>
              <p className="mb-3">(Associate Professor)</p>
              <p>+91 98415 14128</p>
            </div>
          </div>

          {/* Center Organizer */}
          <div className="w-64 text-center">
          <img src="/images/swathika.jpg" alt="" />
            <div className="text-red-600">
              <p className="font-bold text-lg mb-1">Dr. R. Swathika</p>
              <p className="mb-3">(Assistant Professor)</p>
              <p>+91 99403 56882</p>
            </div>
          </div>

          {/* Right Organizer */}
          <div className="w-64 text-center">
          <img src="/images/radha.jpg" alt="" />
            <div className="text-red-600">
              <p className="font-bold text-lg mb-1">Dr. N. Radha</p>
              <p className="mb-3">(Associate Professor)</p>
              <p>+91 99443 58632</p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default AcademicContactPage;