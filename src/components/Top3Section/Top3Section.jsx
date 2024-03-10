import { useMediaQuery } from "react-responsive";
import styles from "./Top3Section.module.css";


export function Top3Section({ top3list }) {
	const isLargerThen769 = useMediaQuery({ query: "(min-width: 768px)" });
	
	return (
		<section
			id="Trending"
			className={`${isLargerThen769 && styles.sectionDestopView} ${
				styles.section
			}`}>
			<ul>
				{top3list.map((item, index) => {
					return (
						<li key={item.heading}>
							<img src={item.image} alt={item.heading} />
							<div>
								<h2>
									{index < 9 && 0}
									{index + 1}
								</h2>
								<a href="">
									<h3>{item.heading}</h3>
								</a>
								<p>{item.desc}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
