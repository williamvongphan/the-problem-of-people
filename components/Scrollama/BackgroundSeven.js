// Background 1 for scrollytelling. This is the first background that is shown. It is an animation of the famous
// website that contains ChatGPT.

import React from 'react';
import Image from "next/image";

export default function BackgroundOne() {
	// Create a background that contains a series of modal that can be interacted with.
	return (
		<div className={"w-full h-full min-h-screen flex flex-col justify-center items-center bg-zinc-700 duration-300"} key={"g"}>
			<Image src={"/img/artificial-intelligence-look.png"}
						 alt={"Machine intelligence projecting a \"look\" out into the world. 4K Digital Art Vibrant Colors"}
						 width={1080} height={1080} className={"w-auto h-3/5 shadow-2xl rounded-2xl"}/>
			<p className={"text-white text-sm mt-4"}>Machine intelligence projecting a &quot;look&quot; out into the world. 4K Digital Art Vibrant Colors</p>
		</div>
	);
}