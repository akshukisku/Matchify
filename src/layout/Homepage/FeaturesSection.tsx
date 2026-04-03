import FeatureCard from "../../components/FeatureCard";
import { featuresData } from "../../helpers/json/matchify.data";


const FeaturesSection = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Precision Meets Passion
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our technology doesn’t just swipe; it understands. Experience a suite
            of tools designed for deeper interaction.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;