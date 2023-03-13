// Background 1 for scrollytelling. This is the first background that is shown. It is an animation of the famous
// website that contains ChatGPT.

import React from 'react';
import {Text} from '@nextui-org/react';
import {useSpring, animated} from "@react-spring/web";
import InteractiveModal from "../InteractiveModal"
import InteractiveModalSeries from "../InteractiveModalSeries";
import {Inter} from "next/dist/compiled/@next/font/dist/google";
import Image from "next/image";

export default function BackgroundOne() {
	// Create a background that contains a series of modal that can be interacted with.
	return (
		<div className={"w-full h-full min-h-screen flex flex-col justify-center items-center bg-zinc-700 duration-300"}
				 key={"h"}>
			<div className={"w-3/4 h-fit flex flex-col justify-center items-center border-l-4 border-zinc-500"}>
				<p className={"mr-8 pl-8 text-neutral-500 text-lg"}>The quote touches on a crucial aspect of the development of artificial
					intelligence (AI). The &quot;I&quot; in AI refers not only to the self-awareness that AI may eventually possess but also
					to the decision-making ability that is associated with human consciousness.
					<br/>
					Currently, AI systems make decisions based on the algorithms and data that they have been programmed with, and
					they lack the capacity to think for themselves or make decisions based on their own values and morals.
					However, there is ongoing research and development in the field of AI to make it more sentient and capable of
					independent thought.
					<br/>
					When AI becomes sentient and able to think for itself, it will be essential to ensure that it aligns with
					human values and ethics. It is also crucial to recognize that AI will never be a complete substitute for real
					human-to-human interaction, but rather a tool to enhance and augment it.
					<br/>
					Overall, the quote highlights the potential of AI and the need to approach its development with caution and
					awareness of its capabilities and limitations.</p>
			</div>
		</div>
	);
}