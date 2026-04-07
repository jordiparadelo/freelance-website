import Computer from "@/assets/animated-icons/selected-work.json";
import { SectionLabel } from "@/components/ui";
import { getLimitedProjects } from "@/lib/actions";
import ProjectsList from "./ProjectsList";
// Styles
import styles from "./styles.module.scss";

const SelectedProjects = async () => {
  const response = await getLimitedProjects(10);
  const projects = response?.data ?? [];

  return (
    <section id="selected-works" className={styles["selected-projects"]}>
      <div className="padding-global --section-large">
        <div className="container">
          <div className={styles["selected-projects__layout"]}>
            <div className={styles["selected-projects__heading"]}>
              <div className={styles["selected-projects__title-wrapper"]}>
                <SectionLabel
                  label="Selected projects"
                  animationData={Computer}
                />
                <h2 className={styles["section-header__title"]}>
                  Check out the last projects
                </h2>
              </div>
            </div>
            <ProjectsList projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
