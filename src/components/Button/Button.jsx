import stytles from "./Button.module.css";
export function Button({ children, clickHandler }) {
	return (
		<button className={stytles.button} onClick={clickHandler}>
			{children}
		</button>
	);
}
