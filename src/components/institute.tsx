import React from "react";
interface InstituteProps {
	educational_institution: string;
	degree: string;
	date: string;
}
const Institute: React.FC<InstituteProps> = ({
	educational_institution,
	degree,
	date,
}) => {
	return (
		<div>
			
				<p className="pt-4 text-xl font-[400]">
					{educational_institution}
				</p>
				<p className="text-md font-[400] italic text-[#101010] lg:text-lg">
					{degree}
				</p>
				<p className="h-[1rem] self-center text-[0.89rem] text-[#606060] lg:text-[0.9rem] ">
					{date}
				</p>
			
		</div>
	);
};

export default Institute;
