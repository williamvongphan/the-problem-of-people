import Head from "next/head";
import {Scrollama, Step} from "react-scrollama";
import {useSpring, animated} from "@react-spring/web";
import {Text} from "@nextui-org/react";
import TextCard from "../components/TextCard";
import styles from "../styles/Home.module.css&apos";
import TinyCrossfade from "../components/Crossfade/index";
import RichTextBlock from "../components/RichTextBlock";

import BackgroundOne from "../components/Scrollama/BackgroundOne";
import BackgroundTwo from "../components/Scrollama/BackgroundTwo";
import BackgroundThree from "../components/Scrollama/BackgroundThree";
import {useState} from "react";

export default function Home() {
	let [backgroundContent, setBackgroundContent] = useState(BackgroundOne);

	const onStepEnter = ({data}) => {
		console.log("enter", data)
		// Set the children of the div with id "background-display" to the data passed in from the Step component
		if (data === 1) {
			setBackgroundContent(BackgroundOne);
		} else if (data === 2) {
			setBackgroundContent(BackgroundTwo);
		} else if (data === 3) {
			setBackgroundContent(BackgroundThree);
		}
	};

	const onStepExit = ({data}) => {
		console.log("exit", data)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Blah</title>
				<meta name="description" content="Next.js fiasco"/>
				<link rel="icon" href="/favicon.ico"/>
				<link rel="stylesheet" href="https://use.typekit.net/crs6xwd.css"/>
			</Head>

			<main className={styles.main}>
				<TinyCrossfade
					classNames={
						{
							beforeEnter: "before-enter",
							entering: "entering",
							beforeLeave: "before-leave",
							leaving: "leaving"
						}
					}
					className={"fixed top-0 left-0 w-full h-full z-0 comp bg-zinc-700"}
					id={"background-display"}
					style={{height: "100vh", width: "100vw"}}
				>
					{backgroundContent}
				</TinyCrossfade>


				<div className={"absolute z-10 top-0 pointer-events-none"}>
					<RichTextBlock>
						<div className={"min-h-screen pointer-events-auto"}>
							<h1 className={styles.bigTitle}>The Look of AI</h1>
							<h2 className={styles.subtitle}>How Conversational Agents Affect Our Sense of Self and Others</h2>
							<br/>
							<hr/>
							<br/>
							<h1 className={styles.textCardTitle}>(Author&apos;s note) </h1>
							<p className={styles.textCardBody}>
								This scrollytelling project was created for Ms. Mazzurco&apos;s Spring 2023 Existentialism course at
								Stuyvesant High School. As a passionate artificial intelligence researcher who has witnessed the rise
								of conversational agents like ChatGPT and Claude, I&apos;ve always appreciated the ability and power of
								these agents to carry out seemingly human-like tasks and conversations. But I&apos;ve also understood that
								these agents are far from human -- yet, they can still bring into question so many human issues and
								debates.
							</p>
							<br/>
							<p className={styles.textCardBody}>
								All source code can be found on <a href={"https://github.com/williamvongphan/the-problem-of-people"} className={"text-blue-500"}>GitHub</a>.
							</p>
							<br/>
							<p className={styles.textCardBody}>
								If you prefer to read this text in a more traditional format, you can find it <a href={"https://github.com/williamvongphan/the-problem-of-people/blob/main/paper.md"} className={"text-blue-500"}>here</a>.
							</p>
							<br/>
							<p className={styles.textCardBody}>
								Just want to read the original? Scroll down!
							</p>
							<br/>
							<hr/>
							<br/>
							<p className={styles.subtext}>
								I recommend reading this on a desktop computer or laptop. I&apos;ve tried my best to make this website
								accessible on mobile, but it&apos;s not perfect and has multiple bugs. I&apos;ve made this website as fun and
								interactive as possible, so contents under scrollytelling sections can be clicked on and modified. Enjoy!
							</p>
						</div>
					</RichTextBlock>

					<div className={"flex flex-col items-center w-full h-full p-4"}>
						<Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.5}>
							<Step data={1}>
								<div>
									<TextCard>
										<h1 className={styles.textCardTitle} id={"intro"}>Introduction</h1>
										<p className={styles.textCardBody}>
											The first day I discovered ChatGPT, I was really in shock. I had already known about the year’s AI
											advances, but this
											was something new altogether.
										</p>
									</TextCard>
								</div>
							</Step>
							<Step data={2}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>I was almost surprised to learn that the text generation was
											actually done by many GPUs in a data center rather than by
											a human, because at first, it sure felt like a person was at the other end of the conversation. It
											was so different from
											GPT-3 and other text generation models -- it was so uncanny.</p>
									</TextCard>
								</div>
							</Step>
							<Step data={3}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>After my initial surprise, I quickly started pushing the limits
											of the system and its generative abilities.
											It became clear that its human-like speech wasn’t so human-like after all. But these developments
											raised important
											questions in my mind about how AI changes our understanding of ourselves and our relationships
											with the world.</p>
									</TextCard>
								</div>
							</Step>
						</Scrollama>
					</div>
					<RichTextBlock>
						<h1 className={styles.textCardTitle}>Questions</h1>
						<p className={styles.textCardBody}>
							This brought me back to <i>The Concrete Abyss</i> by Lisa Guenther, which describes the deplorable conditions of solitary
							housing units and the physical and psychological effects of isolation. The article describes the importance of having a
							&quot;there&quot; to your &quot;here&quot; -- a sense of orientation and connection to the world. Lisa Guenther argues that placing
							prisoners in SHUs serves to &quot;deprive him of this network of perceptual and existential orientation&quot;.
						</p>
						<p className={styles.textCardBody}>
							But is artificial intelligence able to provide this sense of orientation, to any extent? And if so, what does this mean
							for our understanding of ourselves and our relationships with the world?
						</p>
					</RichTextBlock>
					<RichTextBlock>
						<h1 className={styles.textCardTitle}>Citations</h1>
						<p className={styles.textCardBody}>
							Test content
						</p>
					</RichTextBlock>
				</div>
			</main>
		</div>
	)
}
