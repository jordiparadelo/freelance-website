import { useEffect, useState } from "react";

const useSideNavState = () => {
	const [expanded, setExpanded] = useState(false);
	const [initialRender, setInitialRender] = useState(true);	

	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
		}
	}, [initialRender]);	

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		if (initialRender) {
			setExpanded(false);
		}
	}, [initialRender]);
	


	return { expanded, setExpanded, toggleExpanded };
};

export default useSideNavState;
