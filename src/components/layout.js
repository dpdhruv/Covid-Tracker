/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React , {Component} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "./utils/ThemeContext"
import Header from "./header"
import "./layout.scss"


class Layout extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      theme: "dark",
      changeTheme: this.changeTheme,       
    }
  }
  
  changeTheme = () =>{
    this.setState({
      ...this.state,
      theme: this.state.theme==='dark'?'light':'dark',
    })
  }



  render() {
    const {children} = this.props;
    return (
      <ThemeContext.Provider value={this.state}>
        <div className={`base-${this.state.theme}`}>
          <Header siteTitle="Corona Tracker" />
          <div className="main">{children}</div>
        </div>
      </ThemeContext.Provider>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;