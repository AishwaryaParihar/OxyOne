import React from 'react'
import tree from "../../assets/jamun.jpg"
import tree1 from "../../assets/banyan.webp"
import earth from "../../assets/earth.png"
const PlantType = () => {

    return (
        <div className='w-full'>
            <div className="mt-10 p-4 px-2 md:px-6 lg:px-16">
                <h3 className='text-2xl md:text-4xl font-bold text-center'>Nature's <span className="text-primary">Oxygen Hero</span>es</h3>
                <p className="text-md text text-center font-medium  mt-2 py-4">Discover the magnificent plants that contribute the most to our environment by producing abundant oxygen, essential for life on Earth.</p>

                <div className="flex flex-col lg:flex-row py-1 mt-4">
                    <div className="w-full lg:w-1/2 text-center p-2">
                        <img src={earth} alt="Earth" className='w-full' />
                    </div>
                    <div className="w-full lg:w-1/2 text-xs p-2 rounded-2xl md:mt-12">
                        <div className="flex items-start">
                            <span className="flex-shrink-0">
                                <img src={tree1} alt="Banyan Tree" className='w-24 h-24 rounded-full object-cover' />
                            </span>
                            <span className='ps-3 '>
                                <div className="text-lg text-primary font-semibold">Banyan Tree</div>
                                <div className='text-sm'>The Banyan tree is a large, majestic tree known for its expansive canopy and complex aerial roots that descend from its branches to form additional trunks.</div>
                            </span>
                        </div>

                        <div className="flex py-1 ms-0 sm:ms-20 items-start">
                            <span className="flex-shrink-0">
                                <img src={tree1} alt="Banyan Tree" className='w-24 h-24 rounded-full object-cover' />
                            </span>
                            <span className='ps-3 '>
                                <div className="text-lg text-primary font-semibold">Banyan Tree</div>
                                <div className='text-sm'>
                                    The Banyan tree is a large, majestic tree known for its expansive canopy and complex aerial roots that descend from its branches to form additional trunks.
                                </div>
                            </span>
                        </div>

                        <div className="flex py-1 ms-0 sm:ms-32 items-start">
                            <span className="flex-shrink-0">
                                <img src={tree1} alt="Banyan Tree" className='w-24 h-24 rounded-full object-cover' />
                            </span>
                            <span className='ps-3 '>
                                <div className="text-lg text-primary font-semibold">Banyan Tree</div>
                                <div className='text-sm'>The Banyan tree is a large, majestic tree known for its expansive canopy and complex aerial roots that descend from its branches to form additional trunks.</div>
                            </span>
                        </div>

                        <div className="flex py-1 ms-0 sm:ms-20 items-start">
                            <span className="flex-shrink-0">
                                <img src={tree1} alt="Banyan Tree" className='w-24 h-24 rounded-full object-cover' />
                            </span>
                            <span className='ps-3 '>
                                <div className="text-lg text-primary font-semibold">Banyan Tree</div>
                                <div className='text-sm'>The Banyan tree is a large, majestic tree known for its expansive canopy and complex aerial roots that descend from its branches to form additional trunks.</div>
                            </span>
                        </div>

                        <div className="flex py-1 items-start">
                            <span className="flex-shrink-0">
                                <img src={tree1} alt="Banyan Tree" className='w-24 h-24 rounded-full object-cover' />
                            </span>
                            <span className='ps-3 '>
                                <div className="text-lg text-primary font-semibold">Banyan Tree</div>
                                <div className='text-sm'>The Banyan tree is a large, majestic tree known for its expansive canopy and complex aerial roots that descend from its branches to form additional trunks.</div>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PlantType