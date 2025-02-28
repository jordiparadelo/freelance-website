import { useWindowSize } from "@uidotdev/usehooks";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

const usePageScroll = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const size = useWindowSize();
	const pathname = usePathname();

	// Methods 
	function scrollToElement(element) {
		if(!element) return
		const selectedElement = document.querySelector(element);

		selectedElement.scrollIntoView({ behavior: "smooth" })

		return selectedElement?.getBoundingClientRect().top
	}

	useEffect(() => {
		let pageHeight;

		if (typeof window !== "undefined") {
			pageHeight = document?.body.scrollHeight - window.innerHeight;
		}

		const handleScroll = () => {
			const scrollPercent = Math.round((window.scrollY / pageHeight) * 100);
			setScrollPosition(scrollPercent);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [size, pathname]);

	return { scrollPosition, scrollToElement};
};

export default usePageScroll;
