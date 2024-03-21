import Image from "next/image";
import React from "react";
import { format, parseISO } from "date-fns";

interface PostProps {
	username: string;
	handle: string;
	time: string;
	content: string;
	imageUrl?: string; // optional
	profilePicUrl: string;
}

const Post: React.FC<PostProps> = ({
	username,
	handle,
	time,
	content,
	imageUrl,
	profilePicUrl,
}) => {
	// Formatting the time string to a more human-readable format
	const formattedTime = format(parseISO(time), "do MMM, yyyy • p");

	return (
		<div className="mx-auto mb-8 w-full min-w-0 max-w-full rounded-2xl border-2 border-solid border-gray-200 bg-white sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
			<div className="p-4 sm:p-6 md:p-8">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3 sm:space-x-4">
						<Image
							src={profilePicUrl}
							alt="Profile"
							width={30}
							height={30}
							className="rounded-full object-cover sm:h-10 sm:w-10"
							quality={100}
						/>
						<div>
							<p className="text-sm font-medium sm:text-base">
								{username}
							</p>
							<p className="text-xs text-gray-400">@{handle}</p>
						</div>
					</div>
					<span className="date-text text-xs text-gray-500 sm:text-sm">
						{formattedTime}
					</span>
				</div>

				<div className="mt-3 px-10 sm:mt-4">
					<p className="line-clamp-5 text-xs sm:text-sm md:text-base">
						{content}
					</p>

					{imageUrl && (
						<div className="relative mt-4 h-32 w-full sm:mt-6 sm:h-48 md:h-64">
							<Image
								src={imageUrl}
								alt="Post"
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
					)}

					<div className="mt-4 flex items-center justify-between text-xs sm:mt-6 sm:text-sm">
						<button className="flex items-center text-black transition duration-300 hover:text-red-600">
							<Image
								src="/assets/icons/like.svg"
								alt="Like"
								width={20}
								height={20}
							/>
							<span className="ml-1">Like</span>
						</button>
						<button className="flex items-center text-black transition duration-300 hover:text-blue-600">
							<Image
								src="/assets/icons/chat.svg"
								alt="Comment"
								width={25}
								height={25}
							/>
							<span className="ml-1">Comment</span>
						</button>
						<button className="flex items-center text-black transition duration-300 hover:text-green-600">
							<Image
								src="/assets/icons/bookmark.svg"
								alt="Save"
								width={15}
								height={15}
							/>
							<span className="ml-1">Save</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
