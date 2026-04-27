"use client";

// Hooks
import usePageScroll from "@/lib/hooks/usePageScroll";

const ButtonScrollTop = ({ label }: { label?: string }) => {
  const { scrollToElement } = usePageScroll();
  const DEFAULT_LABEL = "Scroll to Top";

  return (
    <button type="button" onClick={() => scrollToElement("body")}>
      {label ? label : DEFAULT_LABEL}
    </button>
  );
};

export default ButtonScrollTop;
