const StoryCard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row bg-[#0d0d0d] shadow-xl">

        {/* LEFT IMAGE */}
        <div className="relative w-full md:w-[60%] h-[280px] md:h-[400px]">
          <img
            src="/klara-kulikova-ZjZ4H4o9O3k-unsplash.jpg"
            alt="Julian & Elena"
            className="w-full h-full object-cover"
          />

          {/* Stronger Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="text-xs bg-purple-500/20 border border-purple-400/30 text-purple-300 px-3 py-1 rounded-full backdrop-blur-md">
              ✦ Matched in Paris
            </span>
          </div>

          {/* TEXT */}
          <div className="absolute bottom-5 left-5 right-5">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
              Julian & Elena
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
              "Matchify+ didn't just find me a partner; it found me someone who
              appreciates the same obscure art house films and silent morning
              coffees. It felt like destiny, curated."
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col justify-center gap-6 bg-white/5 backdrop-blur-lg">

          {/* ICON */}
          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-pink-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
              4.5 2.09C13.09 3.81 14.76 3 
              16.5 3 19.58 3 22 5.42 22 8.5c0 
              3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              The First Connection
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Within 48 hours of joining, Julian received a "Connection Pulse"
              from Elena. Their first conversation lasted 6 hours.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10" />

          {/* METRIC */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Success Metric
            </span>
            <span className="text-pink-400 font-semibold text-sm">
              98% Match Score
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;