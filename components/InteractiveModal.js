// Interactive Modal element that aims to reproduce the modals presented to new users in ChatGPT. The modal contains
// a heading that says ChatGPT in very large text (always), a title that is passed in as a prop (always) in large text,
// a box1 and box2 that contains text that is passed in as props (always), and box1Emoji and box2Emoji that are passed in as props
// and displayed to the left of box1 and box2 respectively. The modal also contains a button that can be pressed to close the modal.

import React from 'react';
import {Text} from '@nextui-org/react';

export default function InteractiveModal({className, title, box1, box2, box1Emoji, box2Emoji}) {
	// Create a card that will contain text for scrollytelling purposes. Assume tailwind.css is being used. All styling is
	// done as className rather than imports from files.
	return (
		<div className="flex flex-col p-4 w-full">
			<h1 className={"text-3xl font-bold text-white"}>ChatGPT</h1>
			<hr className="border-gray-500 w-full my-4"/>
			<h2 className={"text-lg font-bold text-white mb-2"}>{title}</h2>
			<div className="bg-[#2b2c2e] rounded-lg shadow-lg my-2">
				<div className={"flex flex-row justify-start p-4"}>
					<h3 className={"flex flex-col justify-center pr-6 pl-2"}>
						<div className={"text-2xl font-bold text-white"}>
							{box1Emoji}
						</div>
					</h3>
					<p className={"text-white"}>{box1}</p>
				</div>
			</div>
			<div className="bg-[#2b2c2e] rounded-lg shadow-lg my-2">
				<div className={"flex flex-row justify-start p-4"}>
					<h3 className={"flex flex-col justify-center pr-6 pl-2"}>
						<div className={"text-2xl font-bold text-white"}>
							{box2Emoji}
						</div>
					</h3>
					<p className={"text-white"}>{box2}</p>
				</div>
			</div>
		</div>
	);
}