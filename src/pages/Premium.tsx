// import React from 'react'

import FeatureMatrix from "../layout/Premium/FeatureMatrix"
import PremiumHeroSection from "../layout/Premium/PremiumHeroSection"
import SubscriptionPart from "../layout/SubscriptionPart"

const Premium = () => {
  return (
    <div className="w-full">
      <PremiumHeroSection />
      <SubscriptionPart/>
      <FeatureMatrix/>
    </div>
  )
}

export default Premium