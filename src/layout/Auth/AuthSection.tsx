// import React from "react";

import LoginCard from "../../components/LoginCard";
import SignupCard from "../../components/SignupCard";

const AuthSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-black to-pink-900/20 blur-3xl opacity-50"></div>

      {/* Heading */}
      <div className="text-center max-w-2xl relative">
        <h1 className="text-3xl md:text-5xl font-bold">
          Step into the{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gala
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Elevated connections for the intentional. Join the most exclusive
          digital lounge for meaningful encounters.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl w-full relative">
       <LoginCard/>
       <SignupCard/>
      </div>
    </section>
  );
};

export default AuthSection;
