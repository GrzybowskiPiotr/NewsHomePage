

import styles from "./NewsSection.module.css";
export function NewsSection({ Links }) {


	
	return (
		<section className={styles.section} id="News">
			<h2>New</h2>
			
			<ul>
				{Links.map((link ) => {
					return (
						<li key={link.newsHeading}>
							<a>
								<h3>{link.newsHeading}</h3>
								<p>{link.desc}</p>				
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
