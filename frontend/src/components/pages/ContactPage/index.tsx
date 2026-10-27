"use client";

import { ContactForm, Container, Section } from "@/components/ui";
import styles from "./styles.module.css";

const CONTACT_DETAILS = [
  "email@example.com",
  "(555) 555-5555",
  "123 Demo Street",
  "New York, NY 12345",
];

const ContactPage = () => {

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
              <ContactForm className={styles["contact__form"]}/>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default ContactPage;
