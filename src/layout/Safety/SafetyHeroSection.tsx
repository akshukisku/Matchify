// import React from 'react'

const SafetyHeroSection = () => {
  return (
      <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 blur-3xl opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        
        {/* Badge */}
        <span className="inline-block text-xs tracking-widest uppercase bg-white/10 border border-white/10 px-4 py-1 rounded-full text-pink-400">
          Safety First Protocol
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
          Where Intention Meets <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Absolute Security
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          We believe the most premium experience is the one where you feel
          completely safe. Our digital gala is protected by world-class encryption
          and empathetic AI.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="px-6 py-3 text-black rounded-full  bg-[#FF89AC] font-bold  hover:scale-105 transition">
            Read Safety Pledge
          </button>

          <button className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
            Transparency Report
          </button>
        </div>
      </div>
    </section>
  )
}

export default SafetyHeroSection