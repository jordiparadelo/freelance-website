"use client";
import { ProjectModal, ProjectModalLoading } from "@/components";
// import useFetchProjects from "@/hooks/useFetchProjects";

import React, { Suspense, useEffect } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

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
	const router = useRouter();
	const searchParams = useSearchParams();
	const showModal = searchParams.get("modal");
	const type = searchParams.get("type");
	const id = searchParams.get("id");
	const pathname = usePathname();

	const MODAL_CHILD_TYPE = {
		project: {
			component: <ProjectModal />,
			loading: <ProjectModalLoading />,
		},
		product: {
			component: "<p>ProductModal</p>",
			loading: "ProjectModal",
		},
	};

	const component = MODAL_CHILD_TYPE[type]?.component || null;
	const loading = MODAL_CHILD_TYPE[type]?.loading || null;

	// Methods
	function closeModal() {
		router.push(pathname, { scroll: false });
	}

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") closeModal();
		};

		if (showModal) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [showModal]);

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
