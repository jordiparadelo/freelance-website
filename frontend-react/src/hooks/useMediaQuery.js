import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery) => {
	const [matches, setMatches] = useState(null);
	useEffect(() => {
		const handler = (event) => {
			setMatches(event.matches);
		};
		window?.matchMedia(mediaQuery).addEventListener("change", handler);
		return () => window?.matchMedia(mediaQuery).removeEventListener("change", handler);
	}, [mediaQuery]);
	return matches;
};

export default useMediaQuery;