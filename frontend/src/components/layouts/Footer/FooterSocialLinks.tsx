import styles from "./styles.module.scss";

interface SocialLink {
  href: string;
  displayName: string;
}

const FooterSocialLinks = ({ links }: { links: SocialLink[] }) => {
  return (
    <ul className={styles["footer__social-link-list"]}>
      {links.map((link) => (
        <li key={link.href} className={styles["footer__social-link-list-item"]}>
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
  );
};

export default FooterSocialLinks;
