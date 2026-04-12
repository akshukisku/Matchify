// import React from "react";
import { BadgeCheck } from "lucide-react";

const VerifiedSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 text-center relative overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Verified for Excellence
      </h2>

      <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
        Look for the Connection Pulse. It’s our highest seal of trust, awarded
        only to accounts that have passed 3D facial mapping.
      </p>

      {/* Profile Circle */}
      <div className="mt-16 flex justify-center items-center relative">
        
        {/* Outer Glow Rings */}
        <div className="absolute w-64 h-64 rounded-full border border-purple-500/20"></div>
        <div className="absolute w-52 h-52 rounded-full border border-pink-500/20"></div>

        {/* Inner Gradient Ring */}
        <div className="w-44 h-44 rounded-full p-[3px] bg-gradient-to-r from-pink-500 to-purple-500">
          
          {/* Image Container */}
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Verified Badge */}
        <div className="absolute bottom-6 right-[calc(50%-70px)] translate-x-1/2">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
            <BadgeCheck className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-16 text-xs tracking-widest text-purple-400 uppercase">
        Verified Member: Sofia, 26
      </p>
    </section>
  );
};

export default VerifiedSection;