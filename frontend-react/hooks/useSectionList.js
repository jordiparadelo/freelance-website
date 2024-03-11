import { formatString } from "@/utils";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const useSectionList = () => {
	const [sectionList, setSectionList] = useState([]);
	// const pathname = usePathname();

	useEffect(() => {
		const sectionsWithId = Array.from(document.querySelectorAll("section"))
			.filter(({ id }) => id)
			.map(({ id }) => ({ label: formatString(id), id }));

        setSectionList(sectionsWithId);
		console.log({ sectionsWithId, sectionList });
	}, []);

	return sectionList;
};

export default useSectionList;
