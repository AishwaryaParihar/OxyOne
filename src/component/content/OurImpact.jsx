import React from 'react'
import impact01 from '../../assets/impact01.png'
import impact02 from '../../assets/impact02.png'
import impact03 from '../../assets/impact03.png'
import impact04 from '../../assets/impact04.png'
import './OurImpact.css'

const OurImpact = () => {
  return (
    <>
    <div className='text-4xl font-bold justify-center flex'>OUR IMPACT</div>
    <div className=' font-semibold justify-center flex'>Making a Greener Tomorrow
    </div>

   <div className="my-12">
   <div className='flex center justify-center'>
    <div className="img-container">
      <img src={impact01} alt="" className='img-class' />
      {/* <span>At OxyVan, we believe that small actions can lead to big changes. Through our tree planting initiative, we are not only adding greenery to our planet but also creating a lasting impact on nature and our communities. Here's how:
      </span> */}
    </div>
    <div className="img-container">
      <img src={impact02} alt="" className='img-class' />
    </div>
   </div>

   <div className='flex justify-center'>
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