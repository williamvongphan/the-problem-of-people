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
		<div className={"w-full h-screen flex flex-col justify-center items-center bg-zinc-700 duration-300"} key={"f"}>
			<Image src={"/img/struggle-to-escape.png"}
						 alt={"Artists rendition of a person struggling to escape while a machine crushes them. High definition 4K Digital Art Vibrant Colors"}
						 width={1080} height={1080} className={"w-auto h-3/5 shadow-2xl rounded-2xl"}/>
			<p className={"text-white text-sm mt-4"}>Artists rendition of a person struggling to escape while a machine crushes them. High definition 4K Digital Art Vibrant Colors</p>
		</div>
	);
}