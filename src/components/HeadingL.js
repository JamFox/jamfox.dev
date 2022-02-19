import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const HeadingL = styled.h2`
  background: -webkit-linear-gradient(
    120deg,
    hsla(355, 100%, 85%, 1),
    hsla(355, 100%, 85%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  font-size: 30px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 2.5vh;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 30px;
  }
`
