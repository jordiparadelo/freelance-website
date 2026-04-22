"use client";

import type React from "react";
// Hooks
import useModal from "@/hooks/useModal";
import { cn } from "@/lib/utils";

interface CloseModalButtonProps {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  children,
  className,
  "aria-label": ariaLabel,
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
