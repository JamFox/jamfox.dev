import React from "react"
import {graphql} from "gatsby"
import {HomeLayout, HeadingXL, SEO, TextBodyLight, TextDate} from "../components"
import {defineCustomElements as deckDeckGoHighlightElement} from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function BlogPost({data}) {
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <HomeLayout>
        <HeadingXL>{data.markdownRemark.frontmatter.title}</HeadingXL>
        <TextDate>{data.markdownRemark.frontmatter.date}</TextDate>
        <TextBodyLight
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
