import React, { useEffect, useState } from 'react'
// Utils
import { formatString } from "@/utils";

const useSectionList2 = () => {
    const [sectionList, setSectionList] = useState([]);

	useEffect(() => {
        if(!document) return
		// Get all sections
		const sectionsWithId = Array.from(document.querySelectorAll("section"))
			.filter(({ id }) => id)
			.map(({ id }) => ({ label: formatString(id), id }));

			setSectionList(sectionsWithId);
        }, []); // You might need to add dependencies here if necessary
	return sectionList;
}

export default useSectionList2