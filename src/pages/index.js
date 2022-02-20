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
  display: inline-block;
  margin: 2vh;
  width: 180px;
`

const InlineWrapper = styled.div`
  text-align: center;
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
        <InlineWrapper>
          <Link to="/">
            <ButtonInline>wowa</ButtonInline>
          </Link>
          <Link to="/">
            <ButtonInline>wiwa</ButtonInline>
          </Link>
          <Link to="/">
            <ButtonInline>mister</ButtonInline>
          </Link>
        </InlineWrapper>
      </HomeLayout>
    </>
  )
}
