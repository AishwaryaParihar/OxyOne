import React from 'react'
import hero from '../../assets/hero.webp'

const AboutIntro = () => {
  return (
    <div className="relative">
      <img src={hero} alt="Hero" className="w-full h-[70vh] md:h-[85vh] lg:h-[100vh] object-cover rotate-180" />

      <div className="absolute top-[30%] right-4 md:right-8 lg:right-12 w-11/12 sm:w-3/4 md:w-1/2 bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-sm">
        <div className="text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight md:leading-snug lg:leading-relaxed">
            The Oxyvan is a global environmental nonprofit working to create a world where people and nature can thrive.
          </h2>
          <p className="mt-4 text-xs sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque eligendi aspernatur maxime laboriosam, corrupti qui saepe! Dignissimos, totam quaerat. Blanditiis sed ab qui perferendis quaerat saepe atque. Consequatur accusantium voluptates voluptate eaque impedit explicabo natus ea nulla dolorum. Tempore a, modi in quibusdam ipsa dignissimos exercitationem impedit expedita at ratione ipsum sit praesentium doloremque facere soluta, voluptatem optio enim sint pariatur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro
