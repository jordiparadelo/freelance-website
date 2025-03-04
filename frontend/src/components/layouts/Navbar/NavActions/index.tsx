import React from 'react'
import styles from "./styles.module.scss"
import { ContactButton } from "@/components/ui"

const NavActions = () => {
  return (
    <div className={styles["navbar-actions"]}>
        <ContactButton>Get in touch</ContactButton>
    </div>
  )
}

export default NavActions