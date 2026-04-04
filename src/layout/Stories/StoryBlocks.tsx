import React from 'react'
import { cards } from '../../helpers/json/matchify.data'

const StoryBlocks = () => {
  return (
     <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-12 flex justify-center">
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6">
        
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group w-full md:w-1/3 h-[300px] rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover 
              group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>

            {/* TEXT */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white font-semibold text-lg">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default StoryBlocks