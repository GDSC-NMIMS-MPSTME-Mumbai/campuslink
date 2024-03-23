import React from 'react'
import Position from './position'

interface OrgProps {
  orgName: string;
  date: string;
}

const Org: React.FC<OrgProps> = ({ orgName, date }) => {
  let position = "";
  return (
    <>
    <div>
        <div className="flex justify-between content-between py-3 font-mainFont">
            <h1 className="text-xl font-[400]">{orgName}</h1>
            <h2 className="text-[0.89rem] text-[#606060] h-[1rem] self-center lg:text-[0.9rem] ">{date}</h2>
        </div>
        <div className="flex flex-col gap-5 justify-center content-center my-2">
            <Position pos="Sub-Head • 1 yr 3 mos" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure repellat. Vel autem praesentium id, nobis quidem mollitia laborum perspiciatis, incidunt reiciendis odit accusantium laboriosam quos esse. Fugiat, eligendi rerum!" />
            <Position pos="Executive • 9 mos" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure repellat. Vel autem praesentium id, nobis quidem mollitia laborum perspiciatis, incidunt reiciendis odit accusantium laboriosam quos esse. Fugiat, eligendi rerum!" />
        </div>
        
    </div>
    </>
  )
}

export default Org