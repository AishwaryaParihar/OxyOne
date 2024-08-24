import React from 'react'
import impact01 from '../../assets/impact01.png'
import impact02 from '../../assets/impact02.png'
import impact03 from '../../assets/impact03.png'
import impact04 from '../../assets/impact04.png'
import './OurImpact.css'

const OurImpact = () => {
  return (
    <>
   <div className="">
   <div className='flex'>
    <div className="img-container">
      <img src={impact01} alt="" className='img-class' />
    </div>
    <div className="img-container">
      <img src={impact02} alt="" className='img-class' />
    </div>
   </div>

   <div className='flex'>
    <div className="img-container">
      <img src={impact03} alt="" className='img-class' />
    </div>
    <div className="img-container">
      <img src={impact04} alt="" className='img-class' />
    </div>
   </div>
   </div>

    
    </>
  )
}

export default OurImpact