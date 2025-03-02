"use client";
// Components
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// Styles
import "./styles.scss";

interface ContactButtonProps {
	children: React.ReactNode;
	className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ children, className }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push('?modal=true&type=contact');
		console.log("clicked");
	}

	return (
		<Button
			className={cn("contact-button", className)}
			onClick={handleClick}
		>
			{children}
		</Button>
	);
};

export default ContactButton;
