import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const HeadingXL = styled.h1`
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 72%, 1),
    hsla(355, 100%, 73%, 1)
  );
  display: block;
  font-size: 60px;
  letter-spacing: -4px;
  line-height: 1.2;
  margin: 0 auto 5vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 45px;
  }
`
