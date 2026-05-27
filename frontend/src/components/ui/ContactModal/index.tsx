"use client";

import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { type FormEvent, useEffect, useRef } from "react";
import { Button, ContactForm } from "@/components/ui";

import styles from "./styles.module.scss";
import "./styles.scss";

const ContactModal = () => {
  const searchParams = useSearchParams();
  const services = searchParams.get("services");
  const contactModalRef = useRef<HTMLFormElement | null>(null);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const elements = form.elements as HTMLFormControlsCollection & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      company: HTMLInputElement;
      message: HTMLTextAreaElement;
    };
    const selectedServices = [
      ...form.querySelectorAll<HTMLInputElement>(
        "input[type='checkbox']:checked",
      ),
    ].map((el) => el.value);
    posthog.capture("contact_form_submitted", {
      services: selectedServices,
      has_company: elements.company.value.trim().length > 0,
      has_message: elements.message.value.trim().length > 0,
    });
  }

  useEffect(() => {
    if (!services) return;
    const servicesArray = services.split(",");
    const formElements = contactModalRef.current
      ? [...contactModalRef.current.elements]
      : null;

    servicesArray.forEach((service) => {
      if (!formElements) return;
      const element = formElements.find(
        (formElement) =>
          (formElement as HTMLInputElement).defaultValue === service,
      ) as HTMLInputElement;
      if (element) {
        element.checked = true;
      }
    });
  }, [services]);

  return (
    <div className={styles["contact-modal"]}>
      <h2 className={styles["contact-modal__title"]}>
        Got an idea? Let&apos;s discuss!
      </h2>
      <ContactForm
        className={styles["contact-modal__form"]}
        ref={contactModalRef}
        onSubmit={handleFormSubmit}
      >
        <div className="form__row">
          <div className="form__group">
            <label htmlFor="name">What&apos;s your name?</label>
            <input type="text" name="name" placeholder="Your Name" />
          </div>
          <div className="form__group">
            <label htmlFor="name">What&apos;s your email?</label>
            <input type="text" name="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="company">
            What&apos;s the name of your organization?
          </label>
          <input type="text" name="company" placeholder="Your Email" />
        </div>
        <div className="form__group contact-modal__services">
          <p>What services are you looking for?</p>
          <div className="contact-modal__services-grid">
            <label
              htmlFor="contact-service_development"
              className="form__checkbox"
            >
              <input
                type="checkbox"
                value="development"
                name="services_contact"
                id="contact-service_development"
              />
              <span className="active-light"></span>
              <p>Development</p>
            </label>
            <label
              htmlFor="contact-service_product-design"
              className="form__checkbox"
            >
              <input
                type="checkbox"
                value="product-design"
                name="services"
                id="contact-service_product-design"
              />
              <span className="active-light"></span>
              <p>Product Design</p>
            </label>
            <label
              htmlFor="contact-service_branding"
              className="form__checkbox"
            >
              <input
                type="checkbox"
                value="branding"
                name="services"
                id="contact-service_branding"
              />
              <span className="active-light"></span>
              <p>Branding</p>
            </label>
            <label
              htmlFor="contact-service_graphic-design"
              className="form__checkbox"
            >
              <input
                type="checkbox"
                value="graphic-design"
                name="services"
                id="contact-service_graphic-design"
              />
              <span className="active-light"></span>
              <p>Graphic design</p>
            </label>
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="message">Your message</label>
          <textarea name="message" placeholder="Your Message" />
        </div>
        <Button type="submit">Submit</Button>
      </ContactForm>
    </div>
  );
};

export default ContactModal;
