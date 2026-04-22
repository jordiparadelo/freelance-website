import type React from "react";
import { Button } from "@/components/ui";

// import type { SocialLink } from "@/lib/types";

interface ContactButtonProps {
	children: React.ReactNode;
	href?: string;
}

const ContactButton = ({ children, href }: ContactButtonProps) => {
	return href ? (
		<Button target="_blank" href={href}>
			{children}
		</Button>
	) : (
		<Button target="_blank">{children}</Button>
	);
};

export default ContactButton;
