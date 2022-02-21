import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import {HeadingXL, Button, SEO, TextBody} from "../components"
import {HeaderHome} from "../components/HeaderHome"
import {HomeLayout} from "../components/LayoutHome"
import {BREAKPOINT} from "../utils/constants"

const Hero = styled.div`
  margin-bottom: 10vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 5vh;
`
const TextHome = styled.p`
  color: var(--light-color);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 6vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 4vh;
  }

  position: relative;
  animation-name: headingxl;
  animation-duration: 0.4s;
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
    box-shadow: 3px 11px 0 0 hsla(356, 100%, 72%, 1);
  }
  animation-duration: 0.4s;
`

const ButtonInline2 = styled(ButtonInline)`
  border: 3px solid hsla(7, 100%, 72%, 1);
  :hover {
    box-shadow: -3px 11px 0 0 hsla(7, 100%, 72%, 1);
  }
  animation-duration: 0.3s;
`

const ButtonInline3 = styled(ButtonInline)`
  border: 3px solid var(--orange-color);
  :hover {
    box-shadow: -9px 9px 0 0 var(--orange-color);
  }
  animation-duration: 0.2s;
`

const Wrapper = styled.div`
  text-align: center;
`

const InlineWrapper = styled.div`
  display: inline-block;
`

const TextAbout = styled(TextBody)`
  margin: 1vh 0vh 1vh 0vh;
  position: relative;
  animation-name: headingxl;
  animation-duration: 0.4s;
`

const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0vh 0vh 0vh 0vh;

  position: relative;
  animation-name: headingxl;
  animation-duration: 0.3s;
`

export default function HomePage({data}) {
  return (
    <>
      <SEO title="Home" />
      <HeaderHome />
      <HomeLayout>
        <Hero>
          <HeadingXL>JamFox's Home</HeadingXL>
          <TextHome>Under construction!</TextHome>
          <GifWrapper>
            <TextAbout>
              (So if anything breaks you can't blame it on my incompetence)
            </TextAbout>
            <StaticImage
              src="../images/pepeEZ.webp"
              width={20}
              aspectRatio={1 / 1}
              quality={90}
              layout="fixed"
            />
          </GifWrapper>
        </Hero>

        <Wrapper>
          <InlineWrapper>
            <Link to="/about">
              <ButtonInline>About Me</ButtonInline>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="/setup">
              <ButtonInline1>My Setup</ButtonInline1>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://jamfox.github.io/">
              <ButtonInline2>NCT News</ButtonInline2>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://youtu.be/4bW-wjC61E0">
              <ButtonInline3>0451</ButtonInline3>
            </Link>
          </InlineWrapper>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
