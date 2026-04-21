import { Button } from "@/components/ui";
import { ABOUT } from "@/lib/constants";

interface ContactButtonProps {
	children: React.ReactNode;
}

const ContactButton: React.FC<ContactButtonProps> = ({ children }) => {
	const href = ABOUT.contact.find((object) => {
		return object.id === "email";
	})?.props.href;

	return <Button href={href}>{children}</Button>;
};

export default ContactButton;
