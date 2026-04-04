// import React from "react";
import { ShieldCheck } from 'lucide-react';


const CTASection = () => {
  return (
    <section className="w-full bg-black px-4 sm:px-6 lg:px-12 py-16 flex justify-center">
      
      {/* CONTAINER */}
      <div className="w-full max-w-5xl rounded-3xl border border-white/10 
        bg-gradient-to-b from-white/5 to-white/[0.02] 
        backdrop-blur-xl 
        px-6 sm:px-10 py-14 text-center relative overflow-hidden">

        {/* BORDER GLOW */}
        <div className="absolute inset-0 rounded-3xl border border-pink-500/20 pointer-events-none"></div>

        {/* HEADING */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Your chair at the <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            gala is waiting.
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          The world’s most intentional dating community is ready to welcome you.
          Don’t leave your next chapter to chance.
        </p>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
       <button className="px-8 py-4 rounded-full bg-[#FF89AC]
  text-black font-semibold
  shadow-[0_10px_30px_rgba(255,137,172,0.5)]
  transition duration-300">
  Start Your Story Now
</button>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-2">
          <span className="text-gray-400"><ShieldCheck size={15} /></span>
          Secure & Verified Profiles Only
        </p>

      </div>
    </section>
  );
};

export default CTASection;