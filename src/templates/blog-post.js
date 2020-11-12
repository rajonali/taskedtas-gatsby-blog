import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout'
export default function Template({data}) {

    const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark


  
  
    return (
        <Layout>
        <div className="blog-post-container">
            <Helmet title={`CodeStack - ${frontmatter.title}`}/>
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{
                    __html: html
                }}/>
           </div>
        </div>
        </Layout>
    );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
