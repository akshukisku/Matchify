
import { Quote } from "lucide-react";
// import React from "react";

const HarmonySection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-12 flex justify-center">
      {/* MAIN WRAPPER */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* LEFT IMAGE */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2"
              alt="couple"
              className="w-full h-[320px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* TAG */}
          <div className="absolute -bottom-4 right-4  bg-white/10 backdrop-blur-xl border border-white/20  shadow-lg shadow-black/30 px-4 py-2 rounded-xl text-xs">
            {" "}
            <p className="text-pink-400 uppercase text-[10px] tracking-wider">
              Location Identity
            </p>
            <p className="text-gray-300 text-[11px] sm:text-xs">
              Matched in Tokyo, 2023
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2">
          {/* SMALL HEADING */}
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-400 mb-3 sm:mb-4">
            THE DIGITAL GALA EXPERIENCE
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Finding Harmony in <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Chaos.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base max-w-md">
            Mark and Sora were both navigating high-stress tech careers when
            they matched. They found solace in Matchify’s intentional
            interaction model, which encouraged deep conversation before
            meeting.
          </p>

          {/* QUOTE BOX */}
          <div className="mt-6 sm:mt-8 relative flex items-start gap-4  bg-white/5 backdrop-blur-xl  border border-white/10  rounded-2xl p-5 sm:p-6 shadow-lg shadow-black/30"
          >
            {/* LEFT PINK LINE */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#FF89AC] rounded-l-2xl"></div>

            {/* QUOTE ICON */}
            <span className="text-pink-400 text-2xl sm:text-3xl leading-none">
              <Quote className="text-pink-400" />
            </span>

            {/* TEXT CONTENT */}
            <div className="flex-1">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                "The interface made me feel calm. It wasn’t about swiping, it
                was about discovering."
                <span className="text-gray-500 text-xs sm:text-sm ml-2">
                  — Sora
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HarmonySection;
