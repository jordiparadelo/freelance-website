"use client"

import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import './styles.scss'

type ButtonProps = {
  children?: ReactNode,
  secondLabel?: string,
  href?: string,
  type?: "submit" | "reset" | "button" | undefined,
  className?: string | "", 
}

const Button = ({children, href, type, className}: ButtonProps) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    href && router.push(href)
  }

  return (
    <button className={`button ${className || ""}`} onClick={handleClick} type={type}>{children || 'Button Label'}</button>
  )
}

export default Button;