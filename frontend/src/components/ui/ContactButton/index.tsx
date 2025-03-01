// Components
import Link from "next/link";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

// Styles
import "./styles.scss";

interface ContactButtonProps {
	label: string;
	className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ label, className }) => {
	return (
		<Link
			href='?modal=true&type=contact'
			scroll={false}
		>
			<Button className={cn("contact-button", className)}>{label}</Button>
		</Link>
	);
};

export default ContactButton;
