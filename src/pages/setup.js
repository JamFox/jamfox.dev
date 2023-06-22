import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import {
  HomeLayout,
  HeadingXL,
  SEO,
  TextDate,
  HeadingL,
  TextBody,
  Top,
  TopLinks,
  TopLink,
  LinkText,
  Emote
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import gif from "../images/fox.gif"


const Wrapper = styled.div`
  margin: 2vh 5vh 5vh 5vh;
  text-align: center;
`

const SmallHeader = styled(TextBody)`
  width: auto;
  margin: 1vh 0vh 1vh 0vh;
  position: relative;
`

const Post = styled.div`
  margin-bottom: 5px;
  align-items: center;
  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const HeadingL2 = styled(HeadingL)`
  font-family: 'IBMPlexMono';
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 79%, 1),
    hsla(29, 100%, 79%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const TextDateSmall = styled(TextDate)`
  font-family: 'IBMPlexMono';
  line-height: 1.4;
  margin: 0vh 0vh 0vh 0vh;
  text-align: left;
  justify-content: top;
`

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Setup"
        description="Specs of my homelab, gaming computer and everything else!"
      />
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

          <SmallHeader>
            Gotta have good tools to do good work, right?
            <Emote src={gif} alt=":spinfox:" width={35} />
          </SmallHeader>

          <HeadingL2> titaniumjam mk3 (gaming)</HeadingL2>
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
            <TextDateSmall>» VR System - Oculus Rift CV1 Touch</TextDateSmall>
          </Post>

          <HeadingL2><Link to="https://docs.jamfox.dev/content/homelab/">jamlab (homelab)</Link></HeadingL2>
          <Post>
            <TextDateSmall>sol (experiment server) </TextDateSmall>
            <TextDateSmall>» Server - HP ProLiant DL380 Gen9 </TextDateSmall>
            <TextDateSmall>
              » CPU - 2x Intel Xeon E5-2637 v3 @ 3.5GHz
            </TextDateSmall>
            <TextDateSmall>» RAM - 16x16GB (ECC DDR4 2133CL15) </TextDateSmall>
            <TextDateSmall>» Storage - 8x600GB SAS (RAID10)</TextDateSmall>
            <TextDateSmall>
              » Storage Controller - HP Smart Array P440ar
            </TextDateSmall>
          </Post>

          <Post>
            <TextDateSmall>&#8203;</TextDateSmall>
            <TextDateSmall>ignis (nas and mediaserver)</TextDateSmall>
            <TextDateSmall>» Server - Synology DS220+</TextDateSmall>
            <TextDateSmall>
              » CPU - Intel Celeron J4025
            </TextDateSmall>
            <TextDateSmall>» RAM - 2GB+4GB D4NESO-2666-4G (DDR4) </TextDateSmall>
            <TextDateSmall>» Storage - 2x8TB SEAGATE Exos 7E10 (SHR)</TextDateSmall>
          </Post>

          <Post>
            <TextDateSmall>&#8203;</TextDateSmall>
            <TextDateSmall>equinox (rpi cluster)</TextDateSmall>
            <TextDateSmall>» Main - Raspberry Pi Model 4B</TextDateSmall>
            <TextDateSmall>
              » Secondary - 2x Raspberry Pi Model 3B+
            </TextDateSmall>
            <TextDateSmall>» PoE Hat - Waveshare PoE HAT (B)</TextDateSmall>
            <TextDateSmall>» Camera - Raspberry Pi Camera 2</TextDateSmall>
          </Post>

          <Post>
            <TextDateSmall>&#8203;</TextDateSmall>
            <TextDateSmall>automata (automation controller)</TextDateSmall>
            <TextDateSmall>» Automation controller - Arduino Uno R3</TextDateSmall>
            <TextDateSmall>» Sensor kit - ELEGOO UNO R3 Most Complete Starter Kit</TextDateSmall>
          </Post>

          <HeadingL2> luna (workstation) </HeadingL2>
          <Post>
            <TextDateSmall>» Display - Samsung QN49Q6F (4K 60Hz)</TextDateSmall>
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
            <TextDateSmall>» Monitor1 - Built-in (1080p 60Hz)</TextDateSmall>
            <TextDateSmall>
              » Monitor2 - PHL 273V7QDSB (1080p 70Hz)
            </TextDateSmall>
            <TextDateSmall>» Monitor3 - PHL 244E5 (1080p 60Hz) </TextDateSmall>
          </Post>

          <HeadingL2> terra (laptop) </HeadingL2>
          <Post>
            <TextDateSmall>» Model - HP Elitebook 840 G8</TextDateSmall>
            <TextDateSmall>» CPU - Intel Core I5-1135G7</TextDateSmall>
            <TextDateSmall>» RAM - 2x 16GB (DDR4 3200) </TextDateSmall>
            <TextDateSmall>» Storage - 1TB NVMe</TextDateSmall>
          </Post>

          <HeadingL2> I/O </HeadingL2>
          <Post>
            <TextDateSmall>» Headphone (gaming) - Logitech G533</TextDateSmall>
            <TextDateSmall>» Headphone (EDC) - Sony WH-1000XM5</TextDateSmall>
            <TextDateSmall>» Headphone (buds) - Anker SoundBuds Slim+</TextDateSmall>
            <TextDateSmall>» Microphone - Blue Snowball </TextDateSmall>
            <TextDateSmall>» Keeb - Helidox 'Corne' Choc SMD (Kailh Choc Red) </TextDateSmall>
            <TextDateSmall>» Keeb - Ferris Sweep v2.2 (Kailh Choc Blue) </TextDateSmall>
            <TextDateSmall>» Keeb - Pteron36 (Kailh Choc Black) </TextDateSmall>
            <TextDateSmall>
              » Keeb - Sofle v2 (Lubed & filmed Gateron Yellow Ink)
            </TextDateSmall>
            <TextDateSmall>» Keeb - Ducky Shine 2 (MX Brown) </TextDateSmall>
            <TextDateSmall>» Tablet - XP-PEN G430S </TextDateSmall>
            <TextDateSmall>
              » Mouse (gaming)- Logitech G Pro X Superlight (1000Hz 800DPI)
            </TextDateSmall>
            <TextDateSmall>» Mouse (work) - Zowie EC1-A (1000Hz 800DPI)</TextDateSmall>
            <TextDateSmall>» Mousepad - Cooler Master MP510</TextDateSmall>
          </Post>

          <HeadingL2> Other </HeadingL2>
          <Post>
            <TextDateSmall>» OS - Windows 11 / Linux </TextDateSmall>
            <TextDateSmall>
              » Distros - CentOS/RHEL / Arch Linux / Ubuntu (WSL) / Debian
            </TextDateSmall>
            <TextDateSmall>» DE - KDE Plasma (no riced WM yet)</TextDateSmall>
            <TextDateSmall>» Text editors - SpaceVim / VSCode</TextDateSmall>
            <TextDateSmall>
              » Phone (main) - Oneplus 5T DivestOS
            </TextDateSmall>
            <TextDateSmall>» Phone (secondary) - Iphone 12 Pro </TextDateSmall>
            <TextDateSmall>
              » E-reader - Kobo Libra 2
            </TextDateSmall>
            <TextDateSmall>» Watch - Garmin Forerunner 735XT </TextDateSmall>
            <TextDateSmall>» Soldering iron - TS100 B2 </TextDateSmall>
            <TextDateSmall>» 3D printer - Anycubic Mega SE </TextDateSmall>
            <TextDateSmall>
              » Wifi pentest adapter - Alfa AWUS036NHA
            </TextDateSmall>
            <TextDateSmall>» Backpack - 5.11 RUSH24</TextDateSmall>
            <TextDateSmall>
              » Sling pack (EDC) - Alpaka Modular Sling
            </TextDateSmall>
            <TextDateSmall>
              » Sling pack (hike) - Heimplanet Transit Line Sling Pocket
            </TextDateSmall>
            <TextDateSmall>
              » Car - Kia ProCee'D 1.6 CRDi 2008 115PS/85kW
            </TextDateSmall>
            <TextDateSmall>
              » Glasses - Ray-Ban Rob RX6472 2943 52
            </TextDateSmall>
            <TextDateSmall>
              » Eyes - R -1.75 (-0.50) 100° L -1.50 (-0.50) 75°
            </TextDateSmall>
            <TextDateSmall>
              » Skis (Alpine) - Rossignol React R10 Ti (2022)
            </TextDateSmall>
          </Post>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
