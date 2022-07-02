import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {Button, HeadingXL, SEO, TextBody} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {StaticImage} from "gatsby-plugin-image"
import gif from "../images/ratnce.gif"

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
const InlineWrapper = styled.div`
  display: inline-block;
  margin: 1vh 0vh 1vh 0vh;
  text-align: justify;
`
const TextAbout = styled.p`
  margin: 2vh 0vh 0vh 0vh;
  vertical-align: middle;
  @keyframes textbody {
    0% {
      right: -500px;
      opacity: 0;
    }
    100% {
      right: 0px;
      opacity: 1;
    }
  }
  position: relative;
  animation-name: textbody;
  animation-duration: 0.5s;
`

const ImgWrapper = styled.div`
  float: left;
  margin: 2vh;

  position: relative;
  animation-name: textbody;
  animation-duration: 0.4s;
`

const ButtonInline = styled(Button)`
  margin: 1.5vh;
  width: 180px;
  border: 3px solid hsla(201, 100%, 35%, 1);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(201, 100%, 21%, 1);
  }
  animation-duration: 0.5s;
`

const ButtonInlineGit = styled(ButtonInline)`
  border: 3px solid hsla(360, 100%, 100%, 0.75);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(360, 100%, 100%, 0.55);
  }
  animation-duration: 0.4s;
`

const ButtonInlinePDF = styled(ButtonInline)`
  border: 3px solid var(--pink-color);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(348, 100%, 71%, 0.83);
  }
  animation-duration: 0.3s;
`

const ButtonInlineInsta = styled(ButtonInline)`
  border: 3px solid hsla(38, 100%, 68%, 0.8);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(38, 100%, 68%, 0.6);
  }
  animation-duration: 0.2s;
`

const Emote = styled.img`
  vertical-align: middle;
  display: inline;
  margin-left: 1vh;
  margin-right: 1vh;
`

const Pane = styled.div`
  background: hsla(0, 0%, 11%, 1);
  padding: 64px;
  max-width: 900px;
  overflow-x: hidden;
  overflow-wrap: break-word;

  margin: 0 auto;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="#">about</Link>
            </LinkText>
          </TopLink>
        </TopLinks>
      </Top>
      <HomeLayout>
        <Wrapper>
          <HeadingXL>
            <Link to="/">About </Link>
          </HeadingXL>
        </Wrapper>

        <ImgWrapper>
          <Link to="/abovt">
            <StaticImage
              src="../images/karlhalf.png"
              width={120}
              aspectRatio={1 / 1}
              quality={90}
              float="left"
            />
          </Link>
        </ImgWrapper>

        <TextAbout>
          Heyya! Name's Karl, but you can call me Carl
          <Link to="https://youtu.be/OXQwx1EolD8">
            <Emote src={gif} alt=":ratdance:" width={20} />
          </Link>
        </TextAbout>

        <TextAbout>
          I am a SysAdmin & DevOps primarily, but have a curiosity for many
          things. I've said that I would never do front-end, but then I somehow
          ended up building this site. I guess it's fitting for a JamFox to have
          a JAMstack site?&nbsp;
          <StaticImage
            src="../images/pepeEZ.webp"
            alt=":pepeEZ:"
            width={20}
            aspectRatio={1 / 1}
            quality={90}
          />
        </TextAbout>

        <TextAbout>
          If I'm not centering divs (like I said I wouldn't) or building another
          mechanical ortholinear ergonomic split keyboard then I'm probably
          running a Spartan obstacle course, weightlifting, HEMA swordfighting,
          taking or editing photos, reading Dune again, playing TTRPGs, driving
          on the <Link to="https://goo.gl/maps/w9wCtHJTbgmx73ee8">LCC</Link> or
          conquering a hiking trail? Who knows what the life brings next,
          honestly.
        </TextAbout>

        <Wrapper>
          <InlineWrapper>
            <Link to="https://www.linkedin.com/in/katurv/">
              <ButtonInline>LinkedIn</ButtonInline>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://github.com/JamFox">
              <ButtonInlineGit>GitHub</ButtonInlineGit>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <a href="cv.pdf" target="blank">
              <ButtonInlinePDF>CV</ButtonInlinePDF>
            </a>
          </InlineWrapper>

          <InlineWrapper>
            <Link to="https://www.instagram.com/karlturvas/">
              <ButtonInlineInsta>Instagram</ButtonInlineInsta>
            </Link>
          </InlineWrapper>
          <Link to="mailto:karl.turvas@cern.ch">
            <TextBody> MAIL: karl.turvas@cern.ch </TextBody>
          </Link>
          <Link to="https://youtu.be/p0fhF-HfSzU">
            <TextBody> PHONE: +372 5333 7528 </TextBody>
          </Link>
        </Wrapper>
        <Pane></Pane>
        <Pane>
          <h3>I want to know more!</h3>
          <TextAbout>Sure! But the following is under construction.</TextAbout>
          <TextAbout>
            If LinkedIn's too bloated check out my
            <b>
              <LinkText>
                <Link to="/resume"> Resume </Link>
              </LinkText>
            </b>
            right here on jamfox.dev! Hop on to
            <b>
              <LinkText>
                <Link to="/log"> The Log </Link>
              </LinkText>
            </b>
            if you're interested in my homelab or other projects!
          </TextAbout>
        </Pane>
      </HomeLayout>
    </>
  )
}
