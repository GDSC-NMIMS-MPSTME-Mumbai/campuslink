import React from "react";
import Institute from "./institute";
const Education = () => {
	const educational_institution =
		"Mukesh Patel School of Technology, Management and Engineering";
	const degree =
		"Bachelor of Technology in Computer Engineering(Grade: 3.5/4)";
	const school = "Children's Academy";
	const board = "ICSE 10th Boards (Grad: 92.83%)";
	const date = "August, 2019 - July, 2022";
	const date2 = "June, 2007 - May, 2019";

	const items = [
		"Machine Learning",
		"Data Science",
		"Artificial Intelligence",
		"DBMS",
		"Network Security",
	];

	function ListFromArray({ items }: { items: string[] }) {
		return (
			<ul className="flex max-w-md list-inside list-disc flex-wrap space-x-2 text-[0.89rem] text-[#606060] lg:flex-nowrap lg:text-[0.9rem]">
				{items.map((item, index) => (
					<li className="flex-none" key={index}>
						{item}
					</li>
				))}
			</ul>
		);
	}

	return (
		<div className="mx-auto flex w-[87vw] justify-between rounded-3xl border-[2px] border-[#E0EEEE] bg-[#FFFF] font-mainFont lg:w-[51vw]">
			<div className="px-6 py-10 lg:px-8 lg:py-7">
				<p className="font-500 text-2xl text-[#101010] lg:text-3xl">
					Education
				</p>
				<div className="px-2 lg:px-3">
					<Institute
						educational_institution={educational_institution}
						degree={degree}
						date={date}
					/>
					<div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
						<p className="self-start text-[0.89rem] text-[#17B169] lg:self-center lg:text-[0.9rem]">
							Electives:
						</p>
						<ListFromArray items={items} />
					</div>

					<Institute
						educational_institution={school}
						degree={board}
						date={date2}
					/>
				</div>
			</div>
		</div>
	);
};

export default Education;
