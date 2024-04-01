"use client";

import React from "react";
// Hooks
import useModal from "@/hooks/useModal";

const CloseModalButton = ({ children }) => {

	const {closeModal} = useModal()

	return <button onClick={closeModal} style={{cursor: 'pointer'}}>{children}</button>;
};

export default CloseModalButton;
