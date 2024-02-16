import React from 'react'

// Components
import { Button } from '@/components';

// Styles
import "./styles.scss"

interface ContactButton {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ContactButton = (props: ContactButton) => {
  return (
    <Button className="contactButton">{props.label}</Button>
  )
}

export default ContactButton