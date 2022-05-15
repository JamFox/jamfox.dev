import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import {HeadingXL, SEO, TextDate, HeadingL, TextBody} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {BREAKPOINT} from "../utils/constants"
import gif from "../images/fox.gif"

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

const Emote = styled.img`
  vertical-align: middle;
  display: inline;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="Setup" />
      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="#">setup</Link>
            </LinkText>
          </TopLink>
        </TopLinks>
      </Top>
      <HomeLayout>
        <Wrapper>
          <HeadingXL>
            <Link to="/">Setup </Link>
          </HeadingXL>

          <TextAbout>
            Gotta have good tools to do good work, right?
            <Emote src={gif} alt=":spinfox:" width={35} />
          </TextAbout>

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
            <TextDateSmall>» Mouse - Zowie EC1-A (1000Hz 800DPI)</TextDateSmall>
            <TextDateSmall>» Mousepad - Cooler Master MP510</TextDateSmall>
            <TextDateSmall>
              » Audio - HyperX Cloud 2 + Blue Snowball
            </TextDateSmall>
            <TextDateSmall>» VR System - Oculus Rift CV1 Touch</TextDateSmall>
          </Post>

          <HeadingL2> sol (homeserver) </HeadingL2>
          <Post>
            <TextDateSmall>» Server - HP ProLiant DL380 Gen9 </TextDateSmall>
            <TextDateSmall>
              » CPU - 2x Intel Xeon E5-2630 v3 @ 2.40 GHz
            </TextDateSmall>
            <TextDateSmall>» RAM - 18x16GB (ECC DDR4) </TextDateSmall>
            <TextDateSmall>» Storage - 8x600GB SAS </TextDateSmall>
            <TextDateSmall>
              » Storage Controller - HP Smart Array P440ar
            </TextDateSmall>
          </Post>

          <HeadingL2> luna (homeserver) </HeadingL2>
          <Post>
            <TextDateSmall>
              » Display - Samsung QN49Q6F (4K 60Hz)
            </TextDateSmall>
            <TextDateSmall>» Case - Define C </TextDateSmall>
            <TextDateSmall>» CPU - i5-4570 @ 3.6GHz </TextDateSmall>
            <TextDateSmall>
              » GPU - AMD ATI Radeon RX 460/560D (RIP GTX 970 MSI
              <Link to="/ratrat">
                <StaticImage
                  alt=":deadrat:"
                  src="../images/deadrat.png"
                  width={20}
                  aspectRatio={1 / 1}
                  quality={90}
                />
              </Link>
              )
            </TextDateSmall>

            <TextDateSmall>» RAM - 2x4GB+2x8GB (DDR3)</TextDateSmall>
            <TextDateSmall>
              » Storage - 500GB SSD + 250GB SSD + 1TB HDD + 500GB HDD
            </TextDateSmall>
            <TextDateSmall>
              » Keeb - Sofle v2 (Gateron Yellow Inks)
            </TextDateSmall>
            <TextDateSmall>» Mouse - Zowie EC1-A (1000Hz 800DPI)</TextDateSmall>
            <TextDateSmall>» Mousepad - Cooler Master MP510</TextDateSmall>
            <TextDateSmall>
              » Audio - Denon AVR-1612 with 5.1 surround speakers
            </TextDateSmall>
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
            <TextDateSmall>» Tablet - XP-PEN G430S </TextDateSmall>
            <TextDateSmall>» Mouse - Zowie EC1-A (1000Hz 800DPI)</TextDateSmall>
            <TextDateSmall>» Mousepad - Cooler Master MP510</TextDateSmall>
            <TextDateSmall>» Audio - Logitech G533</TextDateSmall>
          </Post>

          <HeadingL2> Other tools </HeadingL2>
          <Post>
            <TextDateSmall>» OS - Windows 10 / Linux </TextDateSmall>
            <TextDateSmall>
              » Distros - CERN CentOS 7 / Arch Linux / Ubuntu (WSL)
            </TextDateSmall>
            <TextDateSmall>» DE - KDE Plasma (no riced WMs here)</TextDateSmall>
            <TextDateSmall>» Text editors - SpaceVim / VSCode</TextDateSmall>
            <TextDateSmall>
              » Phone (main) - Oneplus 3T hardened LineageOS
            </TextDateSmall>
            <TextDateSmall>» Phone (secondary) - Oneplus 5T </TextDateSmall>
            <TextDateSmall>» Soldering iron - TS100 B2 </TextDateSmall>
            <TextDateSmall>» 3D printer - Anycubic Mega SE </TextDateSmall>
            <TextDateSmall>
              » Wifi pentest adapter - Alfa AWUS036NHA
            </TextDateSmall>
            <TextDateSmall>
              » Raspberry cluster - 2x Model 3B+ / Model 4B
            </TextDateSmall>
            <TextDateSmall>» Backpack - 5.11 RUSH24</TextDateSmall>
            <TextDateSmall>
              » Sling pack - Heimplanet Transit Line Sling Pocket
            </TextDateSmall>
          </Post>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
