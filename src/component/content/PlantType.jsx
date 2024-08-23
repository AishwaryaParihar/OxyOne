import React from 'react'
import tree from "../../assets/jamun.jpg"
import tree1 from "../../assets/banyan.webp"
const PlantType = () => {
    return (
        <div className='w-full'>
            <div className="p-3">
                <div className="flex flex-cols-2 py-6">
                    <div className="w-1/2 text-center text-xs bg-slate-100 p-2 rounded-2xl">
                        <div className="flex "><span><img src={tree} alt="" className='w-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-lg text-primary font-semibold text-center">Jamun Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                    </div>
                    <div className="w-1/2 text-center text-xs">
                        <div className="flex "><span><img src={tree1} alt="" className='w-14 h-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-lg text-primary font-semibold text-center">Jamun Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                    </div>
                </div>
                <div className="flex flex-cols-2">
                    <div className="w-1/2 text-center text-xs">
                        <div className="flex "><span><img src={tree} alt="" className='w-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-lg text-primary font-semibold text-center">Jamun Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                    </div>
                    <div className="w-1/2 text-center text-xs">
                        <div className="flex "><span><img src={tree1} alt="" className='w-14 h-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-lg text-primary font-semibold text-center">Jamun Tree</div>
                                <div className='text-sm'>Description</div>
                            </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantType