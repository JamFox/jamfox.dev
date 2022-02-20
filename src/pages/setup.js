import React from "react"
import styled from "styled-components"
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

const Wrapper = styled.div`
  margin: 2vh 5vh 5vh 5vh;
  text-align: center;
`

const TextAbout = styled(TextBody)`
  width: 100%;
  margin: 1vh 0vh 15vh 0vh;

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
  animation-name: headingxl;
  animation-duration: 0.4s;
`

const Post = styled.div`
  margin-bottom: 5px;

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
  margin: 0vh 5vh 0vh 20vh;
  text-align: left;
  justify-content: top;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <HeaderLogo />
      <HomeLayout>
        <Wrapper>
          <HeadingXL>Setup </HeadingXL>
          <TextAbout>Gotta have good tools to do good work, right?</TextAbout>

          <HeadingL2> titaniumjam mk3</HeadingL2>
          <Post>
            <TextDateSmall>» Case - Define R5 </TextDateSmall>
            <TextDateSmall>» CPU - Ryzen 5 5600X @ 4.6GHz PBO</TextDateSmall>
            <TextDateSmall>» GPU - RTX 3070 VISION OC </TextDateSmall>
            <TextDateSmall>» RAM - 2x8GB (DDR4 3600CL16) </TextDateSmall>
            <TextDateSmall>» Storage - 1TB SSD + 4TB HDD </TextDateSmall>
            <TextDateSmall>
              » Monitor1 - Samsung C27HG70 (1440p 144Hz){" "}
            </TextDateSmall>
            <TextDateSmall>
              » Monitor2 - DELL U2412M (1200p 60Hz){" "}
            </TextDateSmall>
            <TextDateSmall>» Keeb - Ducky Shine 2 (MX-Browns) </TextDateSmall>
            <TextDateSmall>» Mouse - Zowie EC1-A </TextDateSmall>
            <TextDateSmall>
              » Audio - HyperX Cloud 2 + Blue Snowball
            </TextDateSmall>
            <TextDateSmall>» VR System - Oculus Rift CV1 Touch</TextDateSmall>
          </Post>

          <HeadingL2> luna (homeserver) </HeadingL2>
          <Post>
            <TextDateSmall>» Case - Define C </TextDateSmall>
            <TextDateSmall>» CPU - i5-4570 @ 3.6GHz </TextDateSmall>
            <TextDateSmall>
              » GPU - AMD ATI Radeon RX 460/560D (RIP GTX 970 MSI)
            </TextDateSmall>
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
            <TextDateSmall>
              » Monitor1 - PHL 273V7QDSB (1080p 70Hz){" "}
            </TextDateSmall>
            <TextDateSmall>» Monitor2 - PHL 244E5 (1080p 60Hz) </TextDateSmall>
            <TextDateSmall>» Keeb - Pteron36 (Kailh Choc Black) </TextDateSmall>
            <TextDateSmall>» Mouse - Zowie EC1-A </TextDateSmall>
            <TextDateSmall>» Audio - Logitech G533</TextDateSmall>
          </Post>

          <HeadingL2> Other tools </HeadingL2>
          <Post>
            <TextDateSmall>» OS - Windows 10 / Linux </TextDateSmall>
            <TextDateSmall>
              » Distros - CERN CentOS 7 / Arch Linux / Ubuntu (WSL)
            </TextDateSmall>
            <TextDateSmall>» Text editors - Vim / VSCode</TextDateSmall>
            <TextDateSmall>» Phone (main) - Oneplus 3T </TextDateSmall>
            <TextDateSmall>» Phone (secondary) - Oneplus 5T </TextDateSmall>
          </Post>
        </Wrapper>
      </HomeLayout>
    </>
  )
}