// import React from "react";
import { BadgeCheck } from 'lucide-react';
import { featureMatrix } from "../../helpers/json/matchify.data";

const FeatureMatrix = () => {
  const renderValue = (value: any) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <BadgeCheck className="text-pink-400 w-5 h-5" />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex justify-center text-gray-600">
          —
        </div>
      );
    }
    return <span className="text-gray-300">{value}</span>;
  };

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          The Feature Matrix
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            
            {/* Head */}
            <thead>
              <tr className="text-gray-400 text-sm border-b border-white/10">
                <th className="text-left py-4">Capabilities</th>
                <th className="text-center py-4">Free</th>
                <th className="text-center py-4 text-purple-400">Plus</th>
                <th className="text-center py-4 text-pink-400">Premium</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {featureMatrix.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-4 text-gray-300">
                    {feature.name}
                  </td>
                  <td className="text-center py-4">
                    {renderValue(feature.free)}
                  </td>
                  <td className="text-center py-4">
                    {renderValue(feature.plus)}
                  </td>
                  <td className="text-center py-4">
                    {renderValue(feature.premium)}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureMatrix;