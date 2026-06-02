// Component
import {
  ButtonScrollTop,
  ContactButton,
  Container,
  Section,
} from "@/components/ui";
import { getSocialLinks } from "@/lib/db";
// Animations
import FooterCopyright from "./FooterCopyright";
import FooterSocialLinks from "./FooterSocialLinks";
// Styles
import styles from "./styles.module.scss";

const Footer = async () => {
  const [socialLinks, contactLink] = await Promise.all([
    getSocialLinks({
      filters: [
        {
          operator: "$eq",
          field: "type",
          value: "website",
        },
      ],
      sort: [
        {
          field: "displayName",
          order: "asc",
        },
      ],
    }),
    getSocialLinks({
      filters: [
        {
          operator: "$eq",
          field: "type",
          value: "email",
        },
      ],
      pagination: {
        limit: 1,
      },
    }),
  ]);

  return (
    <Section tag="footer" className={styles.footer} id="footer">
      <Container>
        <div className={styles.footer__layout}>
          {/* Banner */}

          <div className={styles.footer__banner}>
            <div className={styles.footer__banner__layout}>
              <h2 className={styles.footer__banner__title}>
                Let&apos;s create something great together
              </h2>
              <ContactButton href={`mailto:${contactLink[0].href}`}>
                Get in touch
              </ContactButton>

              {/* Social links */}
            </div>
          </div>

          {/* Bottom */}

          <div className={styles.footer__bottom}>
            <FooterCopyright />
            <FooterSocialLinks links={socialLinks} />
            <ButtonScrollTop />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
