import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string): boolean | null => {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    const mediaQueryList = window?.matchMedia(mediaQuery);
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handler);

    return () => mediaQueryList.removeEventListener("change", handler);
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
