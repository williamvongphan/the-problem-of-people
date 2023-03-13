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
				 key={"i"}>
			<div className={"w-3/4 h-fit pl-8 flex flex-col justify-center items-center border-l-4 border-zinc-500"}>
				<p className={"mr-8 text-neutral-500 text-lg"}>The idea of AI becoming sentient and thinking for itself
					raises complex questions about how humans will interact with these advanced systems. It is possible that some
					people may begin to treat AI as equals or even form emotional connections with them.
					<br/>
					However, it is important to note that AI, even if it becomes sentient, will never be the same as a human
					being. AI will lack the physical and emotional experiences that shape human behavior and identity, and thus,
					it will not be truly human.
					<br/>
					As such, it is crucial that we maintain a clear understanding of what it means to be human and ensure that we
					do not conflate AI with humanity. While AI may become increasingly advanced, we must recognize that they are
					still machines created by humans and ultimately subject to human control and oversight.
					<br/>
					The emergence of sentient AI may also prompt us to re-evaluate our relationship with technology and how we use
					it to interact with the world around us. We must be mindful of the ways in which we integrate AI into our
					lives and ensure that it does not lead to the devaluation of human relationships or our sense of self.
					<br/>
					Overall, the development of sentient AI presents both exciting possibilities and complex ethical challenges
					that must be carefully considered and navigated as we move forward.</p>
			</div>
		</div>
	);
}