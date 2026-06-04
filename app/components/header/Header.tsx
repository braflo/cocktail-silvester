import React from "react"
import "./header.css"
import { Icon } from "./Icon";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Icon />
        <h1>Speakeasy</h1>
      </div>
    </header>
  )
}
export { Header }
