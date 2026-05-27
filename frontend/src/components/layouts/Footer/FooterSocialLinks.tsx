"use client";

import posthog from "posthog-js";
import styles from "./styles.module.scss";

interface SocialLink {
  href: string;
  displayName: string;
}

const FooterSocialLinks = ({ links }: { links: SocialLink[] }) => {
  function handleSocialLinkClick(displayName: string, href: string) {
    posthog.capture("footer_social_link_clicked", {
      platform: displayName,
      url: href,
    });
  }

  return (
    <ul className={styles["footer__social-link-list"]}>
      {links.map((link) => (
        <li key={link.href} className={styles["footer__social-link-list-item"]}>
          <a
            href={link.href}
            target="_blank"
            className={styles["footer__social-link"]}
            onClick={() => handleSocialLinkClick(link.displayName, link.href)}
          >
            {link.displayName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialLinks;
