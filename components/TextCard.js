// Text Card component for scrollytelling

import React from 'react';
import {Text} from '@nextui-org/react';
import styles from './TextCard.module.css';

export default function TextCard({className, children}) {
	// Create a card that will contain text for scrollytelling purposes. Assume tailwind.css is being used. All styling is
	// done as className rather than imports from files.
	return (
		<div className={"bg-white rounded-lg shadow-lg p-8 max-w-3xl pointer-events-auto my-64 " + className}>
			{children}
		</div>
	);
}