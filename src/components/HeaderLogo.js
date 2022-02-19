import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"

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

export function HeaderLogo() {
  return (
    <HeaderWrapper>
      <Logo>JF</Logo>
      <Link to="/">
        <p>Back to home</p>
      </Link>
    </HeaderWrapper>
  )
}
