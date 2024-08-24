import React from 'react'
import LeaderBoard from './LeaderBoard'
import Hero from './Hero'
import PlantType from './PlantType'

import Testimonials from './Testimonials'
const Home = () => {
  return (
    <div >
      <Hero/>
      <LeaderBoard/>
      <PlantType/>
      
      <Testimonials/>
    </div>
  )
}
export default Home