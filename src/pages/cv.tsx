import React from "react";
import Education from "~/components/education";
import Experience from "~/components/experience";

const CV = () => {
	return (
		<div className="flex min-h-screen w-screen flex-col gap-5 bg-[#F4F4F4]">
			<Education />
			<Experience />
		</div>
	);
};

export default CV;
