import { useEffect, useState } from "react";

export const useColorTheme = () => {
	const [theme, setColorTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		document.body.dataset.theme = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setColorTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return [theme, setColorTheme, toggleTheme];
};

