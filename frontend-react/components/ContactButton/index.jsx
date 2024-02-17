import React from 'react'

// Components
import { Button } from '@/components';

// Styles
import "./styles.scss"

const ContactButton = (props) => {
  return (
    <Button className="contactButton">{props.label}</Button>
  )
}

export default ContactButton