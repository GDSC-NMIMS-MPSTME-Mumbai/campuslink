import Image from "next/image";
import React from "react";
import { format, parseISO } from "date-fns";

interface PostProps {
	username: string;
	handle: string;
	time: string;
	content: string;
	imageUrl?: string;
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
		<div className="mx-auto mb-8 w-auto min-w-[600px] max-w-[600px] rounded-[30px] border-2 border-solid border-gray-200 bg-white font-sans">
			<div className="p-8 pb-2 pt-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<Image
							src={profilePicUrl}
							alt="Profile"
							width={40}
							height={40}
							className="rounded-full object-cover"
							priority
							quality={100}
						/>
						<div className="font-sans font-medium">
							<p>{username}</p>
							<p className="text-xs text-gray-400">@{handle}</p>
						</div>
					</div>
					<span className="font-sans text-xs text-gray-500">
						{formattedTime}
					</span>
				</div>

				<div className="mb-1 px-9 py-3">
					<p className="mt-3 line-clamp-5  font-sans text-black md:text-xs">
						{content}
					</p>

					{imageUrl && (
						<div className="relative mt-4 h-56 w-full py-3 sm:h-64 md:h-72">
							<Image
								src={imageUrl}
								alt="Post"
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
					)}

					<div className="mt-6 flex items-center justify-between">
						<button className="flex items-center text-black transition duration-300 hover:text-red-600">
							<Image
								src="/assets/icons/like.svg"
								alt="Like"
								className="size-4"
							/>
							<span className="ml-1">Like</span>
						</button>
						<button className="flex items-center text-black transition duration-300 hover:text-blue-600">
							<Image
								src="/assets/icons/chat.svg"
								alt="Comment"
								className="size-5"
							/>
							<span className="ml-1">Comment</span>
						</button>
						<button className="flex items-center text-black transition duration-300 hover:text-green-600">
							<Image
								src="/assets/icons/bookmark.svg"
								alt="Save"
								className="size-4"
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
