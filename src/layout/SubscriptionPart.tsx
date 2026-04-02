// import React from "react";
import { pricingData } from "../helpers/json/matchify.data";
import PricingCard from "../components/PricingCard";

const SubscriptionPart = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Choose Your Tier
      </h2>
      <p className="text-gray-400 mt-2 text-center">
        Access exclusive features and elevate your journey to the digital gala.
      </p>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {pricingData.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPart;
