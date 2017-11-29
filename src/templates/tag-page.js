import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Header } from "theme/containers/Header.js"
import { LinkContainer } from "theme/containers/BlogPostsContaners"

class TagRoute extends React.Component {
  render() {
    // const posts = this.props.data.allMarkdownRemark.edges
    // const title = this.props.data.site.siteMetadata.title
    // const postLinks = posts.map(post => {
    //   return (
    //     <h3 key={post.node.fields.slug}>
    //       <Link to={post.node.fields.slug}>
    //         {post.node.frontmatter.title}
    //       </Link>
    //     </h3>
    //   )
    // })

    return (
      <div className="content">
        {/* <Helmet title={title} /> */}
        <Header>
          <h1>
            {/* {this.props.data.allMarkdownRemark.totalCount} posts tagged with “{this.props.pathContext.tag}” */}
          </h1>
        </Header>
        <ul>
          <LinkContainer>{/* {postLinks} */}</LinkContainer>
        </ul>
        <p>
          <Link to="/tags/">Browse all tags</Link>
        </p>
      </div>
    )
  }
}

export default TagRoute

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
