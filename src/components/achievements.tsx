import React from "react";

const Achievements = () => {
	return (
		<div className="mx-auto flex w-[87vw] justify-between rounded-3xl border-[2px] border-[#E0EEEE] bg-[#FFFF] font-mainFont lg:w-[51vw]">
			<div className="px-6 py-10 lg:px-8 lg:py-7">
				<p className="font-500 text-2xl text-[#101010] lg:text-3xl">
					Achievements
				</p>
				<div>
					<p className="pt-4 text-xl font-[400]">
						Google UX Foundations
					</p>
					<p className="h-[1rem] self-center text-[0.89rem] text-[#606060] lg:text-[0.9rem] ">
						google.com
					</p>
					<div className="flex">
						<img className="my-3" src="images/Arrow.png" />
						<p className="mt-5 flex self-center">
							This certificate covers the fundamental principles
							of UX design, including user research, wireframing,
							prototyping, and usability testing.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
