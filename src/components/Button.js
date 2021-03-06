import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const Button = styled.a`
  /* background: url(https://hdwallpaperim.com/wp-content/uploads/2017/08/22/453064-space-space_art-stars-planet-nebula-galaxy.jpg) no-repeat; */
  align-items: center;
  border: 3px solid var(--hotpink-color);
  border-radius: 100px;
  color: var(--accent-color);
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  margin: 2vh auto 5vh auto;
  padding: 10px 20px;
  text-align: center;
  transition: box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  width: 200px;

  :hover {
    box-shadow: 9px 9px 0 0 var(--hotpink-color);
  }

  @keyframes button {
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
  animation-name: button;
  animation-duration: 0.5s;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }
`
