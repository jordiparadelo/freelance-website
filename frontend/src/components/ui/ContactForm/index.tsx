import React, { type ForwardRefRenderFunction } from "react";
import "./styles.scss";

interface ContactFormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: ForwardRefRenderFunction<
  HTMLFormElement,
  ContactFormProps
> = ({ children, className, onSubmit }, ref) => {
  return (
    <form className={`form ${className}`} ref={ref} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default React.forwardRef(ContactForm);
