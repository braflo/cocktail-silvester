import React from "react"
import Link from "next/link"
import "./header.css"
import { Icon } from "./Icon";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/" aria-label="Back to home">
          <Icon />
        </Link>
        <h1>Speakeasy</h1>
      </div>
    </header>
  )
}
export { Header }
