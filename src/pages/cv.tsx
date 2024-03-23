import React from "react";
import Project from "~/components/Project";
import Education from "~/components/education";
import Experience from "~/components/experience";
import Achievements from "~/components/achievements";
const CV = () => {
	return (
		<div className="flex min-h-screen w-screen flex-col gap-5 bg-[#F4F4F4]">
			<Education />
			<Experience />
			<Project />
			<Achievements/>
		</div>
	);
};

export default CV;
