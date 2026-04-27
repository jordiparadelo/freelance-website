"use client";
import { useLayoutEffect, useState } from "react";
import styles from "./styles.module.scss";

const FooterCopyright = () => {
  const [currentYear, setCurrentYear] = useState<null | number>(null);

  useLayoutEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return <div className={styles.footer__copyright}>© {currentYear}</div>;
};

export default FooterCopyright;
