"use client";

import React from "react";
import useModal from "@/hooks/useModal";

const CloseModalButton = ({ children }) => {

	const {closeModal} = useModal()

	return <button onClick={closeModal} style={{cursor: 'pointer'}}>{children}</button>;
};

export default CloseModalButton;
