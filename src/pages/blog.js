import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeadingXL,
  SEO,
  TextBodySmall,
  TextDate,
  ButtonInline,
  Top,
  TopLinks,
  TopLink,
  LinkText,
  Desc,
  Pane,
  TfFont,
  MainButtons,
  Video,
  Videofull,
  Overlay,
  CenterLogo,
  FixWrapper,
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import {GlobalStyles} from "../components/GlobalStyles"
import BGvideo from "../videos/tf.mp4"

const Post = styled.div`
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const ButtonInline1 = styled(ButtonInline)`
  border: 3px solid hsla(356, 100%, 72%, 1);
  :hover {
    box-shadow: 9px 9px 0 0 hsla(356, 100%, 72%, 1);
  }
`

const ButtonInline2 = styled(ButtonInline)`
  border: 3px solid hsla(3, 100%, 72%, 1);
  :hover {
    box-shadow: 9px 9px 0 0 hsla(3, 100%, 72%, 1);
  }
`

const ButtonInline3 = styled(ButtonInline)`
  border: 3px solid hsla(8, 100%, 72%, 1);
  :hover {
    box-shadow: 9px 9px 0 0 hsla(8, 100%, 72%, 1);
  }
`

const ButtonInline4 = styled(ButtonInline)`
  border: 3px solid var(--orange-color);
  :hover {
    box-shadow: 9px 9px 0 0 var(--orange-color);
  }
`

const Wrapper = styled.div`
  text-align: center;
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
              <Link to="#">blog</Link>
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
        <Link to="https://steamcommunity.com/id/JamFox/">
          <FixWrapper>
            <ButtonInline>Games</ButtonInline>
          </FixWrapper>
        </Link>

        <Link to="https://letterboxd.com/jamfox/">
          <FixWrapper>
            <ButtonInline1>Movies</ButtonInline1>
          </FixWrapper>
        </Link>

        <Link to="https://myanimelist.net/profile/Jamfox">
          <FixWrapper>
            <ButtonInline2>Anime</ButtonInline2>
          </FixWrapper>
        </Link>

        <Link to="https://open.spotify.com/user/kapikmeow">
          <FixWrapper>
            <ButtonInline3>Music</ButtonInline3>
          </FixWrapper>
        </Link>

        <Link to="https://www.goodreads.com/user/show/78068566-jamfox">
          <FixWrapper>
            <ButtonInline4>Books</ButtonInline4>
          </FixWrapper>
        </Link>

        <Link to="https://www.youtube.com/c/JamFox/videos">
          <FixWrapper>
            <ButtonInline4>YouTube</ButtonInline4>
          </FixWrapper>
        </Link>
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
