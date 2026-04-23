import { AnimatedParagraph, Container, Curves, Section } from "@/components/ui";
import { getStrapiData } from "@/lib/strapi";
import BusinessMarquee from "../BusinessMarquee";
import { PROCESS_STEPS } from "./data";
import ProcessApproach from "./ProcessApproach";
import styles from "./styles.module.css";

const ApproachSection = async () => {
  const query =
    "/api/projects?sort[0]=details.year:desc&sort[1]=title:asc&fields[0]=id&populate[details][fields][0]=id&populate[details][fields][1]=client&populate[details][fields][2]=preview&populate[details][populate][logo][fields][0]=url&populate[details][populate][logo][fields][1]=width&populate[details][populate][logo][fields][2]=height&status=published";
  const { data: BUSINESS } = await getStrapiData(query);

  return (
    <Section id="approach" className={styles["approach-section"]}>
      <Curves fill="var(--background-color--base)" orientation="top" />
      <Container>
        <div className={styles["approach-section_layout"]}>
          <aside className={styles["approach-section_header"]}>
            <span className="heading-style-uppercase">My Process</span>
            <AnimatedParagraph className="heading-style-h2">
              I follow a systematic process that stat by understanding the DNA
              of your company, the designing its considered identity by using
              design as a solution
            </AnimatedParagraph>
            <div className={styles["approach-section_business"]}>
              {/* <BusinessMarquee /> */}
              <div className={styles["approach-section_business"]}>
                <div className={styles["approach-section_business_header"]}>
                  {/* <div className="divider"></div> */}
                  <span>Trusted by</span>
                  <div className="divider"></div>
                </div>
                <BusinessMarquee business={BUSINESS} />
              </div>
            </div>
          </aside>
          <div className={styles["approach-section_content"]}>
            <ProcessApproach steps={PROCESS_STEPS} />
          </div>
        </div>
      </Container>
      <Curves fill="var(--background-color--base)" orientation="bottom" />
    </Section>
  );
};

export default ApproachSection;
