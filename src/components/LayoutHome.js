import React from "react"
import styled from "styled-components"
import {GlobalStyles} from "."
import {BREAKPOINT} from "../utils/constants"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 var(--sides-padding-desktop);
  padding-top: 10vh;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 var(--sides-padding-mobile);
    padding-top: 10vh;
  }
`

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
  }
`

export function HomeLayout({children}) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}
