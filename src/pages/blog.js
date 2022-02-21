import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  SEO,
  TextBody,
  TextDate,
  Button,
} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {BREAKPOINT} from "../utils/constants"

const Hero = styled.div`
  margin-bottom: 10vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 5vh;
  }
`
const TextHome = styled.p`
  color: var(--light-color);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }

  position: relative;
  animation-name: headingxl;
  animation-duration: 0.4s;
`
const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const ButtonInline = styled(Button)`
  margin: 2vh;
  width: 180px;
  /*background: url("https://c.tenor.com/RJgdogvsjEsAAAAd/galaxie-galaxy.gif")
    scroll 0 no-repeat; */
  border: 3px solid var(--pink-color);
  :hover {
    box-shadow: 9px 9px 0 0 var(--pink-color);
  }
`

const ButtonInline1 = styled(ButtonInline)`
  border: 3px solid hsla(356, 100%, 72%, 1);
  :hover {
    box-shadow: 9px 9px 0 0 hsla(356, 100%, 72%, 1);
  }
  animation-duration: 0.4s;
`

const ButtonInline2 = styled(ButtonInline)`
  border: 3px solid hsla(3, 100%, 72%, 1);
  :hover {
    box-shadow: 9px 9px 0 0 hsla(3, 100%, 72%, 1);
  }
  animation-duration: 0.3s;
`

const ButtonInline3 = styled(ButtonInline)`
  border: 3px solid hsla(8, 100%, 72%, 1);
  :hover {
    box-shadow: 9px 9px 0 0 hsla(8, 100%, 72%, 1);
  }
  animation-duration: 0.2s;
`

const ButtonInline4 = styled(ButtonInline)`
  border: 3px solid var(--orange-color);
  :hover {
    box-shadow: 9px 9px 0 0 var(--orange-color);
  }
  animation-duration: 0.2s;
`

const Wrapper = styled.div`
  text-align: center;
`

const InlineWrapper = styled.div`
  display: inline-block;
`

export default function Blog({data}) {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <HomeLayout>
        <Hero>
          <HeadingXL>JamFox's Memorywarehouse</HeadingXL>
          <TextHome>Writing. For fun!</TextHome>
        </Hero>
        <Wrapper>
          <InlineWrapper>
            <Link to="https://steamcommunity.com/id/JamFox/">
              <ButtonInline>Games</ButtonInline>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://letterboxd.com/jamfox/">
              <ButtonInline1>Movies</ButtonInline1>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://myanimelist.net/profile/Jamfox">
              <ButtonInline2>Anime</ButtonInline2>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://open.spotify.com/user/kapikmeow">
              <ButtonInline3>Music</ButtonInline3>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://www.goodreads.com/user/show/78068566-jamfox">
              <ButtonInline4>Books</ButtonInline4>
            </Link>
          </InlineWrapper>
        </Wrapper>

        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </HomeLayout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
