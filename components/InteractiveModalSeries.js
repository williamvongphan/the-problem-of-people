// This is a series of interactive modals. Modals passed in through the modals prop are displayed in order.
// There are next and back buttons that allow the user to navigate through the modals.

import React from 'react';
import {Text} from '@nextui-org/react';
import InteractiveModal from "./InteractiveModal";

export default function InteractiveModalSeries({className, modals}) {
	// Create a card that will contain text for scrollytelling purposes. Assume tailwind.css is being used. All styling is
	// done as className rather than imports from files.
	let [modalIndex, setModalIndex] = React.useState(0);

	return (
		<div className={"flex flex-col items-center bg-neutral-800 max-w-xl rounded-lg shadow-lg m-4 p-3"}>
			{modals[modalIndex]}
			<div className={"flex flex-row items-center justify-between px-4 pb-4 w-full"}>
					<button
						className={"border-gray-500 border-2 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg " + (modalIndex === 0 ? "opacity-0" : "")}
						onClick={() => {
							if (modalIndex > 0) {
								setModalIndex(modalIndex - 1);
							}
						}}
					>
						Back
					</button>
					<button
						className={"border-gray-500 border-2 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg " + (modalIndex === modals.length - 1 ? "opacity-0" : "")}
						onClick={() => {
							if (modalIndex < modals.length - 1) {
								setModalIndex(modalIndex + 1);
							}
						}}
					>
						Next
					</button>
			</div>
		</div>
	);
}