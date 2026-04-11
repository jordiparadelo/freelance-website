"use client";

import { useRef } from "react";
import type { Capability } from "@/types";
import { useCapabilities } from "./context";
import styles from "./styles.module.css";

const CapabilityList = ({ data }: { data: Capability[] }) => {
	const { activeCapability, changeCapability } = useCapabilities();
	const componentRef = useRef<HTMLUListElement | null>(null);

	const handleClick = (activeIndex: number) => {
		if (activeIndex === activeCapability) {
			changeCapability(null);
		} else {
			changeCapability(activeIndex);
		}
	};

	return (
		<ul className={styles["capabilities_list"]} ref={componentRef}>
			{data?.map((capability, index) => {
				return (
					<li
						key={capability?.name}
						className={styles["capabilities_item"]}
						data-selected={activeCapability === index}
						onClick={() => handleClick(index)}
						onKeyUp={() => handleClick(index)}
					>
						{capability.name}
					</li>
				);
			})}
		</ul>
	);
};

export default CapabilityList;
