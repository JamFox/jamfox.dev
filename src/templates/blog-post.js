import React from "react"
import styled from "styled-components"
import {graphql} from "gatsby"
import {HeadingXL, SEO, TextBody, TextDate} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {defineCustomElements as deckDeckGoHighlightElement} from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const TextBodyLight = styled(TextBody)`
  color: var(--light-color);

  a {
    color: var(--pink-color);
  }
  a:hover {
    color: hsla(348, 100%, 63%, 1);
  }

  code {
    font-family: Monaco, monospace;
    font-size: $base-font-size;
    line-height: 100%;
    background-color: var(--dark-color-lighter);
    padding: 0.08em;
    letter-spacing: -0.05em;
    word-break: normal;
    /border-radius: 5px;/
  }

  pre {
    font-family: Monaco, monospace;
    font-size: $base-font-size;
    line-height: 100%;
    background-color: var(--dark-color-lighter);
    padding: 0.08em;
    letter-spacing: -0.05em;
    word-break: normal;
    /border-radius: 5px;/
  }

  pre code {
    font-family: Monaco, monospace;
    font-size: $base-font-size;
    line-height: 100%;
    background-color: var(--dark-color-lighter);
    padding: 0.08em;
    letter-spacing: -0.05em;
    word-break: normal;
    /border-radius: 5px;/
  }
`

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
