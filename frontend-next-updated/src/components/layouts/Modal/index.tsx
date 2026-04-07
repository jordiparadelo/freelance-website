"use client";

import React, { Suspense, useEffect } from "react";
// Components
import ProjectModal from "./ProjectModal";
import ContactModal from "./ContactModal";
// Hooks
import useModal from "@/hooks/useModal";
// Styles
import "./styles.scss";
import { useScroll } from "@/context/ScrollContext";

type ModalType = "project" | "product" | "contact";

const MODAL_CHILD_TYPE = {
	project: {
		component: <ProjectModal />,
		loading: "Loading...",
	},
	product: {
		component: "<p>ProductModal</p>",
		loading: "Loading...",
	},
	contact: {
		component: <ContactModal />,
		loading: "Loading...",
	},
} as const;

const Modal = () => {
	const { params, closeModal, showModal } = useModal(["type", "id"]);
	const [type] = params as [ModalType | undefined];
	const { lenis } = useScroll();

	const component = type ? MODAL_CHILD_TYPE[type]?.component : null;
	const loading = type ? MODAL_CHILD_TYPE[type]?.loading : <p>Loading...</p>;

	useEffect(() => {
		if (showModal) {
			lenis?.stop();
		} else {
			lenis?.start();
		}
	}, [showModal, lenis]);

	return (
		showModal && (
			<>
				<div className='modal'>
					{component && <Suspense fallback={loading}>{component}</Suspense>}
					<div
						className='modal__overlay'
						onClick={closeModal}
					></div>
				</div>
			</>
		)
	);
};

export default Modal;
