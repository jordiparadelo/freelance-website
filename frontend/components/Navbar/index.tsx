"use client"

import { useRef } from "react";
import { Logo, NavMenu, ContactButton } from "@/components";
import { NAV_LINKS } from "@/constants";
import './styles.scss';

const Navbar = () => {
    let navbarRef = useRef(null)
  return (
    <nav ref={navbarRef} className="navbar">
        <div className="container">
            <Logo/>
            <NavMenu navLinks={NAV_LINKS}/>
            <ContactButton label="Get in touch"/>
        </div>
    </nav>
  )
}

export default Navbar