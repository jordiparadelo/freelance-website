"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";
// Assets
import ArrowDownIcon from "@/public/assets/icons/chevron-down.svg";
import { Button } from "..";
// Constants
import { ABOUT } from "@/lib/constants";

const AvatarDropdown = () => {
	// State to manage dropdown open/close status
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Function to handle clicks outside the dropdown
	const handleClicksOutsideDropdown = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setDropdownOpen(false);
		}
	};

	// Function to handle Escape key press to close the dropdown
	const handleEscDropdown = (event) => {
		if (event.key === "Escape") {
			setDropdownOpen(false);
		}
	};

	// Effect to manage event listeners for closing the dropdown
	useEffect(() => {
		if (dropdownOpen) {
			window.addEventListener("click", handleClicksOutsideDropdown);
			window.addEventListener("keydown", handleEscDropdown);
		} else {
			window.removeEventListener("click", handleClicksOutsideDropdown);
			window.removeEventListener("keydown", handleEscDropdown);
		}

		// Cleanup function to remove event listeners
		return () => {
			window.removeEventListener("click", handleClicksOutsideDropdown);
			window.removeEventListener("keydown", handleEscDropdown);
		};
	}, [dropdownOpen]);

	// Function to toggle the dropdown open state
	const toggleDropdownOpen = () => {
		setDropdownOpen((prev) => !prev);
	};

	return (
		<div
			tabIndex={0}
			aria-haspopup='true'
			aria-expanded={dropdownOpen}
			className={styles["avatar-dropdown"]}
			ref={dropdownRef}
		>
			<button
				onClick={toggleDropdownOpen}
				className={styles["avatar-dropdown__button"]}
			>
				<div className={styles["avatar-dropdown__avatar"]}>
					<Image
						src={ABOUT.avatar}
						height={64}
						width={64}
						alt='Jordi Paradelo - Freelance Designer & Developer'
						className={styles["avatar-dropdown__avatar-image"]}
					/>
				</div>
				<ArrowDownIcon />
			</button>

			<div
				role='menu'
				aria-hidden={!dropdownOpen}
				hidden={!dropdownOpen}
				className={styles["avatar-dropdown__menu"]}
			>
				{/* Contact Details */}
				<div className={styles["avatar-dropdown__menu-block"]}>
					<h2 className={styles["avatar-dropdown__menu-title"]}>
						Contact details
					</h2>
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
					<h2 className={styles["avatar-dropdown__menu-title"]}>
						Business details
					</h2>
					<ul className={styles["avatar-dropdown__menu-list"]}>
						<li className={styles["avatar-dropdown__menu-list-item"]}>
							<span>{ABOUT.business.name}</span>
						</li>
						<li className={styles["avatar-dropdown__menu-list-item"]}>
							<span>Vat ID: {ABOUT.business.vatId}</span>
						</li>
						<li className={styles["avatar-dropdown__menu-list-item"]}>
							<span>Location: {ABOUT.business.location}</span>
						</li>
					</ul>
				</div>

				{/* Social Media Links */}
				<div className={styles["avatar-dropdown__menu-block"]}>
					<h2 className={styles["avatar-dropdown__menu-title"]}>Socials</h2>
					<ul className={styles["avatar-dropdown__menu-list"]}>
						{ABOUT.socials.map((contact) => (
							<li
								key={contact.id}
								className={styles["avatar-dropdown__menu-list-item"]}
							>
								<a
									className={styles["avatar-dropdown__menu-link"]}
									href={contact.href}
								>
									{contact.title}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Additional Actions */}
				<div className={styles["avatar-dropdown__menu-actions"]}>
					<Button>Download CV</Button>
				</div>
			</div>
		</div>
	);
};

export default AvatarDropdown;
