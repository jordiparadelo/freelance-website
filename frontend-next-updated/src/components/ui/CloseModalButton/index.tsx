"use client";

import React from "react";
import { cn } from "@/lib/utils";
// Hooks
import useModal from "@/hooks/useModal";

interface CloseModalButtonProps {
	children: React.ReactNode;
	className?: string;
	'aria-label'?: string;
}

const CloseModalButton: React.FC<CloseModalButtonProps> = ({ 
	children, 
	className,
	'aria-label': ariaLabel 
}) => {
	const { closeModal } = useModal([]);

	return (
		<button
			onClick={closeModal}
			className={cn("close-modal-button", className)}
			aria-label={ariaLabel || "Close modal"}
			type="button"
		>
			{children}
		</button>
	);
};

export default CloseModalButton;
