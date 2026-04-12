// import React from "react";

const FinalCTA = () => {
  return (
    <section className="bg-black px-6 py-20">
      <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg text-center px-6 py-12 md:py-16">
        
        {/* Gradient Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 blur-2xl opacity-60"></div>

        {/* Content */}
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Your Peace of Mind <br className="hidden md:block" />
            is our Signature Feature.
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Join the exclusive community where security is woven into every pixel.
            Experience the digital gala today.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition shadow-[0_0_25px_rgba(255,0,150,0.4)]">
              Secure Your Invite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;