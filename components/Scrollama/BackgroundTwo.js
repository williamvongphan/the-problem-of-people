// Background 1 for scrollytelling. This is the first background that is shown. It is an animation of the famous
// website that contains ChatGPT.

import React from 'react';
import {Text} from '@nextui-org/react';
import {useSpring, animated, useInView} from "@react-spring/web";

export default function BackgroundOne() {
	// Create a background that contains a series of modal that can be interacted with.
	return (
		<div className={"w-full h-full flex flex-col justify-center items-center bg-zinc-700 duration-300"} key={"b"}>
			<div className={"flex flex-col justify-start items-center w-full h-full"}>
				<div className={"flex flex-col justify-center items-center w-full h-3/4"}>
					<div className={"bg-gray-800 w-full p-8"}>
						<p className={"text-white text-l w-full"}><span className={"font-bold"}>User:</span> How can I find the
							answer to life, the universe, and everything?</p>
					</div>
					<div className={"bg-neutral-800 w-full p-8"}>
						<p className={"text-white text-l"}><span className={"font-bold"}>ChatGPT:</span> The answer to life, the
							universe, and everything is 42.</p>
					</div>
				</div>
			</div>
		</div>
	);
}