// import React from "react";

const StoryCard = ({ story }: any) => {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Quote */}
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        “{story.quote}”
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={story.image}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{story.name}</p>
          <p className="text-xs text-gray-400 uppercase">
            {story.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;