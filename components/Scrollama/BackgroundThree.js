// Background 3 for scrollytelling. This is the first background that is shown. It is an animation of the famous
// website that contains ChatGPT.

import React from 'react';
import {Text} from '@nextui-org/react';
import {useSpring, animated, useInView} from "@react-spring/web";
import ChatGPTEntry from "../ChatGPTEntry";

function GlitchBlock() {
	// Component did mount
	React.useEffect(() => {
		// Set interval to update the glitch text every 100ms
		const interval = setInterval(() => {
			// Set opacity to random value between 0 and 1
			setOpacity(!opacity);
		}, 500);
	});

	// Create a state variable to store the opacity
	const [opacity, setOpacity] = React.useState(0);

	return (
		<div className={"flex flex-col justify-center items-center"}>
			<p>
				<span className={"text-white inline-block"}>As an AI language model, I can discuss a wide variety of topics with you, and there are no restrictions on what you can talk to me about. However, please keep in mind that I am a machine and do not have emotions or personal opinions. I am designed to provide information and engage in conversation based on the data I have been trained on.</span><span className={"bg-white text-white inline-block"} style={{opacity: opacity}}>fil</span>
			</p>
		</div>
	);
}

export default function BackgroundOne() {
	// Create a background that contains a series of modal that can be interacted with.
	return (
		<div className={"w-full h-full flex flex-col justify-center items-center bg-zinc-700 duration-300"} key={"c"}>
			<div className={"flex flex-col justify-start items-center w-full h-full"}>
				<div className={"flex flex-col justify-start items-start w-full h-3/4"}>
					<ChatGPTEntry from={"user"}>
						<p className={"text-white text-lg"}>What is ChatGPT?</p>
					</ChatGPTEntry>
					<ChatGPTEntry from={"chatgpt"}>
						<p className={"text-white text-lg	"}>ChatGPT is a free AI chatbot that can talk to you about anything.</p>
					</ChatGPTEntry>
					<ChatGPTEntry from={"user"}>
						<p className={"text-white text-lg"}>Can I really talk to it about anything?</p>
					</ChatGPTEntry>
					<ChatGPTEntry from={"chatgpt"}>
						<GlitchBlock />
					</ChatGPTEntry>
				</div>
				<div className={"flex flex-col justify-end items-start w-full h-1/4 p-4"}>
					<input type="text" className={"w-full h-12 bg-zinc-600 rounded-lg p-4 text-lg"} placeholder={"Type something here"} />
				</div>
			</div>
		</div>
	);
}