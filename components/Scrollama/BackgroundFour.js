// Background 1 for scrollytelling. This is the first background that is shown. It is an animation of the famous
// website that contains ChatGPT.

import React from 'react';
import Atropos from 'atropos/react';
import Image from "next/image";

export default function BackgroundOne() {
	// Create a background that contains a series of modal that can be interacted with.
	return (
		<div className={"w-full h-screen flex flex-col justify-center items-center bg-zinc-700 duration-300"} key={"d"}>
			<Atropos className={"w-auto h-3/5 shadow-2xl rounded-2xl"}
							 shadowScale={1.05}>
				<Image data-atropos-offset="0" src={"/img/computer-with-eyes.png"}
						 alt={"A computer with eyes looking out towards a user, chat messages under it. Solid colors, digital art, Ultra HD, 4K"}
						 width={1080} height={1080} className={"w-auto h-full shadow-2xl rounded-2xl"}/>
			</Atropos>
			<p className={"text-white text-sm mt-4"}>A computer with eyes looking out towards a user, chat messages under it. Solid colors, digital art, Ultra HD, 4K</p>
		</div>
	);
}