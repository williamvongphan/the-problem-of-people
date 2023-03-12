// Fake ChatGPT entry that is used to emulate a chat with ChatGPT. This is used in the scrollytelling section of the
// website.

import React from 'react';

import ChatGPTLogo from '../public/svg/chatgpt.svg';
import Person from '../public/svg/person.svg';

export default function ChatGPTEntry({ from, children }) {
	// A message contains a logo inside a rounded square to the left, and the message to the right. Depending on the from
	// variable, the color of the logo and message background will change.
	if (from === "user") {
		return (
			<div className={"flex flex-row justify-start items-center w-full p-16"}>
				<div className={"flex flex-row justify-center items-center w-8 h-8 rounded-md bg-indigo-700 mr-8"}>
					<Person className={"w-6 h-6 text-white"}/>
				</div>
				<div className={"flex flex-row justify-start items-center w-full h-12 rounded-full"}>
					{children}
				</div>
			</div>
		);
	} else if (from === "chatgpt") {
		return (
			<div className={"flex flex-row justify-start items-center w-full bg-zinc-600 p-16"}>
				<div className={"flex flex-row justify-center items-center w-8 h-8 rounded-md bg-emerald-400 mr-8"}>
					<ChatGPTLogo className={"w-6 h-6 text-white"}/>
				</div>
				<div className={"flex flex-row justify-start items-center w-full h-12 rounded-full"}>
					{children}
				</div>
			</div>
		);
	}
}