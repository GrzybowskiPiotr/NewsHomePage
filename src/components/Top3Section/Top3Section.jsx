import { useMediaQuery } from "react-responsive";
import styles from "./Top3Section.module.css";
import PCIMG from "../../assets/images/retroPcs.jpg";
import LAPTOPIMG from "../../assets/images/topLaptops.jpg";
import GAMINIMG from "../../assets/images/gamingGrowth.jpg";
export function Top3Section() {
	const isLargerThen769 = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<section
			id="Trending"
			className={`${isLargerThen769 && styles.sectionDestopView} ${
				styles.section
			}`}>
			<ul>
				<li>
					<img src={PCIMG} alt="Reviving Retro PCs" />
					<div>
						<h2>01</h2>
						<a href="">
							<h3>Reviving Retro PCs</h3>
						</a>
						<p>What happens when old PCs are given modern upgrades?</p>
					</div>
				</li>
				<li>
					<img src={LAPTOPIMG} alt="Top 10 Laptops of 2022" />
					<div>
						<h2>02</h2>
						<a href="">
							<h3>Top 10 Laptops of 2022</h3>
						</a>
						<p>Our best picks for various needs and budgets.</p>
					</div>
				</li>
				<li>
					<img src={GAMINIMG} alt="Top 10 Laptops of 2022" />
					<div>
						<h2>03</h2>
						<a href="">
							<h3>The Growth of Gaming</h3>
						</a>
						<p>How the pandemic has sparked fresh opportunities.</p>
					</div>
				</li>
			</ul>
		</section>
	);
}
