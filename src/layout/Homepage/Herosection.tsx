// import React from "react";
import { ArrowRight } from 'lucide-react';


const Herosection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-black to-pink-900/30 blur-3xl opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl w-full text-center">
        {/* Tagline */}
           <div
              className={`inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1.5 rounded-full
                border border-white/10 bg-white/5 backdrop-blur-sm
                transition-all duration-700 }`}
            >
              <span className="text-[#FF89AC] text-[12px] sm:text-xs font-medium tracking-[0.2em] uppercase font-manrose font-bold">
                The Evolution of Connection
              </span>
            </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold leading-tight">
          Find your perfect <br />
          match with <br/>
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI-powered <br /> discovery.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Step into an exclusive digital lounge where algorithms meet intuition.
          Designed for the intentional, the modern, and the bold.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition">
            Join the Gala 
            <ArrowRight size={20}/>
          </button>

          <button className="px-6 py-3 rounded-full border border-gray-700 hover:bg-gray-800 transition">
            Explore Features
          </button>
        </div>
      </div>

      {/* Left Card */}
      <div className="hidden md:block absolute left-[200px] top-1/2 -translate-y-1/2">
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-3 w-40 rotate-[-6deg] shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="profile"
            className="rounded-xl object-cover h-48 w-full"
          />
              <div className="text-part transition-all duration-700 inline-flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
             <p className="text-xs  text-gray-300">Elena, 24</p>
         </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="hidden md:block absolute right-[200px] top-1/2 -translate-y-1/2">
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-3 w-40 rotate-[6deg] shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="profile"
            className="rounded-xl object-cover h-70 w-full"
          />
         <div className="text-part transition-all duration-700 inline-flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
             <p className="text-xs  text-gray-300">Julian, 29</p>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
