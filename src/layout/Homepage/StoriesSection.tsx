// import React from "react";
import { BadgeCheck } from "lucide-react";
import { storiesData } from "../../helpers/json/matchify.data";
import StoryCard from "../../components/StoryCard";

const StoriesSection = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Verified Stories</h2>
            <p className="text-gray-400 mt-3 max-w-md">
              Thousands have found their "plus one" through our curated
              ecosystem. Real people, real connections.
            </p>
          </div>

          {/* Badge */}
          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[12px] flex items-center gap-2">
            <BadgeCheck className="text-green-400 w-4 h-4" />
            1.2M+ VERIFIED PROFILES
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {storiesData.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
