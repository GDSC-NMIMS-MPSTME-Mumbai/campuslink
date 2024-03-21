// pages/testPost.tsx
// File to test the post component

import Head from "next/head";
import Post from "../components/Post";

const HomePage = () => {
	const currentIsoDate = new Date().toISOString();

	const samplePost = {
		username: "John Appleseed",
		handle: "john_appleseed",
		time: currentIsoDate, // ISO 8601 format
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates unde iure voluptatibus eveniet, deleniti, itaque eos voluptatum quidem, asperiores error id! Aperiam mollitia beatae, voluptatem quo repellendus itaque blanditiis, voluptatibus odit consequatur quis quia natus, aliquid est iusto tempore corporis nemo in aut quae! Quam perspiciatis officia praesentium ratione et?",
		imageUrl:
			"https://s3-alpha-sig.figma.com/img/0da2/2311/b06175d1862d412721b1452f0eafd630?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NbilowWOVn~1zR32gI634L0iG7Kjp8OO2gfGhN7bIyDfzdAc8tVYfEMFuxzmelo4hXQ9wCl7H8WuzuGWY7i5fOZoEKr7RShiIZNTTzAO0on22YyPm-YT8GWL2eRBND~yKwJDKlCImHHe-tDurlz72UuJ-9zhiZT9m0EnIhVQgx7plD3tRwn6gdeRi~j3i-Lo~-BMw6xyXEJcTSayX8JpTLO0HfLaPb30KmAvlzkY2DKJGsuolmlirxgjQ~7Z101GWzdOLIEK6pd8GA8mLR8USw0O8dzWVctDoPaaGYILpLcaCMe8GtOofAZ3n24izM08N8VqWzRM8DbopsBcmHjDZA__",
		profilePicUrl:
			"https://s3-alpha-sig.figma.com/img/7240/bbee/0a9d2be7a41546df9cdf8ecc52319682?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYmZjfkKYMRFBxHlnl62Cjavk2IGIT0pJ4JfEdnfDFPwYjKnIXW7i-qw6xkAuo3Fn~yb-ejzapta9cA8ojb3LsIuNOjq96GkHoshDU6ATnrXmxyLvRPYxi4xZZ9L5bRc6T~LAQqEipa5~UJiY5pJB1ceyjHa8CP2tiM4VM8ThCldFCoPeu0gjkKezvfmvkENyzP8CdWKsVeeGWCH5YzvAyhEC9AkqQVPIkTOPseTebSCrGwKrxAmMmU5MyrwIzypm5lVxV7wPPacVuHN~WGv~rlcNb4b2ZN8rbVZq0S5cHUr1lkO5qFWTCdSbg7xmXFrSnsgY1GWiDwlPGIIIN4z3w__",
	};
	const samplePost2 = {
		username: "John Appleseed",
		handle: "john_appleseed",
		time: currentIsoDate, // ISO 8601 format
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates unde iure voluptatibus eveniet, deleniti, itaque eos voluptatum quidem, asperiores error id! Aperiam mollitia beatae, voluptatem quo repellendus itaque blanditiis, voluptatibus odit consequatur quis quia natus, aliquid est iusto tempore corporis nemo in aut quae! Quam perspiciatis officia praesentium ratione et?",
		profilePicUrl:
			"https://s3-alpha-sig.figma.com/img/7240/bbee/0a9d2be7a41546df9cdf8ecc52319682?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYmZjfkKYMRFBxHlnl62Cjavk2IGIT0pJ4JfEdnfDFPwYjKnIXW7i-qw6xkAuo3Fn~yb-ejzapta9cA8ojb3LsIuNOjq96GkHoshDU6ATnrXmxyLvRPYxi4xZZ9L5bRc6T~LAQqEipa5~UJiY5pJB1ceyjHa8CP2tiM4VM8ThCldFCoPeu0gjkKezvfmvkENyzP8CdWKsVeeGWCH5YzvAyhEC9AkqQVPIkTOPseTebSCrGwKrxAmMmU5MyrwIzypm5lVxV7wPPacVuHN~WGv~rlcNb4b2ZN8rbVZq0S5cHUr1lkO5qFWTCdSbg7xmXFrSnsgY1GWiDwlPGIIIN4z3w__",
	};

	return (
		<>
			<Head>
				<title>Post Showcase</title>
			</Head>

			<main>
				<Post {...samplePost} />
				<Post {...samplePost2} />
			</main>
		</>
	);
};

export default HomePage;
