// import React from "react";
import { CirclePlay } from 'lucide-react';

const StorieSection = () => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-black px-4 mt-7">
      <div className="relative w-full max-w-6xl h-full rounded-3xl overflow-hidden">
        {/* Background Image */}
        <img
          src="/stories_hero.jpg" // replace with your image
          alt="hero"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
          {/* Tag */}
          <span className="w-fit text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 border border-pink-400/30 mb-4">
            VERIFIED SUCCESS
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Love, <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              Redefined.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-4 max-w-lg text-sm md:text-base">
            Step inside the digital gala where thousands of souls found their
            perfect counterparts. These aren't just dates; they are the
            beginning of forever.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {/* Primary Button */}
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Start Your Story
            </button>

            {/* Secondary Button */}
            <button className="flex items-center gap-2 border border-gray-500 text-gray-200 px-5 py-3 rounded-full hover:bg-white/10 transition">
              <CirclePlay />Watch Film
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorieSection;
