// import React from "react";

const AppCTA = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12">
        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20 blur-2xl opacity-50"></div>

        {/* Left Content */}
        <div className="relative max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Gala <br />
            awaits in your pocket.
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Download the Matchify+ app today and start meeting people who truly
            matter. Available on all major platforms.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-row md:flex-col gap-4">
            {/* App Store */}
            <button className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition w-10 md:w-auto">
              <span className="text-xs">DOWNLOAD ON THE</span>
              <span className="font-semibold">App Store</span>
            </button>

            {/* Google Play */}
            <button className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition w-full md:w-auto">
              <span className="text-xs">GET IT ON</span>
              <span className="font-semibold">Google Play</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 bg-purple-500/20 blur-3xl rounded-full"></div>

          <img
            src="/Phone Mockup Aesthetic.png"
            alt="app preview"
            className="relative w-48 md:w-64 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
