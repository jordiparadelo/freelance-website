"use client";
// ModalContext.js
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface MenuContextProps {
	isModalOpen?: boolean;
	openModal?: () => void;
	closeModal?: () => void;
	toggleModal?: () => void;
}

const ModalContext = createContext<MenuContextProps | undefined>(undefined);

export const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useMenuContext must be used within a MenuProvider");
	}
	return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [modalComponent, setModalComponent] = useState(null);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const toggleModal = () => setIsModalOpen((prevState) => !prevState);

	useEffect(() => {
		toggleModal()
	}, [isModalOpen]);


	return (
		<ModalContext.Provider
			value={{ isModalOpen, openModal, closeModal, toggleModal }}
		>
			{children}
			{isModalOpen && (
				<div className='modal'>{modalComponent && modalComponent}</div>
			)}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const { isModalOpen, openModal, closeModal, toggleModal } = useModalContext();
	// Add your logic to trigger the menu based on scroll position or any other condition
	return { isModalOpen, openModal, closeModal, toggleModal };
};
