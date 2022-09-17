import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeadingXL,
  SEO,
  TextBodySmall,
  TextDate,
  Top,
  TopLinks,
  TopLink,
  LinkText,
  Desc,
  TfFont,
  MainButtons,
  Video,
  Videofull,
  Overlay,
  CenterLogo,
} from "../components"
import {Pane} from "../components/Structure"
import {BREAKPOINT} from "../utils/constants"
import {GlobalStyles} from "../components/GlobalStyles"
import BGvideo from "../videos/tf.mp4"

const Post = styled.div`
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
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
          Here's where I share stories and log things of interest. Like my
          homelab disasters or CSGO trading misadventures.
        </p>
        <p>
          For technical documentation check out
          <b>
            <LinkText>
              <Link to="https://docs.jamfox.dev"> docs.jamfox.dev </Link>
            </LinkText>
          </b>
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
