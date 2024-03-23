import React from "react";

interface certificatesProps {
	name: string;
	website: string;
	description: string;
	image: Array<string>;
}

const Certificates: React.FC<certificatesProps> = ({
	name,
	website,
	description,
	image,
}) => {
	return (
		<div className="text-[0.8rem] lg:text-[1rem]">
			<p className="pt-4 text-xl font-[400]">{name}</p>
			<p className="h-[1rem] self-center text-[0.89rem] text-[#606060] lg:text-[0.9rem] ">
				{website}
			</p>
			<div className="flex gap-5">
				<img className="my-5" src="images/Exp_arrow.svg" />
				<p className="flex self-center py-5 ">{description}</p>
			</div>
			<div className="flex flex-col gap-5">
				{image.map((img, index) => (
					<div className="flex flex-row gap-5" key={index}>
						<img
							src={img}
							alt={`Image ${index}`}
							className="rounded-2xl border-2 border-[#C0C0C066]"
						/>
						<p className="self-center">
							Certificate Number {index + 1}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Certificates;
