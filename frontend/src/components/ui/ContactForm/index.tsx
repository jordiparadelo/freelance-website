import React, { type ForwardRefRenderFunction } from "react";
import "./styles.scss";

interface ContactFormProps {
  children: React.ReactNode;
  className?: string;
}

const ContactForm: ForwardRefRenderFunction<
  HTMLFormElement,
  ContactFormProps
> = ({ children, className }, ref) => {
  return (
    <form className={`form ${className}`} ref={ref}>
      {children}
    </form>
  );
};

export default React.forwardRef(ContactForm);
