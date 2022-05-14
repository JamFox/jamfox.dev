import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeadingXL,
  SEO,
  TextBody,
  TextDate,
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import {GlobalStyles} from "../components/GlobalStyles"
import BGvideo from "../videos/tf.mp4"

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

const Post = styled.div`
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const Videofull = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Video = styled.video`
  top: 0;
  left: 0;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  pointer-events: none;
  filter: blur(0.6vw);
`

const Overlay = styled.div`
  background-color: hsla(0, 0%, 11%, 0.5);
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 11%, 0.5) 0%,
    hsla(0, 0%, 11%, 0.5) 85%,
    hsla(0, 0%, 11%, 1) 100%
  );
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`

const CenterLogo = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  vertical-align: middle;
  width: max-content;
  user-select: none !important;
  pointer-events: none;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.75));

  @media screen and (max-width: 960px) {
    filter: drop-shadow(0px 0.4vw 1.6vw rgba(0, 0, 0, 0.75));
  }
`

const MainButtons = styled.div`
  position: absolute;
  top: calc(30% + 256px - 72px);
  left: 50%;
  transform: translateX(-50%);
  vertical-align: middle;
  width: max-content;
  user-select: none !important;
  text-align: center;

  @media screen and (max-width: 960px) {
    top: calc(30% + 25.6vw - 7.2vw);
    width: fit-content;
  }
`

const Desc = styled.p`
  text-align: center;
  vertical-align: middle;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
`

const TfFont = styled.span`
  font-family: Titanfall, Arial, Helvetica, sans-serif;
`

const Pane = styled.div`
  background: hsla(0, 0%, 11%, 1);
  padding: 32px;
  max-width: 900px;
  overflow-x: hidden;
  overflow-wrap: break-word;

  margin: 0 auto;
`
const TextBodySmall = styled(TextBody)`
  font-size: 14px;
`


export default function Blog({data}) {
  return (
    <>
      <SEO title="Log" />
      <GlobalStyles />

      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="/about">about</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="#">log</Link>
            </LinkText>
          </TopLink>
        </TopLinks>
      </Top>
      <Videofull>
        <Video
          autoPlay
          loop={true}
          controls={false}
          muted
          playsInLine
          src={BGvideo}
        ></Video>
        <Overlay></Overlay>
        <CenterLogo>
          <Link to="/">
            <HeadingXL id="title">The Log</HeadingXL>
          </Link>
        </CenterLogo>
        <MainButtons>
          <Desc>
            Welcome to <TfFont>JamFox</TfFont>'s log!
          </Desc>
        </MainButtons>
      </Videofull>

      <Pane>
        <h1>Sup?</h1>
        <p>
          Here's where I document and log things of interest. Like my homelab
          setup or CSGO trading misadventures.
        </p>
      </Pane>

      <Pane>
        <h1>Posts</h1>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Post>
            <Link to={node.fields.slug} key={node.id}>
              <TextDate>
                ⁘ <LinkText>{node.frontmatter.title}</LinkText>
              </TextDate>
            </Link>

            <TextBodySmall>
              <Link to={node.fields.slug} key={node.id}>
                &nbsp;{node.frontmatter.date}
              </Link>
            </TextBodySmall>
          </Post>
        ))}
      </Pane>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(/log/)/"}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
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
