// Rich Text Block component. Just holds black text on white background.

import React from 'react';

export default function RichTextBlock({children}) {
	return (
		<div className={"flex flex-col justify-start items-start w-screen h-full bg-white"}>
			<div className={"p-16 max-w-5xl w-full mx-auto"}>
				{children}
			</div>
		</div>
	);
}