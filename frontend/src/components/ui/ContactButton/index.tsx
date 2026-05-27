import type React from "react";
import { Button } from "@/components/ui";

// import type { SocialLink } from "@/lib/types";

interface ContactButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const ContactButton = ({ children, href, onClick }: ContactButtonProps) => {
  return href ? (
    <Button target="_blank" href={href} onClick={onClick}>
      {children}
    </Button>
  ) : (
    <Button target="_blank" onClick={onClick}>
      {children}
    </Button>
  );
};

export default ContactButton;
