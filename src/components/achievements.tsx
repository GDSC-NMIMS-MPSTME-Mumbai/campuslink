import React from "react";
import Certificates from "./certificates";
const Achievements = () => {
	const imageArray = [
		"images/certificate.png",
		"images/certificate.png",
		"images/certificate.png",
	];

	// made up variables for the moment

	const name = "Google UX Foundations";
	const website = "google.com";
	const description =
		"This certificate covers the fundamental principles of UX design, including user research, wireframing, prototyping, and usability testing.";
	return (
		<div className="mx-auto flex w-[87vw] justify-between rounded-3xl border-[2px] border-[#E0EEEE] bg-[#FFFF] font-mainFont lg:w-[51vw]">
			<div className="px-6 py-10 lg:px-8 lg:py-7">
				<p className="font-500 text-2xl text-[#101010] lg:text-3xl">
					Achievements
				</p>
				<div className="px-2 lg:px-3">
					<Certificates
						name={name}
						website={website}
						description={description}
						image={imageArray}
					/>
					<div className="mt-4 border-t-2 border-dashed border-[#C0C0C066]"></div>
					<Certificates
						name={name}
						website={website}
						description={description}
						image={imageArray}
					/>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
