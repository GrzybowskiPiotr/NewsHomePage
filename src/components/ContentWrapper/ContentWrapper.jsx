import styles from "./ContentWrapper.module.css";



export function ContentWrapper({ children }) {


	return <div className={styles.wrapper}>{children}</div>;
}
