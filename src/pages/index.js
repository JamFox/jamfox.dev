import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import {
  ButtonInline,
  SEO,
  Footer,
  FooterA,
  Tos,
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
import {GlobalStyles} from "../components/GlobalStyles"
import BGvideo from "../videos/tf.mp4"

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

const ButtonInline0 = styled(ButtonInline)`
  background-color: hsla(0, 0%, 11%, 0.35);
  margin: 2vh;
  width: 180px;
  border: 3px solid var(--pink-color);
  :hover {
    box-shadow: 9px 9px 0 0 var(--pink-color);
    background-color: hsla(0, 0%, 11%, 0.55);
  }
`

const ButtonInline1 = styled(ButtonInline0)`
  border: 3px solid hsla(356, 100%, 72%, 1);
  :hover {
    box-shadow: 3px 11px 0 0 hsla(356, 100%, 72%, 1);
  }
`

const ButtonInline2 = styled(ButtonInline0)`
  border: 3px solid hsla(7, 100%, 72%, 1);
  :hover {
    box-shadow: -3px 11px 0 0 hsla(7, 100%, 72%, 1);
  }
`

const ButtonInline3 = styled(ButtonInline0)`
  border: 3px solid var(--orange-color);
  :hover {
    box-shadow: -9px 9px 0 0 var(--orange-color);
  }
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

          <Link to="/about">
            <FixWrapper>
              <ButtonInline0>About Me</ButtonInline0>
            </FixWrapper>
          </Link>

          <Link to="/setup">
            <FixWrapper>
              <ButtonInline1>My Setup</ButtonInline1>
            </FixWrapper>
          </Link>

          <Link to="/links">
            <FixWrapper>
              <ButtonInline2>Links</ButtonInline2>
            </FixWrapper>
          </Link>
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
