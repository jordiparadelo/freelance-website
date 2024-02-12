"use client";
import React , {useEffect, useState} from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {ProjectDetail} from '@/components'
import './styles.scss'

const Modal = () => {
	const [open, setOpen] = useState(false)
	// usePreserveScroll();

	const searchParams = useSearchParams();
	const modal = searchParams.get("modal");
	const id = searchParams.get("id");
	const pathname = usePathname();
	const router = useRouter()

	useEffect(() => {
		setOpen((prevState) => !prevState);
	},[modal])

	function closeModal() {
		router.push(pathname, { scroll: false });
	}

	return (
		<>
			{open && (
				<>
				<div className="modal">
				{id && <ProjectDetail id={id}/>}
				<div className="modal__overlay" onClick={closeModal}>	
				</div>
				</div>
				</>
			)}
		</>
	);
};

export default Modal;
