"use client";
// ModalContext.js
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
} from "react";

const ModalContext = createContext(undefined);

export const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useMenuContext must be used within a MenuProvider");
	}
	return context;
};

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalComponent, setModalComponent] = useState(null);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const toggleModal = () => setIsModalOpen((prevState) => !prevState);

	useEffect(() => {
		if(isModalOpen === false) {
			setModalComponent(null)
		}
	}, [isModalOpen]);

	return (
		<ModalContext.Provider
			value={{ isModalOpen, openModal, closeModal, toggleModal, setModalComponent }}
		>
			{children}
			{isModalOpen && (
				<div className='modal' onClick={() => closeModal}>{modalComponent && modalComponent}</div>
			)}
		</ModalContext.Provider>
	);
};

export const useModal = (component) => {
	const { isModalOpen, openModal, closeModal, toggleModal, setModalComponent } = useModalContext();
	// Add your logic to trigger the menu based on scroll position or any other condition
	return { isModalOpen, openModal, closeModal, toggleModal , setModalComponent};
};
