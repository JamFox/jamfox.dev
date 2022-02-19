import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const Button = styled.a`
  /* background: url(https://hdwallpaperim.com/wp-content/uploads/2017/08/22/453064-space-space_art-stars-planet-nebula-galaxy.jpg) no-repeat; */
  align-items: center;
  border: 3px solid var(--hotpink-color);
  border-radius: 100px;
  color: var(--accent-color);
  display: flex;
  font-size: 26px;
  font-weight: bold;
  justify-content: center;
  margin: 2vh auto 5vh auto;
  padding: 10px 30px;
  text-align: center;
  transition: box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  width: 200px;

  :hover {
    box-shadow: 9px 9px 0 0 var(--hotpink-color);
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }
`
