import { useEffect, useCallback } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const useModal = (params) => {

	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	// State
	const showModal = searchParams.get("modal");

	// Methods
	const closeModal = useCallback(() => {
		router.push(pathname, { scroll: false });
	}, [router, pathname]);

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
	}, [showModal, closeModal]);

	return ({
		closeModal,
		showModal,
		params: params?.map((param) => searchParams.get(param)) || null,
		pathname,
	});
};

export default useModal;
