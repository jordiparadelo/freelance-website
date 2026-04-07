import { ContactButton } from "@/components/ui";
import styles from "./styles.module.scss";

const NavActions = () => {
  return (
    <div className={styles["navbar-actions"]}>
      <ContactButton>Get in touch</ContactButton>
    </div>
  );
};

export default NavActions;
