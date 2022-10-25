import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  //capitalize the components names!!
  // the useStaticQuery might throw errors
  // create query name for graphql queries
  const data = useStaticQuery(graphql`
    query SiteInfos {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
