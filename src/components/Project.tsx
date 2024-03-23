import React from "react";
import SingleProject from "./SingleProject";

const Project = () => {
	return (
		<div className="mx-auto flex w-[87vw] flex-col rounded-3xl border-[2px] border-[#E0EEEE] bg-[#FFFF] py-5 shadow lg:w-[51vw]">
			<h1 className="font-500 px-6 py-5 text-2xl text-[#101010] lg:px-8 lg:py-7 lg:text-3xl">
				Projects
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
