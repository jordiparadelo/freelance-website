import type React from "react";
// Context
import { MenuProvider } from "@/context/MenuContext";
import ScrollProvider from "@/context/ScrollContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import { TransitionProvider } from "@/context/TransitionContext";

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <TransitionProvider>
        <ScrollProvider>
          <MenuProvider>{children}</MenuProvider>
        </ScrollProvider>
      </TransitionProvider>
    </ThemeProvider>
  );
};

export default SiteProvider;
