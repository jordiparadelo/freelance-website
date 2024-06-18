"use client";
import {
	ContactModal,
	ProjectModal,
} from "@/ui";
import React, { Suspense } from "react";
// Hooks
import useModal from "@/hooks/useModal";
// Styles
import "./styles.scss";

const Modal = () => {
	const { params, closeModal, showModal } = useModal(["type", "id"]);
	const [type] = params;

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
	};

	const component = type ? MODAL_CHILD_TYPE[type]?.component : null;
	const loading = type ? MODAL_CHILD_TYPE[type]?.loading : <p>Loading...</p>;

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
