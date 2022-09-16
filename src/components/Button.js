import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const MainButtons = styled.div`
  position: absolute;
  top: calc(30% + 256px - 72px);
  left: 50%;
  transform: translateX(-50%);
  vertical-align: middle;
  width: max-content;
  user-select: none !important;
  text-align: center;

  @media screen and (max-width: 960px) {
    top: calc(30% + 25.6vw - 7.2vw);
    width: fit-content;
  }
`

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
  position: relative;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }
`

export const ButtonInline = styled(Button)`
  display: inline-block;
  margin: 1.5vh;
  width: 180px;
  border: 3px solid hsla(201, 100%, 35%, 1);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(201, 100%, 21%, 1);
  }
`

export const FixWrapper = styled.div`
  display: inline-block;
`