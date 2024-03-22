import React from 'react'
import Position from './position'

const Org = () => {
  return (
    <>
    <div>
        <div className="flex justify-between content-between py-3 font-mainFont">
            <h1 className="text-xl font-[400]">Meta</h1>
            <h2 className="text-[0.89rem] text-[#606060] h-[1rem] self-center lg:text-[0.9rem] ">August, 2022 • Present</h2>
        </div>
        <div className="flex flex-col gap-5 justify-center content-center my-2">
            <Position />
            <Position />
        </div>
        
    </div>
    </>
  )
}

export default Org