import React from 'react'
import LeaderBoard from './LeaderBoard'
import Hero from './Hero'
import PlantType from './PlantType'

import Testimonials from './Testimonials'
import OurImpact from './OurImpact'
const Home = () => {
  return (
    <div >
      <Hero/>
      <LeaderBoard/>
      {/* <PlantType/> */}
      <OurImpact/>
      <Testimonials/>
    </div>
  )
}
export default Home