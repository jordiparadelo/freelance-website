import { useEffect, useCallback } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface UseModalReturn {
	closeModal: () => void;
	showModal: string | null;
	params: (string | null)[] | null;
	pathname: string;
}

const useModal = (params: string[]): UseModalReturn => {
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
		const handleKeyDown = (event: KeyboardEvent) => {
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
			document.body.style.overflow = "auto";
		};
	}, [showModal, closeModal]);

	return {
		closeModal,
		showModal,
		params: params?.map((param) => searchParams.get(param)) || null,
		pathname,
	};
};

export default useModal;
