import { ContentWrapper } from "./components/ContentWrapper/ContentWrapper";
import { Footer } from "./components/Footer/Footer";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { NewsSection } from "./components/NewsSection/NewsSection";
import { Top3Section } from "./components/Top3Section/Top3Section";
import { TopArticle } from "./components/TopArticle/TopArticle";
import styles from "./App.module.css";
import test from "./assets/images/gamingGrowth.jpg";
const Links = [
	{
		newsHeading: "Hydrogen VS Electric Cars",
		desc: "Will hydrogen-fueled cars ever catch up to EVs?",
	},
	{
		newsHeading: " The Downsides of AI Artistry",
		desc: "What are the possible adverse effects of on-demand AI image generation?",
	},
	{
		newsHeading: "Is VC Funding Drying Up?",
		desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
	},
];

const top3list = [
	{
		heading: "Reviving Retro PCs",
		desc: "What happens when old PCs are given modern upgrades?",
		image: "./assets/retroPcs.jpg",
	},
	{
		heading: "Top 10 Laptops of 2022",
		desc: "Our best picks for various needs and budgets.",
		image: "../assets/gamingGrowth.jpg",
	},
	{
		heading: "The Growth of Gaming",
		desc: "How the pandemic has sparked fresh opportunities.",
		image: "./assets/topLaptops.jpg",
	},
];
export function App() {
	return (
		<>
			<div className={styles.content}>
				<MainMenu />
				<ContentWrapper>
					<TopArticle
						heading={" The Bright Future of Web 3.0?"}
						p={
							"We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
						}
						link={"/"}
					/>
					<NewsSection Links={Links} />
					<Top3Section top3list={top3list} />
				</ContentWrapper>
			</div>
			<Footer />
		</>
	);
}
