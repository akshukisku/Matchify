// import React from 'react'
import CTASection from '../layout/Stories/CTASection'
import HarmonySection from '../layout/Stories/HarmonySection'
import StatsSection from '../layout/Stories/StatsSection'
import StorieSection from '../layout/Stories/StorieSection'
import StoryBlocks from '../layout/Stories/StoryBlocks'
import StoryCard from '../layout/Stories/StoryCard'

const Stories = () => {
  return (
    <div className='w-full'>
        <StorieSection/>
        <StoryCard/>
        <HarmonySection/>
        <StatsSection/>
        <StoryBlocks/>
        <CTASection/>
    </div>
  )
}

export default Stories