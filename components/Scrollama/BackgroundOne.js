// Background 1 for scrollytelling. This is the first background that is shown. It is an animation of the famous
// website that contains ChatGPT.

import React from 'react';
import { Text } from '@nextui-org/react';
import { useSpring, animated } from "@react-spring/web";
import InteractiveModal from "../InteractiveModal"
import InteractiveModalSeries from "../InteractiveModalSeries";
import {Inter} from "next/dist/compiled/@next/font/dist/google";

export default function BackgroundOne() {
	// Create a background that contains a series of modal that can be interacted with.
	return (
		<div className={"w-full h-screen flex flex-col justify-center items-center bg-zinc-700 duration-300"} key={"a"}>
			<InteractiveModalSeries
				modals={[
					<InteractiveModal
						title={"This is a free research preview"}
						box1={"Our goal is to get external feedback in order to improve our systems and make them safer."}
						box1Emoji={"🔬"}
						box2={"While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice."}
						box2Emoji={"🚨"}
						key={"1"}
					/>,
					<InteractiveModal
						title={"How we collect data"}
						box1={"Conversations may be reviewed by our AI trainers to improve our systems."}
						box1Emoji={"🦾"}
						box2={"Please don't share any sensitive information in your conversations."}
						box2Emoji={"🔐"}
						key={"2"}
					/>,
					<InteractiveModal
						title={"We'd love your feedback!"}
						box1={"This system is optimized for dialogue. Let us know if a particular response was good or unhelpful."}
						box1Emoji={"👍"}
						box2={"Share your feedback in our Discord server."}
						box2Emoji={"💬"}
						key={"3"}
					/>
				]}
			/>
		</div>
	);
}