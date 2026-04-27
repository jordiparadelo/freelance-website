// Component
import { ButtonScrollTop, ContactButton } from "@/components/ui";
import { getSocialLinks } from "@/lib/db";
// Animations
import FooterCopyright from "./FooterCopyright";
// Styles
import styles from "./styles.module.scss";

const Footer = async () => {
  const links = await getSocialLinks({
    filter: {
      operator: "equal",
      field: "type",
      value: "website",
    },
  });

  return (
    <footer className={styles.footer}>
      <div className="padding-global">
        <div className="container">
          <div className={styles.footer__layout}>
            {/* Banner */}

            <div className={styles.footer__banner}>
              <div className={styles.footer__banner__layout}>
                <h2 className={styles.footer__banner__title}>
                  Let&apos;s create something great together
                </h2>
                <ContactButton>Get in touch</ContactButton>

                {/* Social links */}
              </div>
            </div>

            {/* Bottom */}

            <div className={styles.footer__bottom}>
              <FooterCopyright />
              <ul className={styles["footer__social-link-list"]}>
                {links.map((link) => (
                  <li
                    key={link.href}
                    className={styles["footer__social-link-list-item"]}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      className={styles["footer__social-link"]}
                    >
                      {link.displayName}
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonScrollTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
