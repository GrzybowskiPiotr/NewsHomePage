import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { NewsSection } from "../NewsSection/NewsSection";
import { Top3Section } from "../Top3Section/Top3Section";
import { TopArticle } from "../TopArticle/TopArticle";
import styles from "./Layout.module.css";

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
		image: "./src/assets/images/image-retro-pcs.jpg",
	},
	{
		heading: "Top 10 Laptops of 2022",
		desc: "Our best picks for various needs and budgets.",
		image: "./src/assets/images/image-gaming-growth.jpg",
	},
	{
		heading: "The Growth of Gaming",
		desc: "How the pandemic has sparked fresh opportunities.",
		image: "./src/assets/images/image-top-laptops.jpg",
	},
];

export function Layout() {
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