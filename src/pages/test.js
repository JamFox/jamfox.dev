import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import {
  HeadingXL,
  SEO,
  HeaderLogo,
  TextDate,
  HeadingL,
  TextBody,
} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {BREAKPOINT} from "../utils/constants"
import gif from "../images/fox.gif"
import BGvideo from "../videos/tf.mp4"

const Wrapper = styled.div`
  margin: 2vh 5vh 5vh 5vh;
  text-align: center;
`

const TextAbout = styled(TextBody)`
  width: auto;
  margin: 1vh 0vh 1vh 0vh;
  position: relative;
  animation-name: headingxl;
  animation-duration: 0.4s;
`

const Post = styled.div`
  margin-bottom: 5px;
  align-items: center;
  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const HeadingL2 = styled(HeadingL)`
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 79%, 1),
    hsla(29, 100%, 79%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const TextDateSmall = styled(TextDate)`
  margin: 0vh 0vh 0vh 0vh;
  text-align: left;
  justify-content: top;
`

const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  content-align: center;
  width: auto;
  margin: 0vh 0vh 15vh 0vh;

  position: relative;
  animation-name: textbody;
  animation-duration: 0.4s;
`

const GifWrapperLeft = styled(GifWrapper)`
  justify-content: left;
  margin: 0vh;
  animation-duration: 0.5s;
`

const Wiggle = styled.div`
  @keyframes wiggle {
    0%,
    7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%,
    100% {
      transform: rotateZ(0);
    }
  }

  left: calc(50% - 3em);
  top: calc(50% - 2em);

  transform-origin: 50% 5em;

  animation: wiggle 2s linear infinite;
`

const Fly = styled.div`
  @keyframes fly {
    0% {
    }
    20% {
      left: 100%;
      down: 100px;
    }
    80% {
      left: 0%;
      down: 100%;
    }
    100% {
      down: -100%;
      left: -100%;
    }
  }
  position: fixed;
  top: 50%;
  left: 100%;
  height: 112px;
  width: 150px;
  background-size: 100% 100%;
  animation: fly 5s linear infinite;
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

export default function AboutPage() {
  return (
    <>
      <SEO title="About" />
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
            loop=""
            muted="muted"
            playsinline=""
          >
            <source src={BGvideo} />
          </video>
        </Video>
        <Overlay></Overlay>
        <HeaderLogo />
      </Videofull>

      <HomeLayout>
        <Wrapper>
          <HeadingXL>Catch </HeadingXL>
          <Fly>
            <Link to="/ratrat">
              <img src={gif} alt="fox.gif" width={105} layout="fixed" />
            </Link>
          </Fly>
          <GifWrapper>
            <TextAbout>Gotta have good tools to do good work, right?</TextAbout>
            <img src={gif} alt="fox.gif" width={35} layout="fixed" />
          </GifWrapper>

          <HeadingL2> titaniumjam mk3</HeadingL2>
          <Post>
            <TextDateSmall>» Case - Define R5 </TextDateSmall>
            <TextDateSmall>» CPU - Ryzen 5 5600X @ 4.6GHz PBO</TextDateSmall>
            <TextDateSmall>» GPU - RTX 3070 VISION OC </TextDateSmall>
            <TextDateSmall>» RAM - 2x8GB (DDR4 3600CL16) </TextDateSmall>
            <TextDateSmall>» Storage - 1TB SSD + 4TB HDD </TextDateSmall>
            <TextDateSmall>
              » Monitor1 - Samsung C27HG70 (1440p 144Hz)
            </TextDateSmall>
            <TextDateSmall>» Monitor2 - DELL U2412M (1200p 60Hz)</TextDateSmall>
            <TextDateSmall>» Keeb - Ducky Shine 2 (MX-Browns) </TextDateSmall>
            <TextDateSmall>» Mouse - Zowie EC1-A </TextDateSmall>
            <TextDateSmall>» Mousepad - Cooler Master MP510</TextDateSmall>
            <TextDateSmall>
              » Audio - HyperX Cloud 2 + Blue Snowball
            </TextDateSmall>
            <TextDateSmall>» VR System - Oculus Rift CV1 Touch</TextDateSmall>
          </Post>

          <HeadingL2> luna (homeserver) </HeadingL2>
          <Post>
            <TextDateSmall>
              » Mediaserver - Plex / Jellyfin / Sonarr / Radarr
            </TextDateSmall>
            <TextDateSmall>
              » Gameservers - Minecraft Valhelsia 3 / Valheim
            </TextDateSmall>
          </Post>
          <Post>
            <TextDateSmall>» Case - Define C </TextDateSmall>
            <TextDateSmall>» CPU - i5-4570 @ 3.6GHz </TextDateSmall>
            <GifWrapperLeft>
              <TextDateSmall>
                » GPU - AMD ATI Radeon RX 460/560D (RIP GTX 970 MSI
              </TextDateSmall>
              <Link to="/ratrat">
                <StaticImage
                  src="../images/deadrat.png"
                  width={20}
                  aspectRatio={1 / 1}
                  quality={90}
                  layout="fixed"
                />
              </Link>
              <TextDateSmall> )</TextDateSmall>
            </GifWrapperLeft>
            <TextDateSmall>» RAM - 2x4GB+2x8GB (DDR3)</TextDateSmall>
            <TextDateSmall>» Storage - 750GB SSD + 1.5TB HDD</TextDateSmall>
            <TextDateSmall>» Monitor1 - HP ZR2330w (1080p 60Hz) </TextDateSmall>
            <TextDateSmall>» Monitor2 - PHL 244E5 (1080p 60Hz)</TextDateSmall>
            <TextDateSmall>
              » Monitor3 - PHL 273V7QDSB (1080p 70Hz)
            </TextDateSmall>
            <TextDateSmall>
              » Keeb - Sofle v2 (Gateron Yellow Inks)
            </TextDateSmall>
            <TextDateSmall>» Mouse - Zowie EC1-A </TextDateSmall>
            <TextDateSmall>
              » Audio - HyperX Cloud 2 + Blue Snowball
            </TextDateSmall>
            <TextDateSmall>» Tablet - XP-PEN G430S </TextDateSmall>
          </Post>

          <HeadingL2> legion (laptop) </HeadingL2>
          <Post>
            <TextDateSmall>» Model - Lenovo Legion 5 17ACH6H</TextDateSmall>
            <TextDateSmall>» CPU - AMD Ryzen 5 5600H</TextDateSmall>
            <TextDateSmall>» GPU - RTX 3060 </TextDateSmall>
            <TextDateSmall>» RAM - 2x8GB (DDR4 3600) </TextDateSmall>
            <TextDateSmall>» Storage - 1TB SSD </TextDateSmall>
            <TextDateSmall>» Monitor1 - Built-in (1080p 60Hz)</TextDateSmall>
            <TextDateSmall>
              » Monitor2 - PHL 273V7QDSB (1080p 70Hz)
            </TextDateSmall>
            <TextDateSmall>» Monitor3 - PHL 244E5 (1080p 60Hz) </TextDateSmall>
            <TextDateSmall>» Keeb - Pteron36 (Kailh Choc Black) </TextDateSmall>
            <TextDateSmall>» Mouse - Zowie EC1-A </TextDateSmall>
            <TextDateSmall>» Mousepad - Cooler Master MP510</TextDateSmall>
            <TextDateSmall>» Audio - Logitech G533</TextDateSmall>
          </Post>

          <HeadingL2> Other tools </HeadingL2>
          <Post>
            <TextDateSmall>» OS - Windows 10 / Linux </TextDateSmall>
            <TextDateSmall>
              » Distros - CERN CentOS 7 / Arch Linux / Ubuntu (WSL)
            </TextDateSmall>
            <TextDateSmall>» Text editors - Vim / VSCode</TextDateSmall>
            <TextDateSmall>
              » Phone (main) - Oneplus 3T hardened LineageOS
            </TextDateSmall>
            <TextDateSmall>» Phone (secondary) - Oneplus 5T </TextDateSmall>
            <TextDateSmall>» Soldering iron - TS100 B2 </TextDateSmall>
            <TextDateSmall>
              » Wifi pentest adapter - Alfa AWUS036NHA
            </TextDateSmall>
            <TextDateSmall>
              » Raspberry cluster - 2x Model 3B+ / Model 4
            </TextDateSmall>
            <TextDateSmall>» Backpack - 5.11 RUSH24</TextDateSmall>
          </Post>
        </Wrapper>
      </HomeLayout>
    </>
  )
}