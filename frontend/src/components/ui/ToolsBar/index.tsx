"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Tool {
	id: string;
	name: string;
	icon: string;
	link: string;
	description: string;
}

interface ToolsBarProps {
	tools: Tool[];
}

const ToolsBar: React.FC<ToolsBarProps> = ({ tools }) => {
	const [activeTool, setActiveTool] = useState({
		tool: tools[0],
		isDialogOpen: false,
	});

	const handleClick = (id: string) => {
		setActiveTool((prev) => ({
			isDialogOpen: id !== activeTool.tool.id ? true : !prev.isDialogOpen,
			tool: tools.find((tool) => tool.id === id) as Tool,
		}));
	};

	return (
		<div className={styles["tools-bar"]}>
			{activeTool.isDialogOpen && (
				<div className={styles["tools-bar__dialog"]}>
					<div className={styles["tools-bar__dialog-header"]}>
						<Image
							width={20}
							height={20}
							src={activeTool.tool.icon}
							alt={activeTool.tool.name}
							className={styles["dialog-header_icon"]}
						/>
						<h3 className={styles["dialog-header_title"]}>
							{activeTool.tool.name}
						</h3>
					</div>
					<p className={styles["dialog-description"]}>{activeTool.tool.description}</p>
				</div>
			)}
			<div className={styles["tools__list"]}>
				{tools.map((tool) => (
					<button
						key={tool.name}
						className={styles["tools__item"]}
						aria-label={tool.name}
						onClick={() => handleClick(tool.id)}
						data-selected={activeTool.tool.id === tool.id}
					>
						<Image
							src={tool.icon}
							alt={tool.name}
							width={20}
							height={20}
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default ToolsBar;
