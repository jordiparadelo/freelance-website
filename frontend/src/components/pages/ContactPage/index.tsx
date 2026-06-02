"use client";

import { type FormEvent, useState } from "react";
import { Button, ContactForm, Container, Section } from "@/components/ui";
import styles from "./styles.module.css";

const CONTACT_DETAILS = [
  "email@example.com",
  "(555) 555-5555",
  "123 Demo Street",
  "New York, NY 12345",
];

const ContactPage = () => {
  const [formError, setFormError] = useState("");

  return (
    <main className={styles["contact"]}>
      <Section className={styles["contact__section"]}>
        <Container>
          <div className={styles["contact__panel"]}>
            <h1 className={styles["contact__title"]}>Contact me</h1>
            <div className={styles["contact__layout"]}>
              <div className={styles["contact__details"]}>
                {CONTACT_DETAILS.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <ContactForm className={styles["contact__form"]}>
                <div className="form__group">
                  <label
                    className={styles["contact__label"]}
                    htmlFor="contact-name"
                  >
                    Name (required)
                  </label>
                  <input
                    className={styles["contact__input"]}
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form__group">
                  <label
                    className={styles["contact__label"]}
                    htmlFor="contact-email"
                  >
                    Email (required)
                  </label>
                  <input
                    className={styles["contact__input"]}
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form__group">
                  <label
                    className={styles["contact__label"]}
                    htmlFor="contact-message"
                  >
                    Message (required)
                  </label>
                  <textarea
                    className={styles["contact__textarea"]}
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                  />
                </div>
                <input
                  className={styles["contact__honeypot"]}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />
                <Button type="submit">Submit</Button>
              </ContactForm>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default ContactPage;
