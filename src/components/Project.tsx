import React from "react";
import SingleProject from "./SingleProject";

const Project = () => {
	return (
		<div className=" mx-auto flex w-[87vw] flex-col rounded-3xl border-[2px] border-[#E0EEEE] bg-[#FFFF] shadow lg:w-[51vw]">
			<h1 className="font-500 ml-4 mt-3 p-4 text-2xl text-[#101010] lg:text-3xl">
				Experience
			</h1>
			<div className="flex flex-wrap justify-around gap-3">
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
				<SingleProject />
			</div>
		</div>
	);
};

export default Project;
