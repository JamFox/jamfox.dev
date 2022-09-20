import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {
  HomeLayout,
  ButtonInline,
  HeadingXL,
  SEO,
  TextBody,
  Top,
  TopLinks,
  TopLink,
  LinkText,
  Pane,
  Emote,
  FixWrapper,
} from "../components"
import {StaticImage} from "gatsby-plugin-image"
import Gif from "../images/ratnce.gif"

const Wrapper = styled.div`
  margin: 1vh 1vh 1vh 1vh;
  text-align: center;
`

const TextAbout = styled.p`
  margin: 2vh 0vh 0vh 0vh;
  vertical-align: middle;
  position: relative;
`

const ImgWrapper = styled.div`
  float: left;
  margin: 2vh;

  position: relative;
`

const ButtonInlineGit = styled(ButtonInline)`
  border: 3px solid hsla(360, 100%, 100%, 0.75);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(360, 100%, 100%, 0.55);
  }
`

const ButtonInlinePDF = styled(ButtonInline)`
  border: 3px solid var(--pink-color);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(348, 100%, 71%, 0.83);
  }
`

const ButtonInlineInsta = styled(ButtonInline)`
  border: 3px solid hsla(38, 100%, 68%, 0.8);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(38, 100%, 68%, 0.6);
  }
`

export default function AboutPage() {
  return (
    <>
      <SEO title="About" description="About Me" />
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
            <Emote src={Gif} alt=":ratdance:" width={20} />
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
          <Link to="https://www.linkedin.com/in/katurv/">
            <FixWrapper>
              <ButtonInline>LinkedIn</ButtonInline>
            </FixWrapper>
          </Link>

          <Link to="https://github.com/JamFox">
            <FixWrapper>
              <ButtonInlineGit>GitHub</ButtonInlineGit>
            </FixWrapper>
          </Link>

          <a href="cv.pdf" target="blank">
            <FixWrapper>
              <ButtonInlinePDF>CV</ButtonInlinePDF>
            </FixWrapper>
          </a>

          <Link to="https://www.instagram.com/karlturvas/">
            <FixWrapper>
              <ButtonInlineInsta>Instagram</ButtonInlineInsta>
            </FixWrapper>
          </Link>

          <Link to="mailto:karl@jamfox.dev">
            <TextBody> MAIL: karl@jamfox.dev </TextBody>
          </Link>
          <Link to="https://youtu.be/p0fhF-HfSzU">
            <TextBody> PHONE: +372 5333 7528 </TextBody>
          </Link>
        </Wrapper>
        <Pane></Pane>
        <Pane>
          <h3>I want to know more!</h3>
          <TextAbout>
            Hop on to
            <b>
              <LinkText>
                <Link to="/log"> The Log </Link>
              </LinkText>
            </b>
            if you're interested in articles, stories! Or check out technical
            documentation at
            <b>
              <LinkText>
                <Link to="https://docs.jamfox.dev"> docs.jamfox.dev </Link>
              </LinkText>
            </b>
          </TextAbout>
        </Pane>
      </HomeLayout>
    </>
  )
}
