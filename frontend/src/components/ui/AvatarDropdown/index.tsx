"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
// Assets
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
// Constants
import { ABOUT } from "@/lib/constants";
import type { BusinessType } from "@/lib/types";
import { Button } from "..";
import useDropdownAnimation from "./animations";
// Styles
import styles from "./styles.module.scss";

const AvatarDropdown = ({ data }: { data: BusinessType }) => {
  // State to manage dropdown open/close status
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openMenu, closeMenu } = useDropdownAnimation(dropdownRef);
  const { legalName, country, city, social_links: links, cv } = data;

  // Function to handle clicks outside the dropdown
  const handleClicksOutsideDropdown = useCallback(
    (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        closeMenu();
      }
    },
    [closeMenu],
  );

  // Function to handle Escape key press
  const handleEscDropdown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        closeMenu();
      }
    },
    [closeMenu],
  );

  // Effect to manage event listeners for closing the dropdown
  useLayoutEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClicksOutsideDropdown);
      window.addEventListener("keydown", handleEscDropdown);
    } else {
      document.removeEventListener("mousedown", handleClicksOutsideDropdown);
      window.removeEventListener("keydown", handleEscDropdown);
    }

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousedown", handleClicksOutsideDropdown);
      window.removeEventListener("keydown", handleEscDropdown);
    };
  }, [isDropdownOpen, handleClicksOutsideDropdown, handleEscDropdown]);

  // Function to toggle the dropdown open state
  const toggleDropdownOpen = () => {
    setDropdownOpen((prev) => !prev);
    isDropdownOpen ? closeMenu() : openMenu();
  };

  return (
    <div
      className={styles["avatar-dropdown"]}
      ref={dropdownRef}
      data-expanded={isDropdownOpen}
    >
      <button
        type="button"
        onClick={toggleDropdownOpen}
        aria-haspopup="menu"
        aria-expanded={isDropdownOpen}
        className={styles["avatar-dropdown__button"]}
        data-target="button"
      >
        <div className={styles["avatar-dropdown__avatar"]}>
          <Image
            src={ABOUT.avatar}
            height={64}
            width={64}
            alt="Jordi Paradelo - Freelance Designer & Developer"
            className={styles["avatar-dropdown__avatar-image"]}
          />
        </div>
        <ArrowDownIcon />
      </button>

      <div
        role="menu"
        aria-hidden={!isDropdownOpen}
        hidden={!isDropdownOpen}
        className={styles["avatar-dropdown__menu"]}
        data-target="menu"
      >
        {/* Contact Details */}
        <div className={styles["avatar-dropdown__menu-block"]}>
          <p className="heading-style-uppercase">Contact details</p>
          <ul className={styles["avatar-dropdown__menu-list"]}>
            {ABOUT.contact.map((contact) => (
              <li
                key={contact.id}
                className={styles["avatar-dropdown__menu-list-item"]}
              >
                <a
                  className={styles["avatar-dropdown__menu-link"]}
                  {...contact.props}
                >
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Details */}
        <div className={styles["avatar-dropdown__menu-block"]}>
          <p className="heading-style-uppercase">Business details</p>
          <ul className={styles["avatar-dropdown__menu-list"]}>
            <li className={styles["avatar-dropdown__menu-list-item"]}>
              <span>{legalName}</span>
            </li>
            <li className={styles["avatar-dropdown__menu-list-item"]}>
              <span>
                Location: {country}, {city}
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className={styles["avatar-dropdown__menu-block"]}>
          <p className="heading-style-uppercase">Socials</p>
          <ul className={styles["avatar-dropdown__menu-list"]}>
            {links
              .filter((link) => link.type === "website")
              .map((link) => (
                <li
                  key={link.nameID}
                  className={styles["avatar-dropdown__menu-list-item"]}
                >
                  <a
                    className={styles["avatar-dropdown__menu-link"]}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.displayName}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Additional Actions */}
        <div className={styles["avatar-dropdown__menu-actions"]}>
          <Button href={`http://localhost:1337${cv?.url}`}>Download CV</Button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropdown;
