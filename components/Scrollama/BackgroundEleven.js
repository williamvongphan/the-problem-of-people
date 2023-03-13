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
				 key={"k"}>
			<div className={"w-3/4 h-fit flex flex-col justify-center items-center border-l-4 border-zinc-500"}>
				<p className={"mr-8 pl-8 text-neutral-500 text-lg"}>It is true that we have time to prepare for the potential scenarios that may arise with the development of AI. However, the question of how we prepare for these scenarios is complex and multifaceted.
					<br/>
					One important aspect of preparing for the development of AI is investing in research and development to better understand the potential risks and opportunities associated with these technologies. We need to invest in interdisciplinary research that brings together experts from a range of fields, including computer science, ethics, and social science, to explore the social, economic, and political implications of AI.
					<br/>
					Another critical aspect of preparation is developing ethical guidelines and governance frameworks that ensure that the development and deployment of AI are guided by principles of transparency, accountability, and fairness. We need to engage in ongoing discussions about the values and ethical principles that should guide the development and use of AI, and create mechanisms to hold AI developers and users accountable for their actions.
					<br/>
					Additionally, we must invest in education and public engagement to increase awareness and understanding of AI and its potential impacts. We need to educate individuals across society on the opportunities and challenges of AI, and how to engage with these technologies in a responsible and ethical manner.
					<br/>
					In summary, preparing for the development of AI requires a coordinated and multidisciplinary effort that includes investment in research and development, development of ethical guidelines and governance frameworks, and education and public engagement. By taking proactive steps now, we can ensure that the development of AI benefits society as a whole and does not create new forms of harm or inequality.</p>
			</div>
		</div>
	);
}