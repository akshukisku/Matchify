// import React from 'react'

const PricingCard = ({plan}:any) => {
  return (
    <div className={`relative rounded-2xl p-6 transition-all duration-300 
      backdrop-blur-lg border 
      ${
        plan.highlighted
          ? "border-pink-500 scale-105 shadow-[0_0_40px_rgba(255,0,150,0.3)]"
          : "border-white/10 hover:scale-105 hover:border-pink-400"
      } 
      bg-white/5`}
    >
      {/* Recommended Badge */}
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-pink-500 px-3 py-1 rounded-full">
          Recommended
        </span>
      )}

      {/* Plan Name */}
      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>

      {/* Price */}
      <p className="text-3xl font-bold">
        {plan.price}
        <span className="text-sm text-gray-400">{plan.duration}</span>
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-2 text-sm text-gray-300">
        {plan.features.map((feature: string, index: number) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`mt-6 w-full py-2 rounded-full transition ${
          plan.highlighted
            ? "bg-gradient-to-r from-pink-500 to-purple-500"
            : "border border-gray-600 hover:bg-gray-800"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  )
}

export default PricingCard