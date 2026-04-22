"use client";

import { useEffect } from "react";
import { SOCIAL_LINKS } from "@/app/seo.config";
import { HOME_SECTIONS } from "@/app/site.config";
import { useHero } from "@/context/HeroContext";
import { useScroll } from "@/context/ScrollContext";
import { useTheme } from "@/context/ThemeProvider";
import styles from "../styles.module.scss";

const SideNav = () => {
  const { isOpen, setIsOpen } = useHero();
  const { scrollTo } = useScroll();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (isOpen && HOME_SECTIONS) {
        const index = Number(e.key) - 1;
        scrollTo(HOME_SECTIONS[index]?.href || "");
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen, scrollTo]);

  return (
    <aside className={styles["hero__frame-nav-wrapper"]} data-expanded={isOpen}>
      <nav className={styles["hero__frame-nav"]}>
        <div className={styles["hero__frame-nav__block"]}>
          <h2 className={styles["hero__frame-nav__title"]}>Navigation</h2>
          <ul className={styles["hero__frame-nav__list"]}>
            {HOME_SECTIONS?.map((link, index) => {
              return (
                <li
                  className={styles["hero__frame-nav__list-item"]}
                  key={`nav-link-${link.key}`}
                >
                  <a
                    href={link.href}
                    className={styles["hero__frame-nav__link"]}
                    aria-label="Scroll to top"
                    onClick={() => scrollTo(link.href)}
                  >
                    <span className={styles["hero__frame-nav__link-label"]}>
                      {link.label}
                    </span>
                    <span className={styles["hero__frame-nav__link-index"]}>
                      {index + 1}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles["hero__frame-nav__block"]}>
          <h2 className={styles["hero__frame-nav__title"]}>Stay in Touch</h2>
          <ul className={styles["hero__frame-nav__list"]}>
            {SOCIAL_LINKS?.map((link) => {
              return (
                <li
                  className={styles["hero__frame-nav__list-item"]}
                  key={`nav-link-${link.id}`}
                >
                  <a
                    href={link.url}
                    className={styles["hero__frame-nav__link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles["hero__frame-nav__block--switch-theme"]}>
          <button
            type="button"
            className={styles["hero__frame-nav__switch-button"]}
            onClick={() => setTheme("dark")}
            aria-label="Change to Dark theme"
            data-selected={theme === "dark"}
          >
            Dark
          </button>
          <button
            type="button"
            className={styles["hero__frame-nav__switch-button"]}
            onClick={() => setTheme("light")}
            aria-label="Change to Light theme"
            data-selected={theme === "light"}
          >
            Light
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
