import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {HeadingXL, Button, SEO} from "../components"
import {HeaderHome} from "../components/HeaderHome"
import {HomeLayout} from "../components/LayoutHome"
import {BREAKPOINT} from "../utils/constants"

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
`
const TextHome = styled.p`
  color: var(--light-color);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }

  position: relative;
  animation-name: headingxl;
  animation-duration: 0.4s;
`

const ButtonInlineHotpink = styled(Button)`
  margin: 2vh;
  width: 180px;
  background: url("https://c.tenor.com/RJgdogvsjEsAAAAd/galaxie-galaxy.gif")
    scroll 0 no-repeat;
`

const ButtonInlineRed = styled(Button)`
  margin: 2vh;
  width: 180px;
  border: 3px solid var(--red-color);
  :hover {
    box-shadow: 3px 11px 0 0 var(--red-color);
  }
  animation-duration: 0.4s;
`

const ButtonInlinePink = styled(Button)`
  margin: 2vh;
  width: 180px;
  border: 3px solid var(--pink-color);
  :hover {
    box-shadow: -3px 11px 0 0 var(--pink-color);
  }
  animation-duration: 0.3s;
`

const ButtonInlineOrange = styled(Button)`
  margin: 2vh;
  width: 180px;
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

export default function HomePage({data}) {
  return (
    <>
      <SEO title="Portfolio" />
      <HeaderHome />
      <HomeLayout>
        <Hero>
          <HeadingXL>JamFox's Home</HeadingXL>
          <TextHome>Under construction!</TextHome>
        </Hero>
        <Wrapper>
          <InlineWrapper>
            <Link to="https://youtu.be/Qtep7N2xpJE">
              <ButtonInlineHotpink>wowa</ButtonInlineHotpink>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://youtu.be/izWxL2mhPvQ">
              <ButtonInlineRed>wiwa</ButtonInlineRed>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://youtu.be/zvqV7tO2rC8">
              <ButtonInlinePink>mister</ButtonInlinePink>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://youtu.be/4bW-wjC61E0">
              <ButtonInlineOrange>lul</ButtonInlineOrange>
            </Link>
          </InlineWrapper>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
