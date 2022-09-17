import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {
  HomeLayout,
  SEO,
  Top,
  TopLinks,
  TopLink,
  LinkText,
  Footer,
  FooterA,
  Tos,
  TextBodySmall,
  HeadingL,
  HeadingXL,
  TextDate,
} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Wrapper = styled.div`
  margin: 1vh 1vh 1vh 1vh;
  text-align: center;
`

const Post = styled.div`
  margin-bottom: 50px;
  vertical-align: middle;
  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const HeadingL2 = styled(HeadingL)`
  font-size: 25px;
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 79%, 1),
    hsla(29, 100%, 79%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="Links" />
      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="#">links</Link>
            </LinkText>
          </TopLink>
        </TopLinks>
      </Top>
      <HomeLayout>
        <Wrapper>
          <HeadingXL>
            <Link to="/">Links </Link>
          </HeadingXL>
        </Wrapper>

        <Post>
          <HeadingL2>Collections of links</HeadingL2>

          <TextDate>
            <Link to="https://docs.jamfox.dev/content/links/interesting/">
              <LinkText>Interesting</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Just some fascinating links I've come across on the web.
          </TextBodySmall>

          <TextDate>
            <Link to="https://docs.jamfox.dev/content/links/it/">
              <LinkText>IT related</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Interesting links related to all things related to computers.
          </TextBodySmall>

          <TextDate>
            <Link to="https://docs.jamfox.dev/content/links/procrastinate/">
              <LinkText>Procrastination</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Some highly entertaining media.</TextBodySmall>

          <TextDate>
            <Link to="https://docs.jamfox.dev/content/links/essays/">
              <LinkText>Essays, articles, blogs</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            To learn, stimulate the brain, find new ideas.
          </TextBodySmall>

          <TextDate>
            <Link to="https://docs.jamfox.dev/content/links/podcasts/">
              <LinkText>Podcasts</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Commuting is now suddenly so much more interesting.
          </TextBodySmall>
        </Post>
      </HomeLayout>
      <Footer>
        <FooterA>
          <Link to="https://youtube.com/playlist?list=FLCF_318p-7YO2OM18OEYpyw">
            <Tos>sekrit favorits</Tos>
          </Link>
        </FooterA>
      </Footer>
    </>
  )
}
