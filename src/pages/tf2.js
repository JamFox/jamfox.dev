import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import {SEO} from "../components"
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
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  padding: 24px 32px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  color: white;
  text-decoration: none;
  user-select: none !important;

  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const Videofull = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Video = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  object-fit: cover;
  pointer-events: none;
  filter: blur(0.5vw);
`

const Overlay = styled.div`
  background-color: rgba(20, 26, 50, 0.5);
  background: linear-gradient(
    180deg,
    rgba(20, 26, 50, 0.5) 0%,
    rgba(20, 26, 50, 0.5) 85%,
    rgba(20, 26, 50, 1) 100%
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
`

const Logo = styled.span`
  vertical-align: middle;
  display: inline-block;
`

const NorthStarText = styled.span`
  font-family: Titanfall, Arial, Helvetica, sans-serif;
  font-size: 84px;
  vertical-align: middle;
  margin-right: 16px;
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

const BigButton = styled.a`
  margin: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 32px;
  border-radius: 64px;
  background-color: rgba(33, 43, 78, 0.9);
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  color: white;
  text-decoration: none;
  height: 50px;
  white-space: nowrap;
  :hover {
    background-color: rgba(37, 45, 80, 0.9);
  }
  :active {
    background-color: rgba(48, 60, 106, 0.9);
  }
`

const ButtonText = styled.span`
  vertical-align: center;
`

const Pane = styled.div`
  background: #141a32;
  padding: 32px;
  max-width: 100%;
  overflow-x: hidden;
  overflow-wrap: break-word;
`

const Code = styled.code`
  font-size: 15px;
  background: #eeeeee;
  border-radius: 2px;
  color: #141a32;
  padding: 1px 6px;
  vertical-align: bottom;
`

const Footer = styled(Pane)`
  display: grid;
  grid-template-columns: 128px 128px;
  column-gap: 16px;
`

const FooterA = styled.a`
  line-height: 2;
`

export default function TfPage() {
  return (
    <>
      <GlobalStyles />
      <SEO title="Tf" />
      <Top>
        <TopLinks>
          <TopLink>Yes1</TopLink>
          <TopLink>Yes2</TopLink>
          <TopLink>Yes3</TopLink>
        </TopLinks>
      </Top>
      <Videofull>
        <Video>
          <video
            top="0"
            left="0"
            position="absolute"
            object-fit="cover"
            height="100%"
            width="100%"
            class="lazy"
            autoplay="autoplay"
            loop="true"
            muted="muted"
            playsinline=""
          >
            <source src={BGvideo} />
          </video>
        </Video>
        <Overlay></Overlay>
        <CenterLogo>
          <Logo>
            <StaticImage
              src="../images/icon.png"
              width={120}
              aspectRatio={1 / 1}
              quality={90}
            />
          </Logo>
          <NorthStarSlice></NorthStarSlice>
          <NorthStarText>JamFox</NorthStarText>
        </CenterLogo>
        <MainButtons>
          <Desc>
            Ayoo<TfFont>TITAN</TfFont>asdfasdf
          </Desc>
          <BigButton>
            <ButtonText>AYSD</ButtonText>
          </BigButton>
        </MainButtons>
      </Videofull>
      <Pane>asdfasdfasdfas</Pane>
      <Pane>asdfasdfasdfas</Pane>
      <Pane>asdfasdfasdfas</Pane>
      <Footer>
        <FooterA>asdf</FooterA>
        <FooterA>asdf</FooterA>
        <FooterA>asdf</FooterA>
      </Footer>
    </>
  )
}
