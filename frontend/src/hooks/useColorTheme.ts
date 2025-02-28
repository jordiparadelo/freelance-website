import { useEffect, useState } from "react";

export const useColorTheme = () => {
	const [theme, setColorTheme] = useState("dark");

	useEffect(() => {
		document.body.dataset.theme = theme;
		window?.localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setColorTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return [theme, setColorTheme, toggleTheme];
};
