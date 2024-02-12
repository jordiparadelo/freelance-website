import React from 'react'
import "./styles.scss"

interface ContactButton {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ContactButton = (props: ContactButton) => {
  return (
    <button className="contactButton">{props.label}</button>
  )
}

export default ContactButton