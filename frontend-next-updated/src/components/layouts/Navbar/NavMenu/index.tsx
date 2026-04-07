"use client";

import Link from "next/link";
// Libs
import useMediaQuery from "@/hooks/useMediaQuery";
// Styles
import styles from "./styles.module.scss";

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
          className={styles["navbar-menu__link"]}
        >
          {link.name}
        </Link>
      ))}
    </menu>
  );
};

const MobileMenu: React.FC = () => (
  <menu className={styles["navbar-menu"]}>Menu</menu>
);

const NavMenu: React.FC<MenuProps> = ({ links }) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

  // return <DesktopMenu />

  return isSmallDevice ? <MobileMenu /> : <DesktopMenu links={links} />;
};

export default NavMenu;
