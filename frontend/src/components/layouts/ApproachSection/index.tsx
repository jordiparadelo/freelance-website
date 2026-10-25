import { BusinessMarquee } from "@/components/layouts";
import { AnimatedParagraph, Container, Curves, Section } from "@/components/ui";
import { getMarqueeProjects, getProcesses } from "@/lib/db";
import ProcessApproach from "./ProcessApproach";
import styles from "./styles.module.css";

const ApproachSection = async () => {
  const [BUSINESS, PROCESS_STEPS] = await Promise.all([
    getMarqueeProjects(),
    getProcesses({
      sort: [{ column: "sort_order", ascending: true }],
    }),
  ]);

  if (!BUSINESS || !PROCESS_STEPS) return null;

  return (
    <Section id="approach" className={styles["approach-section"]}>
      <Container>
        <div className={styles["approach-section_layout"]}>
          <div className={styles["approach-section_content"]}>
            <ProcessApproach steps={PROCESS_STEPS} />
          </div>
          <aside className={styles["approach-section_header"]}>
            <span className="heading-style-uppercase">My Process</span>
            <AnimatedParagraph className="heading-style-h2">
              I follow a systematic process that stat by understanding the DNA
              of your company, the designing its considered identity by using
              design as a solution
            </AnimatedParagraph>
            <div className={styles["approach-section_business"]}>
              <div className={styles["approach-section_business"]}>
                <div className={styles["approach-section_business_header"]}>
                  <span>Trusted by</span>
                  <div className="divider"></div>
                </div>
                <BusinessMarquee business={BUSINESS} />
              </div>
            </div>
          </aside>
        </div>
      </Container>
      <Curves fill="var(--background-color--base)" orientation="bottom" />
    </Section>
  );
};

export default ApproachSection;
