import React from "react";
import Org from "./org";

const Experience = () => {
	return (
		<div className="mx-auto w-[87vw] rounded-3xl border-[2px] border-[#E0EEEE] bg-[#FFFF] font-mainFont lg:w-[51vw]">
			<div className="px-6 py-5 lg:px-8 lg:py-7">
				<h1 className="font-500 text-xl text-[#101010] lg:text-3xl">
					Experience
				</h1>
				<div className="px-2 lg:px-3">
					<Org orgName="Meta" date="August, 2022 • Present" />
					<div className="mt-4 border-t-2 border-dashed border-[#C0C0C066]"></div>
					<Org orgName="Google" date="August, 2022 • Present" />
				</div>
			</div>
		</div>
	);
};

export default Experience;
