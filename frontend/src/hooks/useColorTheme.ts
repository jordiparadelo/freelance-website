import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useColorTheme = (): [Theme, (theme: Theme) => void, () => void] => {
	const [theme, setColorTheme] = useState<Theme>("dark");

	useEffect(() => {
		document.body.dataset.theme = theme;
		window?.localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setColorTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return [theme, setColorTheme, toggleTheme];
};
