import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import {Button, SEO} from "../components"
import {GlobalStyles} from "../components/GlobalStyles"
import BGvideo from "../videos/tf.mp4"

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

const Logo = styled.span`
  vertical-align: middle;
  display: inline-block;

  @media screen and (max-width: 960px) {
    width: 11.2vw;
    height: 11.2vw;
  }
`

const NorthStarText = styled.span`
  font-family: "titanfall", Arial, Helvetica, sans-serif;
  font-size: 84px;
  vertical-align: middle;
  margin-right: 16px;

  @media screen and (max-width: 960px) {
    font-size: 8.4vw;
    margin-right: 1.6vw;
  }
`

const NorthStarSlice = styled.span`
  content: "";
  height: 128px;
  width: 8px;
  margin-left: 12px;
  margin-right: 32px;
  vertical-align: middle;
  display: inline-block;
  background-color: white;
  transform: skewY(-25deg);
  box-shadow: rgba(127, 127, 127, 0.5) 5px 5px 0px;

  @media screen and (max-width: 960px) {
    height: 12.8vw;
    width: 0.8vw;
    margin-left: 1.2vw;
    margin-right: 3.2vw;
    box-shadow: rgba(127, 127, 127, 0.5) 0.5vw 0.5vw 0px;
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
  font-size: 16px;
`

const TfFont = styled.span`
  font-family: Titanfall, Arial, Helvetica, sans-serif;
`

const Pane = styled.div`
  background: hsla(0, 0%, 11%, 1);
  padding: 32px;
  max-width: 100%;
  overflow-x: hidden;
  overflow-wrap: break-word;
`

const Footer = styled(Pane)`
  display: grid;
  grid-template-columns: 228px 128px;
  column-gap: 16px;
`

const FooterA = styled.a`
  line-height: 2;
`

const ButtonInline = styled(Button)`
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

const InlineWrapper = styled.div`
  display: inline-block;
`

const Tos = styled(Desc)`
  color: hsla(0, 0%, 14%, 1);
  max-width: 80vw;
  font-size: 12px;
`

export default function HomePage({data}) {
  return (
    <>
      <SEO title="Home" />
      <GlobalStyles />
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
          <Logo>
            <StaticImage
              src="../images/icon.png"
              width={120}
              aspectRatio={1 / 1}
              quality={90}
              vertical-align="middle"
              display="inline"
            />
          </Logo>
          <NorthStarSlice></NorthStarSlice>
          <NorthStarText>JamFox</NorthStarText>
        </CenterLogo>
        <MainButtons>
          <Desc>
            Welcome to <TfFont>JamFox</TfFont>'s personal page
          </Desc>

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
            <Link to="/links">
              <ButtonInline2>Links</ButtonInline2>
            </Link>
          </InlineWrapper>

          <InlineWrapper>
            <Link to="https://jamfox.github.io/">
              <ButtonInline3>NCT News</ButtonInline3>
            </Link>
          </InlineWrapper>
        </MainButtons>
      </Videofull>

      <Pane></Pane>

      <Footer>
        <FooterA>
          <Tos>
            <Link to="/terms">Terms of Service</Link>
          </Tos>
        </FooterA>
      </Footer>
    </>
  )
}
