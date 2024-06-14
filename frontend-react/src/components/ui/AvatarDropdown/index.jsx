"use client";

import { useEffect, useRef, useState } from "react";
// Styles
import styles from "./styles.module.scss";
// Assets
import ArrowDownIcon from "@/public/assets/chevron-down.svg";
import { Button } from "..";

const AvatarDropdown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Function to handle clicks outside the dropdown
	const handleClicksOutsideDropdown = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setDropdownOpen(false);
		}
	};

	// Function to handle Escape key press
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
					{/* <Avatar /> */}
				</div>
				<ArrowDownIcon />
			</button>

			<div
				role='menu'
				aria-hidden={!dropdownOpen}
				hidden={!dropdownOpen}
				className={styles["avatar-dropdown__menu"]}
			>
				{/* <Menu /> */}
				<div className={styles["avatar-dropdown__menu-header"]}>
					<p>Jordi Paradelo Palazzo</p>
					<p className="text-size-small text-color-gray">im.jordiparadelo@gmail.com</p>
				</div>

				<div className={styles["avatar-dropdown__menu-actions"]}>
					<Button>Download CV</Button>
				</div>
			</div>
		</div>
	);
};

export default AvatarDropdown;
