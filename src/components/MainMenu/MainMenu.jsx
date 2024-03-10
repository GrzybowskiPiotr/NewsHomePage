import styles from "./MainMenu.module.css";
import Logo from "../../assets/images/logo.svg";
import { Button } from "../Button/Button";
import MenuIcon from "../../assets/images/icon-menu.svg";
import CloseMenuIcon from "../../assets/images/icon-menu-close.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";



export function MainMenu() {
	const [isMenuShow, setIsMeniuShown] = useState(false);

	const isLargerThen768 = useMediaQuery({ query: "(min-width: 768px)" });

	function OpenCloseMenu() {
		setIsMeniuShown((prev) => !prev);
	}

	const mobileMenuClassName = `${styles.menu} ${
		isMenuShow ? `${styles.show}` : ""
	}`;

	return (
		<>
			<header className={styles.header}>	
				<a href="">
					<img src={Logo} alt="logo icon" />
				</a>
				{!isLargerThen768 && (
					<Button clickHandler={OpenCloseMenu}>
						<img src={MenuIcon} alt="open menu icon" />
					</Button>
				)}

				<nav
					className={
						isLargerThen768 ? `${styles.classicMenu}` : mobileMenuClassName
					}>
					{!isLargerThen768 && (
						<Button clickHandler={OpenCloseMenu}>
							<img src={CloseMenuIcon} alt="close menu icon" />
						</Button>
					)}
							<a href="/" onClick={OpenCloseMenu}>
								Home
							</a>
							<a href="#News" onClick={OpenCloseMenu}>
								New
							</a>
						
							<a href="#Popular" onClick={OpenCloseMenu}>
								Popular
							</a>
						
							<a href="#Trending" onClick={OpenCloseMenu}>
								Trending
							</a>
						
							<a href="#Categories" onClick={OpenCloseMenu}>
								Categories
							</a>
				</nav>
			</header>

			{isMenuShow && !isLargerThen768 && <div className={styles.shadow}></div>}
			{!isLargerThen768 && <nav
				className={
					isLargerThen768 ? `${styles.classicMenu}` : mobileMenuClassName
				}>
				{!isLargerThen768 && (
					<Button clickHandler={OpenCloseMenu}>
						<img src={CloseMenuIcon} alt="close menu icon" />
					</Button>
				)}
				
						<a href="/" onClick={OpenCloseMenu}>
							Home
						</a>
					
						<a href="#News" onClick={OpenCloseMenu}>
							New
						</a>
					
						<a href="#Popular" onClick={OpenCloseMenu}>
							Popular
						</a>
					
						<a href="#Trending" onClick={OpenCloseMenu}>
							Trending
						</a>
					
						<a href="#Categories" onClick={OpenCloseMenu}>
							Categories
						</a>
					
			</nav>}
		</>
	);
}
