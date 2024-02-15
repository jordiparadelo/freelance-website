"use client";
import React, { useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ProjectDetail } from "@/components";
import "./styles.scss";

const Modal = () => {
	const searchParams = useSearchParams();
	const modal = searchParams.get("modal");
	const id = searchParams.get("id");
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.body.style.overflow = modal ? "hidden" : "auto";
		}
	}, [modal]);

	function closeModal() {
		router.push(pathname, { scroll: false });
	}

	return (
		<>
			{modal && (
				<>
					<div className='modal'>
						{id && <ProjectDetail id={id} />}
						<div
							className='modal__overlay'
							onClick={closeModal}
						></div>
					</div>
				</>
			)}
		</>
	);
};

export default Modal;
