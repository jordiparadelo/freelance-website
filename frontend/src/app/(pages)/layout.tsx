import { Navbar, Modal } from "@/components/layouts";
import { Suspense } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
			<Suspense fallback="...loading">
				<Modal />
			</Suspense>
		</>
	);
};

export default layout;
