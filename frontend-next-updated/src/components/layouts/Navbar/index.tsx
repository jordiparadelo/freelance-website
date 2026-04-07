"use client";

import { useRef } from "react";
import { ROUTES } from "@/app/site.config";
import { AvatarDropdown } from "@/components/ui";
import NavActions from "./NavActions";
import NavMenu from "./NavMenu";
import "./styles.scss";

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  return (
    <nav ref={navbarRef} className="navbar">
      <div className="padding-global">
        <div className="container">
          <div className="navbar__layout">
            <AvatarDropdown />
            <NavMenu links={ROUTES} />
            <NavActions />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
