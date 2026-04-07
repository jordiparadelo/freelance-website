import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { useWindowSize } from "usehooks-ts";

interface UsePageScrollReturn {
  scrollPosition: number;
  scrollToElement: (element: string) => number | undefined;
}

const usePageScroll = (): UsePageScrollReturn => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const _size = useWindowSize();
  const _pathname = usePathname();

  // Methods
  function scrollToElement(element: string): number | undefined {
    if (!element) return;
    const selectedElement = document.querySelector<HTMLElement>(element);
    if (!selectedElement) return;

    selectedElement.scrollIntoView({ behavior: "smooth" });
    return selectedElement.getBoundingClientRect().top;
  }

  useEffect(() => {
    let pageHeight: number = 0;

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
  }, []);

  return { scrollPosition, scrollToElement };
};

export default usePageScroll;
