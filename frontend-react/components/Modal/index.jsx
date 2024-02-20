"use client";
import {
	ContactModal,
	NavMenu,
	ProjectModal,
	ProjectModalLoading,
} from "@/components";
// import useFetchProjects from "@/hooks/useFetchProjects";

import React, { Suspense, useEffect } from "react";
// Next.js
// import { useSearchParams, usePathname, useRouter } from "next/navigation";
// Hooks
import useModal from "@/hooks/useModal";
// Styles
import "./styles.scss";

//Animation
const animationProps = {
	initial: {
		transform: "translateY(50%)",
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transform: "translateY(0)",
	},
	exit: { transform: "translateY(100%)", opacity: 0 },
};

const Modal = (props) => {
	const { params, closeModal, showModal } = useModal(["type", "id"]);
	const [type] = params;

	const MODAL_CHILD_TYPE = {
		project: {
			component: <ProjectModal />,
			loading: <ProjectModalLoading />,
		},
		product: {
			component: "<p>ProductModal</p>",
			loading: "ProjectModal",
		},
		contact: {
			component: <ContactModal />,
			loading: "ProjectModal",
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
// const Modal = (props) => {
// 	const router = useRouter();
// 	const searchParams = useSearchParams();
// 	const showModal = searchParams.get("modal");
// 	const type = searchParams.get("type");
// 	const pathname = usePathname();

// 	const MODAL_CHILD_TYPE = {
// 		project: {
// 			component: <ProjectModal />,
// 			loading: <ProjectModalLoading />,
// 		},
// 		product: {
// 			component: "<p>ProductModal</p>",
// 			loading: "ProjectModal",
// 		},
// 		contact: {
// 			component: <ContactModal />,
// 			loading: "ProjectModal",
// 		}
// 	};

// 	const component = MODAL_CHILD_TYPE[type]?.component || null;
// 	const loading = MODAL_CHILD_TYPE[type]?.loading || <p>Loading...</p>;

// 	// Methods
// 	function closeModal() {
// 		router.push(pathname, { scroll: false });
// 	}

// 	useEffect(() => {
// 		const handleKeyDown = (event) => {
// 			if (event.key === "Escape") closeModal();
// 		};

// 		if (showModal) {
// 			document.body.style.overflow = "hidden";
// 			window.addEventListener("keydown", handleKeyDown);
// 		} else {
// 			document.body.style.overflow = "auto";
// 		}

// 		return () => {
// 			window.removeEventListener("keydown", handleKeyDown);
// 		};
// 	}, [showModal]);

// 	return (
// 		showModal && (
// 			<>
// 				<div className='modal'>
// 					{component && <Suspense fallback={loading}>{component}</Suspense>}
// 					<div
// 						className='modal__overlay'
// 						onClick={closeModal}
// 					></div>
// 				</div>
// 			</>
// 		)
// 	);
// };

export default Modal;
