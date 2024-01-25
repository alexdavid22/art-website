"use client"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import Link from "next/link"
import "../globals.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <FiMenu className="hamburger" onClick={() => setIsOpen(!isOpen)} />
      <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <Link href="/" className="navbar-link">
            Acasa
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/expozitie/expuse" className="navbar-link">
            Expozitie cu vanzare
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact" className="navbar-link">
            Constignatie
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact" className="navbar-link">
            Istoria artei
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact" className="navbar-link">
            Noutati
          </Link>
        </li>
      </ul>
    </nav>
  )
}
