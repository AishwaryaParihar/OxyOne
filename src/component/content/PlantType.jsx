import React from 'react'
import tree from "../../assets/jamun.jpg"
import tree1 from "../../assets/banyan.webp"
import earth from "../../assets/earth.png"
const PlantType = () => {
    const plants = [
        { image: tree, name: "Jamun Tree", desccription: "Description" },
        { image: tree, name: "Jamun Tree", desccription: "Description" },
        { image: tree, name: "Jamun Tree", desccription: "Description" },
        { image: tree, name: "Jamun Tree", desccription: "Description" },
        { image: tree, name: "Jamun Tree", desccription: "Description" },
        { image: tree, name: "Jamun Tree", desccription: "Description" },

    ]
    return (
        <div className='w-full'>
            <div className="mt-10 p-4 md:px-6 lg:px-16">
                <h3 className='text-2xl md:text-4xl font-bold text-center'>Nature's <span className="text-primary">Oxygen Hero</span>es</h3>
                <p className="text-md text text-center font-medium  mt-2 py-4">Discover the magnificent plants that contribute the most to our environment by producing abundant oxygen, essential for life on Earth.</p>

                <div className="flex flex-cols-2 py-1 mt-4">
                    <div className="w-1/2 text-center text-xs  p-2 rounded-2xl mr-2">
                        <div className="flex "><span><img src={earth} alt="" className='w-full rounded-2xl' /></span>

                        </div>
                    </div>
                    <div className="w-1/2 text-center text-xs  p-2 rounded-2xl mt-12">
                        <div className="flex "><span><img src={tree1} alt="" className='w-24 h-24 rounded-full ' /></span>
                            <span className='ps-3 pt-4'>  <div className="text-lg text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                        <div className="flex py-1 ms-20"><span><img src={tree1} alt="" className='w-24 h-24 rounded-full ' /></span>
                            <span className='ps-3 pt-4'>  <div className="text-lg text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                        <div className="flex py-1 ms-32"><span><img src={tree1} alt="" className='w-24 h-24 rounded-full ' /></span>
                            <span className='ps-3 pt-4'>  <div className="text-lg text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                        <div className="flex py-1 ms-20"><span><img src={tree1} alt="" className='w-24 h-24 rounded-full ' /></span>
                            <span className='ps-3 pt-4'>  <div className="text-lg text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                        <div className="flex py-1"><span><img src={tree1} alt="" className='w-24 h-24 rounded-full ' /></span>
                            <span className='ps-3 pt-4'>  <div className="text-lg text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlantType