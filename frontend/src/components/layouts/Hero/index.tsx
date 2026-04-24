import { ContactButton, Container } from "@/components/ui";
import { getStrapiData } from "@/lib/strapi";
import Banner from "../Banner";
import styles from "./styles.module.scss";

const Hero = async () => {
  const query =
    "/api/hero-section?fields%5B0%5D=subtitle&fields%5B1%5D=title&fields%5B2%5D=description&populate%5Bfields%5D%5B0%5D=id&populate%5Bsocial_link%5D%5Bfields%5D%5B0%5D=href&status=published&locale%5B0%5D=en";
  const { data } = await getStrapiData(query);

  const {
    title,
    subtitle,
    description,
    social_link: { href },
  } = data;
  return (
    <header className={styles.hero} id="hero">
      <Container>
        <div className={styles.hero__frame}>
          <div className={styles["hero__frame-container-wrapper"]}>
            <div className={styles["hero__frame-container"]}>
              <div className={styles.hero__layout}>
                <div className={styles["hero__heading-wrapper"]}>
                  <div className={styles.hero__label}>{subtitle}</div>
                  <div className={styles["hero__title-wrapper"]}>
                    <h1
                      className={styles.hero__title}
                      aria-label="digital design on demand"
                    >
                      {title}
                    </h1>
                  </div>
                </div>
                <p className="text-size-medium">{description}</p>
                <div className={styles.hero__actions}>
                  <ContactButton href={`mailto:${href}`}>
                    Let&apos;s start a new project
                  </ContactButton>
                </div>
              </div>

              <Banner />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
