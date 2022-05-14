import React from "react"
import {graphql} from "gatsby"
import {HeadingXL, SEO, TextBody, TextDate} from "../components"
import {HomeLayout} from "../components/LayoutHome"

export default function BlogPost({data}) {
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <HomeLayout>
        <HeadingXL>{data.markdownRemark.frontmatter.title}</HeadingXL>
        <TextDate>{data.markdownRemark.frontmatter.date}</TextDate>
        <TextBody
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
        />
      </HomeLayout>
    </>
  )
}

export const data = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
