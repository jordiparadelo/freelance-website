import { ContactButton, Container } from "@/components/ui";
import { getStrapiData } from "@/lib/strapi";
import Banner from "../Banner";
import styles from "./styles.module.scss";

const Hero = async () => {
  const query =
    "/api/hero-section?fields[0]=subtitle&fields[1]=title&fields[2]=description&fields[3]=cta_text&populate[fields][0]=id&populate[social_link][fields][0]=href&status=published&locale[0]=en";
  const { data } = await getStrapiData(query);

  const {
    title,
    subtitle,
    description,
    social_link: { href },
    cta_text,
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
                    {cta_text}
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
