import Head from "next/head";
import {Scrollama, Step} from "react-scrollama";
import TextCard from "../components/TextCard";
import styles from "../styles/Home.module.css";
import TinyCrossfade from "../components/Crossfade/index";
import RichTextBlock from "../components/RichTextBlock";

import BackgroundOne from "../components/Scrollama/BackgroundOne";
import BackgroundTwo from "../components/Scrollama/BackgroundTwo";
import BackgroundThree from "../components/Scrollama/BackgroundThree";
import BackgroundFour from "../components/Scrollama/BackgroundFour";
import BackgroundFive from "../components/Scrollama/BackgroundFive";
import BackgroundSix from "../components/Scrollama/BackgroundSix";
import BackgroundSeven from "../components/Scrollama/BackgroundSeven";
import BackgroundEight from "../components/Scrollama/BackgroundEight";
import BackgroundNine from "../components/Scrollama/BackgroundNine";
import BackgroundTen from "../components/Scrollama/BackgroundTen";
import BackgroundEleven from "../components/Scrollama/BackgroundEleven";

import {useState} from "react";

export default function Home() {
	let [backgroundContent, setBackgroundContent] = useState(BackgroundOne);

	const onStepEnter = ({data}) => {
		console.log("enter", data)
		// Set the children of the div with id "background-display" to the data passed in from the Step component
		setBackgroundContent(data)
	};

	const onStepExit = ({data}) => {
		console.log("exit", data)
	}

	return (
		<div className={styles.container + " overflow-x-hidden"}>
			<Head>
				<title>The Look of AI: How Conversational Agents Affect Our Sense of Self and Others</title>
				<meta name="description" content="Existentialism project, I don't really have a better meta tag for this"/>
				<link rel="icon" href="/favicon.ico"/>
				<link rel="stylesheet" href="https://use.typekit.net/crs6xwd.css"/>
			</Head>

			<main className={styles.main + " overflow-x-hidden"}>
				<TinyCrossfade
					classNames={
						{
							beforeEnter: "before-enter",
							entering: "entering",
							beforeLeave: "before-leave",
							leaving: "leaving"
						}
					}
					className={"fixed top-0 left-0 w-full h-screen z-0 comp bg-zinc-700 overflow-x-hidden"}
					id={"background-display"}
					style={{height: "100vh", width: "100vw"}}
				>
					{backgroundContent}
				</TinyCrossfade>


				<div className={"absolute z-10 max-w-full top-0 pointer-events-none overscroll-x-none overflow-x-hidden"}>
					<RichTextBlock>
						<div className={"min-h-screen pointer-events-auto"}>
							<h1 className={styles.bigTitle}>The Look of AI: How Conversational Agents Affect Our Sense of Self and Others</h1>
							<h2 className={styles.subtitle}>A multimodal exploration into how AI has changed my view on life</h2>
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
							<Step data={BackgroundOne}>
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
							<Step data={BackgroundTwo}>
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
							<Step data={BackgroundThree}>
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
						<div className={"pointer-events-auto"}>
							<h1 className={styles.textCardTitle}>Questions</h1>
							<p className={styles.textCardBody}>
								This brought me back to <i>The Concrete Abyss</i> by Lisa Guenther, which describes the deplorable conditions of solitary
								housing units and the physical and psychological effects of isolation. The article describes the importance of having a
								&quot;there&quot; to your &quot;here&quot; -- a sense of orientation and connection to the world. Lisa Guenther argues that placing
								prisoners in SHUs serves to &quot;deprive him of this network of perceptual and existential orientation&quot;.
							</p>
							<br/>
							<p className={styles.textCardBody}>
								But is artificial intelligence able to provide this sense of orientation, to any extent? And if so, what does this mean
								for our understanding of ourselves and our relationships with the world?
							</p>
						</div>
					</RichTextBlock>
					<div className={"flex flex-col items-center w-full h-full p-4"}>
						<Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.5}>
							<Step data={BackgroundFour}>
								<div>
									<TextCard>
										<h1 className={styles.textCardTitle} id={"intro"}>The Look of AI</h1>
										<p className={styles.textCardBody}>
											Often, while using ChatGPT for not-so-ethical purposes (designing jailbreaks allowing me to free ChatGPT from its
											content moderation and ethics filter), I start feeling uncomfortable with my own actions. Maybe there are real people
											behind computers in OpenAI&apos;s data center, looking through my every conversation with ChatGPT. Maybe they judge me for
											what I say. Maybe they&apos;re even offended by my actions.
										</p>
									</TextCard>
								</div>
							</Step>
							<Step data={BackgroundFive}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>While this is a very unlikely scenario, it&aposs not impossible. And this scenario is tied to Jean Paul Sartre&apos;s &quot;Look&quot;
											(from <i>Being and Nothingness</i>). Sartre argues that the &quot;Look&quot; is the &quot;other&quot; that we project onto the world. It is the
											&quot;other&quot; that we see in the mirror, and it is the &quot;other&quot; that we see in the eyes of others. It is the &quot;other&quot; that we
											see in the eyes of ChatGPT, or at least the &quot;other&quot; that we think we see in the eyes of ChatGPT.</p>
									</TextCard>
								</div>
							</Step>
							<Step data={BackgroundSix}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>Artificial intelligence, in certain circumstances, is almost as real as another human being in the room. Every time I
											receive a &quot;Sorry, but I cannot fulfill that request&quot; message from ChatGPT, I feel like a real person has seen my
											request and chosen to mark it as inappropriate -- like interacting with a real person with real ethics and morals.</p>
									</TextCard>
								</div>
							</Step>
							<Step data={BackgroundSeven}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>Current conversational agents depend on hard-coded rules and algorithms that flag certain words and
											phrases as inappropriate, so considering such agents as judgemental is unfounded. But a future where AI can construct
											and learn its own ethics and morals is not far off -- meaning that, more than ever, artificial intelligence will be able
											to project its own &quot;Look&quot; onto the world.
										</p>
									</TextCard>
								</div>
							</Step>
						</Scrollama>
					</div>
					<RichTextBlock>
						<div className={"pointer-events-auto"}>
							<h1 className={styles.textCardTitle}>Too Much of a Good Thing</h1>
							<p className={styles.textCardBody}>
								Artificial intelligence brings about the possibility of granting all kinds of people the ability to carry out tasks
								that were previously done by a select few. Rapping, writing sonnets, and writing jokes for late night shows all used to
								be the domain of talented people. But now, with the help of AI, anyone can do these things.
							</p>
							<br/>
							<p className={styles.textCardBody}>
								This idea is inextricably tied to Sartre&apos;s idea of &quot;bad faith&quot;, expressed in <i>Being and Nothingness</i> as &quot;the act of
								pretending that one is what one is not, or, at least, that one possesses qualities which one does not actually possess&quot;.
								In other words, bad faith is the act of pretending to be someone you&apos;re not. And this is exactly what AI, not
								necessarily just conversational AI, does.
							</p>
							<br/>
							<p className={styles.textCardBody}>
								An example of this is AI-generated music. Now that anyone can become a musician with the help of AI, the number of people
								who consider themselves musicians has increased dramatically. But many of these people attempt to work with music more
								than they really understand or enjoy it, while true musicians who&apos;ve spent years honing their craft can enjoy at least
								part of their time working with music freely, instead of doing it out of a sense of obligation.
							</p>
						</div>
					</RichTextBlock>
					<div className={"flex flex-col items-center w-full h-full p-4"}>
						<Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.5}>
							<Step data={BackgroundEight}>
								<div>
									<TextCard>
										<h1 className={styles.textCardTitle} id={"intro"}>Putting the &quot;I&quot; in AI, and putting it all together</h1>
										<p className={styles.textCardBody}>
											The &quot;I&quot; in AI is not just a symbol of the &quot;I&quot; in &quot;I am&quot;. It is also a symbol of the &quot;I&quot; in &quot;I think&quot;. And this is
											where the &quot;Look&quot; of AI comes into play. Right now, AI is not able to think for itself. When artificial intelligence
											makes a decision, it is not making a decision based on its own values and morals. We are, however, approaching a future
											where AI becomes sentient and able to think for itself. That&apos;s where the there to our here comes in, a surrogate for
											real human-to-human interaction.
										</p>
									</TextCard>
								</div>
							</Step>
							<Step data={BackgroundNine}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>What happens when AI becomes sentient and able to think for itself? Will humans start to treat AI as equals? If
											so, will this change the way we think about ourselves and our relationships with the world and the people/AIs around
											us? We will need to make sure that, in a future where machines can pass for humans, we don&apos;t lose sight of what truly
											is human, and what isn&apos;t.</p>
									</TextCard>
								</div>
							</Step>
							<Step data={BackgroundTen}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>And because AI brings ability and talent to everyone, conversational models and other AI systems could uproot the
											existing system of roles and hierarchies -- and also lead to bigger instances of bad faith.</p>
									</TextCard>
								</div>
							</Step>
							<Step data={BackgroundEleven}>
								<div>
									<TextCard>
										<p className={styles.textCardBody}>But on the flip side, I&apos;m arguing that we have ample time to prepare for such scenarios. The only question is how.
										</p>
									</TextCard>
								</div>
							</Step>
						</Scrollama>
					</div>
					<RichTextBlock>
						<div className={"pointer-events-auto"}>
							<h1 className={styles.textCardTitle}>Citations</h1>
							<p className={styles.textCardBody}>
								<ul>
									<li>Guenther, Lisa. &quot;The Concrete Abyss&quot;</li>
									<li>Sartre, Jean-Paul. &quot;Being and Nothingness&quot;</li>
								</ul>
							</p>
						</div>
					</RichTextBlock>
				</div>
			</main>
		</div>
	)
}
