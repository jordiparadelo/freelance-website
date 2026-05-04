import type React from "react";
// import { LoadingCurtain } from "@/components/ui";
import ScrollProvider from "@/lib/context/ScrollContext";
import { ThemeProvider } from "@/lib/context/ThemeProvider";
import { TransitionPageProvider } from "@/lib/context/TransitionPageContext";

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <TransitionPageProvider>
        {/* <LoadingCurtain /> */}
        <ScrollProvider>{children}</ScrollProvider>
      </TransitionPageProvider>
    </ThemeProvider>
  );
};

export default SiteProvider;
