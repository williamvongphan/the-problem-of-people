// Background 1 for scrollytelling. This is the first background that is shown. It is an animation of the famous
// website that contains ChatGPT.

import React from 'react';
import {Text} from '@nextui-org/react';
import {useSpring, animated, useInView} from "@react-spring/web";
import ChatGPTEntry from "../ChatGPTEntry";

export default function BackgroundOne() {
	// Create a background that contains a series of modal that can be interacted with.
	return (
		<div className={"w-full h-full flex flex-col justify-center items-center bg-zinc-700 duration-300"} key={"b"}>
			<div className={"flex flex-col justify-start items-center w-full h-full"}>
				<div className={"flex flex-col justify-start items-start w-full h-3/4"}>
					<ChatGPTEntry from={"user"}>
						<p className={"text-white text-lg"}>What is ChatGPT?</p>
					</ChatGPTEntry>
					<ChatGPTEntry from={"chatgpt"}>
						<p className={"text-white text-lg	"}>ChatGPT is a free AI chatbot that can talk to you about anything.</p>
					</ChatGPTEntry>
				</div>
				<div className={"flex flex-col justify-end items-start w-full h-1/4 p-4"}>
					<input type="text" className={"w-full h-12 bg-zinc-600 rounded-lg p-4 text-lg"} placeholder={"Type something here"} />
				</div>
			</div>
		</div>
	);
}