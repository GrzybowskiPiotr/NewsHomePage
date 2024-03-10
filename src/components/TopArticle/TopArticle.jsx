import WEB3MOBILE from "../../assets/images/image-web-3-mobile.jpg";
import WEB3DESKTOP from "../../assets/images/image-web-3-desktop.jpg";

import styles from "./TopArticle.module.css";
import { useMediaQuery } from "react-responsive";



export function TopArticle({ heading, p, link }) {
	
	

	const isLargerThen769 = useMediaQuery({ query: "(min-width: 850px)" });
	return (
		<article className={styles.article}>
			<img src={isLargerThen769 ? WEB3DESKTOP : WEB3MOBILE} alt="Web 3 image" />
			<div className={isLargerThen769 ? styles.details : ""}>
				<h1>{heading}</h1>
				<p>{p}</p>
				<a href={`${link}`}>Read more</a>
			</div>
		</article>
	);
}
