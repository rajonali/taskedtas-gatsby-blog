/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import "../styles/layout-overide.css";
import Media from 'react-media'
import { Helmet } from "react-helmet"




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
            {
                name: "description",
                content: "Sample"
            }, {
                name: "keywords",
                content: "sample, something"
            }
        ]}/>
        <Header/>
        <div
            style={{
            margin: "0 auto",
            maxWidth: 980,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "100%"
        }}>
            <Media query={{
                maxWidth: 848
            }}>
                {matches => matches
                    ? (
                        <div
                            style={{
                            margin: "0 auto",
                            maxWidth: 980,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            height: "100%",
                            padding: "25px"
                        }}>
                            <div
                                style={{
                                flex: 1
                            }}>{children}</div>
                            
                        </div>
                    )
                    : (
                        <div
                            style={{
                            margin: "0 auto",
                            maxWidth: 980,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            height: "100%",
                            padding: "25px"
                        }}>
                            <div
                                style={{
                                flex: 2.5,
                                paddingRight: "30px"
                            }}>
                                {children}
                            </div>

                            <div
                                style={{
                                flex: 1
                            }}>
                                <Sidebar
                                    title="Codestack"
                                    description="Articles on React and Node.js. All articles are written by Me. Fullstack Web Development."/>
                                <Sidebar
                                    title="About author"
                                    description="I am a Full-stack Web Developer specializing in React and Node.js based in Nigeria."/>
                            </div>
                        </div>
                    )}
            </Media>
        </div>
    </div>)

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
