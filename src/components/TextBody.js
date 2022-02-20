import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const TextBody = styled.div`
  color: var(--dark-color-light);
  display: block;
  letter-spacing: -0.003em;
  line-height: 1.4;
  margin: 0 5% 2vh 5%;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 0 5vh 0;
  }

  @keyframes textbody {
    0% {
      left: -500px;
      opacity: 0;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
  position: relative;
  animation-name: textbody;
  animation-duration: 0.5s;
`
