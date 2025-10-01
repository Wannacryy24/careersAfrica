import React from 'react'
import Hero from '../../layouts/heroSection/Hero'
import MissionVision from '../../layouts/missionVision/MissionVision'
import Stats from '../../layouts/stats/Stats'
import KeyMetrics from '../../layouts/keyMetrics/KeyMetrics'
import HowItWorks from '../../layouts/howItWorks/HowItWorks'

export default function Homepage() {
  return (
    <div>
      <Hero />
      <MissionVision />
      <Stats />
      {/* <KeyMetrics /> */}
      <HowItWorks />
    </div>
  )
}