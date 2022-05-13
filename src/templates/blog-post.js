import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {graphql} from "gatsby"
import {HeadingXL, SEO, TextBody, TextDate} from "../components"
import {HomeLayout} from "../components/LayoutHome"

const Top = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.15);
`

const TopLinks = styled.div`
  float: right;
  display: flex;
`

const TopLink = styled.a`
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  line-height: 16px;
  padding: 24px 32px;
  white-space: nowrap;
  display: inline-block;

  color: white;
  text-decoration: none;
  user-select: none !important;
`

const LinkText = styled.span`
  :hover {
    color: #dddddd;
  }
  :active {
    color: #bbbbbb;
  }
`

export default function BlogPost({data}) {
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="/blog">blog</Link>
            </LinkText>
            /post
          </TopLink>
        </TopLinks>
      </Top>
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
