import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"
import banan from "../images/banan.gif"

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`

const Logo = styled.p`
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 72%, 1),
    hsla(355, 100%, 73%, 1)
  );
  display: block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5vh;
`

const TextWrapper = styled.div`
  margin: 1vh;
`

export function HeaderLogo() {
  return (
    <HeaderWrapper>
      <Logo>JF</Logo>
      <Wrapper>
        <TextWrapper>
          <Link to="/">
            <p display="inline-block">Back to home</p>
          </Link>
        </TextWrapper>
        <Link to="/">
          <img src={banan} alt="banan.gif" width={20} />
        </Link>
      </Wrapper>
    </HeaderWrapper>
  )
}
