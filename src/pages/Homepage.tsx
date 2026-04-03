// import React from 'react'
import FeaturesSection from '../layout/Homepage/FeaturesSection'
import HeroSection from '../layout/Homepage/Herosection'
import SubscriptionPart from '../layout/SubscriptionPart'

const Homepage = () => {
  return (
    <div className='container'>
        <HeroSection/>
        <FeaturesSection/>
        <SubscriptionPart/>
    </div>
  )
}

export default Homepage