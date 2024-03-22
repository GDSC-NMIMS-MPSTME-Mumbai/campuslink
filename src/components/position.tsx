import React from 'react';

const Position = () => {
  return (
    <>
    <div className="flex gap-5">
      <img src="images/Arrow.svg" alt="Arrow" className="h-12 md:w-16 hidden md:block" />
      <div className="flex flex-col">
        <div className="flex gap-3">
          <img src="images/Arrow.svg" alt="" className='h-5 md:hidden '/>
          <h1 className="text-[#101010] italic text-md lg:text-lg font-[400]">Sub-Head • 1 yr 3 mos</h1>
        </div>
        <p className="text-[#606060] text-[0.89rem] lg:text-[0.9rem] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure repellat. Vel autem praesentium id, nobis quidem mollitia laborum perspiciatis, incidunt reiciendis odit accusantium laboriosam quos esse. Fugiat, eligendi rerum!</p>
      </div>
    </div>
    </>
  )
}

export default Position