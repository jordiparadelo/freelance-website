import { formatString } from "@/lib/utils";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";


const useSectionList = () => {
	// const [sectionList, setSectionList] = useState([]);
	const [sectionList, setSectionList] = useState([]);

	const pathname = usePathname();

	useEffect(() => {
		// Get all sections
		const sectionsWithId = Array.from(document.querySelectorAll("section"))
			.filter(({ id }) => id)
			.map(({ id }) => ({ label: formatString(id), id }));

			setSectionList(sectionsWithId);

	}, [pathname]); // You might need to add dependencies here if necessary

	return sectionList;
};

export default useSectionList;
