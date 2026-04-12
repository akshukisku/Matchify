// import React from 'react'

const PremiumHeroSection = () => {
  return (
      <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 blur-3xl opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <span className="inline-block text-xs tracking-widest uppercase bg-white/10 border border-white/10 px-4 py-1 rounded-full text-pink-400">
          Elevate Your Connection
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Love without <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            limitations.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Experience the Digital Gala. Choose a tier that matches your intent and
          unlock a world of intentional, fluid connections.
        </p>
      </div>
    </section>
  )
}

export default PremiumHeroSection