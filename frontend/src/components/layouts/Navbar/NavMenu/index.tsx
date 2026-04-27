"use client";

import Link from "next/link";
// Libs
import useMediaQuery from "@/lib/hooks/useMediaQuery";
// Styles
import styles from "./styles.module.css";

interface NavLink {
  name: string;
  path: string;
}

interface MenuProps {
  links?: NavLink[];
}

const DesktopMenu: React.FC<MenuProps> = ({ links }) => {
  return (
    <menu className={styles["navbar-menu"]}>
      {links?.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={styles["navbar-menu_link"]}
        >
          {link.name}
        </Link>
      ))}
    </menu>
  );
};

const NavMenu: React.FC<MenuProps> = ({ links }) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

  // return <DesktopMenu />

  return !isSmallDevice && <DesktopMenu links={links} />;
};

export default NavMenu;
