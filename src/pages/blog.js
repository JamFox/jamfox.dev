import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeadingXL,
  HeadingL,
  SEO,
  TextBody,
  TextDate,
  Button,
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import {GlobalStyles} from "../components/GlobalStyles"
import {StaticImage} from "gatsby-plugin-image"
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

const ButtonInline = styled(Button)`
  display: inline-block;
  background-color: hsla(0, 0%, 11%, 0.35);
  margin: 2vh;
  width: 180px;
  /*background: url("https://c.tenor.com/RJgdogvsjEsAAAAd/galaxie-galaxy.gif")
    scroll 0 no-repeat; */
  border: 3px solid var(--pink-color);
  :hover {
    box-shadow: 9px 9px 0 0 var(--pink-color);
    background-color: hsla(0, 0%, 11%, 0.55);
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
      <SEO title="Blog" />
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
              <Link to="/blog">blog</Link>
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
            <HeadingXL id="title">JamFox's Blog</HeadingXL>
          </Link>
        </CenterLogo>
        <MainButtons>
          <Desc>
            Welcome to <TfFont>JamFox</TfFont>'s memorywarehouse!
          </Desc>
        </MainButtons>
      </Videofull>
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
        <InlineWrapper>
          <Link to="https://www.youtube.com/c/JamFox/videos">
            <ButtonInline4>YouTube</ButtonInline4>
          </Link>
        </InlineWrapper>
      </Wrapper>
      <Pane>
        <h1>Sup?</h1>
        <p>
          So either I know, trust you and gave you the link or you somehow
          you’ve stumbled upon one of the most obscure places in the Net.
          <h3>Here’s what you need to know</h3>
          It is meant to be first and foremost an archive of my experiences and
          thoughts for myself. I do not advertise, monetize and I do not hope to
          gain anything from this 'blog' besides improving at expressing myself.
          New posts will appear whenever an idea gets nurtured with enough time
          and passion.
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
