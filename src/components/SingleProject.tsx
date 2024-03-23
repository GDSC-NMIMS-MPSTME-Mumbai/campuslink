import React from "react";

const SingleProject = () => {
	return (
		<div
			className="bg-[#FFFFFF]; flex h-[70px] w-80 items-center justify-around gap-3 rounded-3xl border-2 border-solid  border-[#60606033] sm:w-64 md:w-48
		"
		>
			<div>
				<img src="images/Arrow.svg" alt="Arrow" className="w-8 p-1" />
			</div>
			<div>
				<h2 className="text-lg">Project X</h2>
				<sub>apps.apple.com</sub>
			</div>
			<div className="w-8 p-2">
				<a>
					<img src="images/Arrow.svg" alt="Arrow" />
				</a>
			</div>
		</div>
	);
};

export default SingleProject;
