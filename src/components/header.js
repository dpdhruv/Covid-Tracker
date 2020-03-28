import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import React from "react"
import { ThemeContext } from "./utils/ThemeContext"
import "./layout.scss"
const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <header className="header">
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        <FontAwesomeIcon icon={faMoon} onClick={()=>theme.changeTheme()} />
      </header>
    )}
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
