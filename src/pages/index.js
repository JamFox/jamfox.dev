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
  }
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
`

const ButtonInline = styled(Button)`
  justify-content: center;
  margin-left: 1vh;
  margin-right: 1vh;
  margin-top: 5vh;
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
        <Link to="/">
          <ButtonInline>these</ButtonInline>
        </Link>
        <Link to="/">
          <ButtonInline>dont</ButtonInline>
        </Link>
        <Link to="/">
          <ButtonInline>go</ButtonInline>
        </Link>
        <Link to="/">
          <ButtonInline>anywhere</ButtonInline>
        </Link>
      </HomeLayout>
    </>
  )
}
