import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {HeadingXL, SEO, TextBody, HeadingL, TextDate} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {BREAKPOINT} from "../utils/constants"

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
const TextBodySmall = styled(TextBody)`
  font-size: 14px;
`

const Desc = styled.p`
  text-align: center;
  vertical-align: middle;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
`

const Pane = styled.div`
  background: hsla(0, 0%, 11%, 1);
  padding: 32px;
  max-width: 900px;
  overflow-x: hidden;
  overflow-wrap: break-word;

  margin: 0 auto;
`

const Footer = styled(Pane)`
  display: grid;
  grid-template-columns: 228px 128px;
  column-gap: 16px;
`

const FooterA = styled.a`
  line-height: 2;
`

const Tos = styled(Desc)`
  color: hsla(0, 0%, 14%, 1);
  max-width: 80vw;
  font-size: 12px;
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
          <HeadingL2>Explore / Experiences</HeadingL2>

          <TextDate>
            <Link to="https://vrchat.com/">
              <LinkText>VRChat</LinkText>
            </Link>
            (Not sure? Check out:
            <Link to="https://youtu.be/4PHT-zBxKQQ">
              <LinkText>Making Sense of VRChat</LinkText>
            </Link>
            )
          </TextDate>
          <TextBodySmall>
            Experience the early web once again, on overdrive.
          </TextBodySmall>

          <TextDate>
            <Link to="https://matrix.org/">
              <LinkText>matrix</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            An open network for secure, decentralized communication.
          </TextBodySmall>

          <TextDate>
            <Link to="https://everynoise.com/">
              <LinkText>Every Noise At Once</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Algorithmically-generated, readability-adjusted scatter-plot of the
            musical genre-space.
          </TextBodySmall>

          <TextDate>
            <Link to="https://tildes.net/">
              <LinkText>Tildes</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Non-profit community site driven by its users' interests.
          </TextBodySmall>

          <TextDate>
            <Link to="https://blog.geocities.institute/about">
              <LinkText>One Terabyte of Kilobyte Age</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Geocities internet archeology.</TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Infotech</HeadingL2>

          <TextDate>
            <Link to="https://web.mit.edu/kerberos/dialogue.html">
              <LinkText>
                Designing an Authentication System: a Dialogue in Four Scenes
              </LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Clever story about how Kerberos auth protocol came to be.
          </TextBodySmall>

          <TextDate>
            <Link to="https://github.com/dylanaraps/pure-bash-bible">
              <LinkText>pure bash bible</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Spice up your servers with no dependencies by utilizing unreadable
            arcane methods.
          </TextBodySmall>

          <TextDate>
            <Link to="https://512kb.club/">
              <LinkText>The 512KB Club</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            I'm not part of this club, be better than me.
          </TextBodySmall>

          <TextDate>
            <Link to="https://sites.google.com/alanreiser.com/handsdown">
              <LinkText>Hands Down Layout</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Fuck QWERTY and standard keyboards in general.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/Sy7yPwj2fsg">
              <LinkText>Zack Freedman</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Cyborg hardware hacker from the near future making unnecessarily
            high-effort videos.
          </TextBodySmall>

          <TextDate>
            <Link to="https://observablehq.com/@tomlarkworthy/hacker-favourites-analysis">
              <LinkText>Most favorited Hacker News posts of all time</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            HN scraped in 2020-09-1 from the public favourites lists.
          </TextBodySmall>

          <TextDate>
            <Link to="https://www.privacyguides.org/">
              <LinkText>Privacy Guides</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The guide to restoring your online privacy.
          </TextBodySmall>

          <TextDate>
            <Link to="https://www.youtube.com/user/DigitalFoundry">
              <LinkText>Digital Foundry</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Game technology and hardware reviews, using bespoke capture and
            analysis tools to provide a unique look at the way games play.
          </TextBodySmall>

          <TextDate>
            <Link to="https://www.rtings.com/">
              <LinkText>RTINGS</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The best reviews on consumer-grade display and audio technology.
          </TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Generally Interesting</HeadingL2>

          <TextDate>
            <Link to="https://waitbutwhy.com/">
              <LinkText>Wait But Why</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The most useful procrastination website you'll ever find.
          </TextBodySmall>

          <TextDate>
            <Link to="https://wtfhappenedin1971.com/">
              <LinkText>WTF Happened In 1971?!</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Feel the pessimism boiling.</TextBodySmall>

          <TextDate>
            <Link to="https://fauux.neocities.org/">
              <LinkText>Fauux Neocity</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Wired sound for wired people.</TextBodySmall>

          <TextDate>
            <Link to="http://hasthelargehadroncolliderdestroyedtheworldyet.com/">
              <LinkText>Has The LHC Destroyed The World Yet?</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Stay in touch, just to make sure.</TextBodySmall>

          <TextDate>
            <Link to="https://www.youtube.com/c/3blue1brown">
              <LinkText>3Blue1Brown</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>The best math channel, in the universe.</TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Video Essayists</HeadingL2>
          <TextDate>
            <Link to="https://youtu.be/4PHT-zBxKQQ">
              <LinkText>People Make Games</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Stories about video games and the people who make them.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/zg2Y5rxlg-M">
              <LinkText>Whitelight</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Dark Souls of games media, your #1 source of video game analysis and
            occasionally, existential crises.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/YQ_xWvX1n9g">
              <LinkText>Folding Ideas</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            "Just a movie" or "just a game"? Think again.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/tubXWOJfU5A">
              <LinkText>BDobbinsFTW</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The Gameplay Commentary taken to its logical evolution.
          </TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Other</HeadingL2>

          <TextDate>
            <Link to="https://youtu.be/Lti_zl3MnT4">
              <LinkText>I did a thing</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Probably the most entertaining channel you can find.
          </TextBodySmall>

          <TextDate>
            <Link to="https://www.youtube.com/c/2kliksphilip">
              <LinkText>2kliksphilip</LinkText>
            </Link>
            and
            <Link to="https://www.youtube.com/c/kliksphilip">
              <LinkText>kliksphilip</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Laid back, down to earth guy making videos about anything and
            everything.
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
