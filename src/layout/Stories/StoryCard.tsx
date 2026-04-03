import { Heart } from "lucide-react";

const StoryCard = () => {
  return (
    <div className="max-w-6xl mx-auto p-7">
      <div className="relative w-full rounded-2xl flex gap-10 overflow-hidden borderflex flex-col md:flex-row  shadow-xl">
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
        <div
          className="w-full md:w-[40%] md:h-[45vh] 
  px-4 sm:px-6 md:px-10 
  py-6 md:py-0
  flex flex-col justify-center gap-5 
  bg-white/5 backdrop-blur-lg rounded-[24px] md:rounded-[32px]"
        >
          {/* ICON */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#FF89AC]/10 flex items-center justify-center shrink-0">
            <Heart color="#FF89AC" size={20} />
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 leading-snug">
              The First Connection
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Within 48 hours of joining, Julian received a "Connection Pulse"
              from Elena. Their first conversation lasted 6 hours.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10" />

          {/* METRIC */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              Success Metric
            </span>
            <span className="text-pink-400 font-semibold text-xs sm:text-sm">
              98% Match Score
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
