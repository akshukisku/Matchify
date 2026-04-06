// import React from 'react'
import AppCTA from '../layout/Homepage/AppCTA'
import FeaturesSection from '../layout/Homepage/FeaturesSection'
import HeroSection from '../layout/Homepage/Herosection'
import StoriesSection from '../layout/Homepage/StoriesSection'
import SubscriptionPart from '../layout/SubscriptionPart'

const Homepage = () => {
  return (
    <div className='w-full'>
        <HeroSection/>
        <FeaturesSection/>
        <StoriesSection/>
        <SubscriptionPart/>
        <AppCTA/>
    </div>
  )
}

export default Homepage