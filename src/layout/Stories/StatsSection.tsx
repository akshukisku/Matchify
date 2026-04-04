import React from "react";

const stats = [
  { value: "12k+", label: "Marriages" },
  { value: "85%", label: "Retention Rate" },
  { value: "240", label: "Cities Globally" },
  { value: "4.9/5", label: "User Rating" },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-12 flex justify-center">
      
      {/* CONTAINER */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-10">
        
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex-1">
            
            {/* VALUE */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {stat.value}
            </h3>

            {/* LABEL */}
            <p className="mt-2 text-xs tracking-widest text-gray-500 uppercase">
              {stat.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;