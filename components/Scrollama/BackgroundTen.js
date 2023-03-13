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
				 key={"j"}>
			<div className={"w-3/4 h-fit flex flex-col justify-center items-center border-l-4 border-zinc-500 pl-8"}>
				<p className={"mr-8 pl-8 text-neutral-500 text-lg"}>It is true that the development of AI has the potential to disrupt existing systems of roles and hierarchies. Conversational models and other AI systems could give everyone access to knowledge and abilities that were previously only available to a privileged few, potentially creating a more equitable distribution of resources and opportunities.
					<br/>
					However, this disruption could also lead to new forms of bad faith, such as the use of AI systems to manipulate or deceive people. AI systems could be used to spread disinformation or create fake identities, making it difficult to distinguish between what is real and what is not.
					<br/>
					Furthermore, the potential for AI to uproot existing power structures raises questions about who will control and govern these systems. As AI becomes more advanced and capable of making decisions autonomously, it is crucial that we ensure that these systems are developed and governed in a way that is transparent and accountable.
					<br/>
					Overall, while the development of AI offers many exciting possibilities, it is essential to consider the potential risks and challenges that come with it. We must be vigilant in ensuring that AI is developed and used in a way that benefits society as a whole and does not perpetuate existing inequalities or create new forms of harm.</p>
			</div>
		</div>
	);
}