// import React from "react";
import {  pricingPlans } from "../helpers/json/matchify.data";

const SubscriptionPart = () => {
  return (
<section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 gap-16">
      <div className="text-center text-white font-bold">
        <h2 className=" text-5xl">Choose Your Tier</h2>
        <p className="font-normal text-[#ADAAAA] mt-4">
          Access exclusive features and elevate your journey to the digital
          gala.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
        {pricingPlans.map((plan) => {
          const Icon = plan.icon;

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between 
              bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] 
              border ${
                plan.isRecommended
                  ? "border-pink-500 shadow-[0_0_40px_rgba(255,105,180,0.4)] scale-105"
                  : "border-neutral-800"
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF89AC] to-[#FF709F] text-[#4C0022] font-bold text-xs px-4 py-1 rounded-full ">
                  RECOMMENDED
                </div>
              )}

              {/* Top */}
              <div>
                <h2
                  className={`text-lg font-semibold ${
                    plan.isRecommended ? "text-pink-400" : "text-white"
                  }`}
                >
                  {plan.name}
                </h2>

                <p className="text-3xl font-bold text-white mt-2">
                  ${plan.price}
                  <span className="text-sm text-gray-400 font-medium">
                    {plan.duration}
                  </span>
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <Icon
                        size={18}
                        className={`${
                          plan.isRecommended
                            ? "fill-[#FF89AC] text-gray-900"
                            : "text-[#B78EFE] "
                        }`}
                        fill={
                          plan.iconFill === "fill" ? "currentColor" : "none "
                        }
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className={`mt-8 w-full py-3 rounded-xl text-sm font-semibold transition-all
                ${
                  plan.isRecommended
                    ? "bg-pink-500 text-[#4C0022] hover:bg-pink-600 hover:text-[#360219] shadow-lg"
                    : "border border-gray-700 text-[#B78EFE] hover:bg-gray-800"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SubscriptionPart;
