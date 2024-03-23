import React from 'react';

interface OrgProps {
  pos: string;
  description: string;
}

const Position: React.FC<OrgProps> = ({pos,description}) => {
  return (
    <>
    <div className="flex gap-5">
      <img src="images/Exp_arrow.svg" alt="Arrow" className="h-12 md:w-16 hidden md:block" />
      <div className="flex flex-col">
        <div className="flex gap-3">
          <img src="images/Arrow.svg" alt="" className='h-4 md:hidden '/>
          <h1 className="text-[#101010] italic text-sm lg:text-lg font-[400]">{pos}</h1>
        </div>
        <p className="text-[#606060] text-[0.8rem] leading-relaxed tracking-wide  lg:text-[0.9rem] text-justify">{description}</p>
      </div>
    </div>
    </>
  )
}

export default Position