import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { formatString } from "@/lib/utils";

interface Section {
  label: string;
  id: string;
}

const useSectionList = (): Section[] => {
  // const [sectionList, setSectionList] = useState([]);
  const [sectionList, setSectionList] = useState<Section[]>([]);

  const _pathname = usePathname();

  useEffect(() => {
    // Get all sections
    const sectionsWithId = Array.from(document.querySelectorAll("section"))
      .filter(
        (section): section is HTMLElement =>
          section instanceof HTMLElement && !!section.id,
      )
      .map(({ id }) => ({ label: formatString(id), id }));

    setSectionList(sectionsWithId);
  }, []); // You might need to add dependencies here if necessary

  return sectionList;
};

export default useSectionList;
