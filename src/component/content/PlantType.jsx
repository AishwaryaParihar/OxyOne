import React from 'react'
import tree from "../../assets/jamun.jpg"
import tree1 from "../../assets/banyan.webp"
const PlantType = () => {
    const plants = [
        { image: tree, name: "Jamun Tree", desccription:"Description"},
        { image: tree, name: "Jamun Tree", desccription:"Description"},
        { image: tree, name: "Jamun Tree", desccription:"Description"},
        { image: tree, name: "Jamun Tree", desccription:"Description"},
        { image: tree, name: "Jamun Tree", desccription:"Description"},
        { image: tree, name: "Jamun Tree", desccription:"Description"},
       
    ]
    return (
        <div className='w-full'>
            <div className="p-3">
                <h3 className='text-2xl font-bold text-center'>Nature's <span className="text-primary">Oxygen Hero</span>es</h3>
                <p className="text-sm text text-center font-medium  mt-2">Discover the magnificent plants that contribute the most to our environment by producing abundant oxygen, essential for life on Earth.</p>

             {
                plants.map((plant,index)=>{
                    return(
                        <div className="flex flex-cols-2 py-1 mt-4" key={index}>
                    <div className="w-1/2 text-center text-xs bg-slate-100 hover:bg-green-100 p-2 rounded-2xl mr-2">
                        <div className="flex "><span><img src={plant.image} alt="" className='w-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">{plant.name}</div>
                                <div className='text-xs'>{plant.desccription}</div>
                            </span></div>
                    </div>
                    <div className="w-1/2 text-center text-xs bg-slate-100 p-2 rounded-2xl">
                        <div className="flex "><span><img src={tree1} alt="" className='w-14 h-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-xs'>Description</div>
                            </span></div>
                    </div>
                </div>
                    )
                })
             }
{/* 
                <div className="flex flex-cols-2 py-1 mt-4">
                    <div className="w-1/2 text-center text-xs bg-slate-100 hover:bg-green-100 p-2 rounded-2xl mr-2">
                        <div className="flex "><span><img src={tree} alt="" className='w-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">Jamun Tree</div>
                                <div className='text-xs'>Description</div>
                            </span></div>
                    </div>
                    <div className="w-1/2 text-center text-xs bg-slate-100 p-2 rounded-2xl">
                        <div className="flex "><span><img src={tree1} alt="" className='w-14 h-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-xs'>Description</div>
                            </span></div>
                    </div>
                </div>
                <div className="flex flex-cols-2 py-1">
                    <div className="w-1/2 text-center text-xs bg-slate-100 hover:bg-green-100 p-2 rounded-2xl mr-2">
                        <div className="flex "><span><img src={tree} alt="" className='w-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">Jamun Tree</div>
                                <div className='text-xs'>Description</div>
                            </span></div>
                    </div>
                    <div className="w-1/2 text-center text-xs bg-slate-100 p-2 rounded-2xl">
                        <div className="flex "><span><img src={tree1} alt="" className='w-14 h-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-xs'>Description</div>
                            </span></div>
                    </div>
                </div>
                <div className="flex flex-cols-2 py-1">
                    <div className="w-1/2 text-center text-xs bg-slate-100 hover:bg-green-100 p-2 rounded-2xl mr-2">
                        <div className="flex "><span><img src={tree} alt="" className='w-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">Jamun Tree</div>
                                <div className='text-xs'>Description</div>
                            </span></div>
                    </div>
                    <div className="w-1/2 text-center text-xs bg-slate-100 p-2 rounded-2xl">
                        <div className="flex "><span><img src={tree1} alt="" className='w-14 h-14 rounded-full ' /></span>
                            <span className='ps-3'>  <div className="text-sm text-primary font-semibold text-center">Banyan Tree</div>
                                <div className='text-xs'>Description</div>
                            </span></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PlantType