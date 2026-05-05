"use client";

import Image from "next/image";
import { type RefObject, useCallback, useRef, useState } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import { formatStrapiMediaUrl } from "@/lib/db";
import type { BusinessInfo } from "@/lib/db/types";
import { Button } from "..";
import useDropdownAnimation from "./animations";
import styles from "./styles.module.scss";

const AvatarDropdown = ({ data }: { data: BusinessInfo }) => {
  // State to manage dropdown open/close status

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(
    null,
  ) as RefObject<HTMLDivElement>;
  const { openMenu, closeMenu } = useDropdownAnimation(dropdownRef);
  const { legalName, country, city, social_links: links, cv, avatar } = data;

  const AVATAR_SRC = formatStrapiMediaUrl(avatar.url);

  const DOWNLOADABLE_CV = formatStrapiMediaUrl(cv?.url);

  // Function to handle clicks outside the dropdown
  const handleClicksOutsideDropdown = useCallback(
    (event: MouseEvent | TouchEvent | FocusEvent): void => {
      if (!dropdownRef.current) return;
      const target = event.target;
      if (!(target instanceof Node) || dropdownRef.current.contains(target)) {
        return;
      }
      setDropdownOpen(false);
      closeMenu();
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

  useOnClickOutside(dropdownRef, handleClicksOutsideDropdown);
  useEventListener("keydown", handleEscDropdown);

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
            src={AVATAR_SRC}
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
            {data.social_links
              .filter((link) => link.type === "email")
              .map((contact) => (
                <li
                  key={contact?.nameID}
                  className={styles["avatar-dropdown__menu-list-item"]}
                >
                  <a
                    className={styles["avatar-dropdown__menu-link"]}
                    href={contact.href}
                  >
                    {contact.href}
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
          <Button
            href={DOWNLOADABLE_CV}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropdown;
