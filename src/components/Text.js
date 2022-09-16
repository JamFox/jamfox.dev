import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const TextBody = styled.div`
  color: var(--dark-color-light);
  display: block;
  letter-spacing: -0.003em;
  line-height: 1.3;
  margin: 0 5% 1vh 5%;

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

export const TextBodySmall = styled(TextBody)`
  font-size: 14px;
`

export const TextDate = styled(TextBody)`
  color: var(--light-color);
  font-size: 16px;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
  }
`

export const TextBodyLight = styled(TextBody)`
  color: var(--light-color);

  a {
    color: var(--pink-color);
  }
  a:hover {
    color: hsla(348, 100%, 63%, 1);
  }

  code {
    font-family: Monaco, monospace;
    font-size: $base-font-size;
    line-height: 100%;
    background-color: var(--dark-color-lighter);
    padding: 0.08em;
    letter-spacing: -0.05em;
    word-break: normal;
    /border-radius: 5px;/
  }

  pre {
    font-family: Monaco, monospace;
    font-size: $base-font-size;
    line-height: 100%;
    background-color: var(--dark-color-lighter);
    padding: 0.08em;
    letter-spacing: -0.05em;
    word-break: normal;
    /border-radius: 5px;/
  }

  pre code {
    font-family: Monaco, monospace;
    font-size: $base-font-size;
    line-height: 100%;
    background-color: var(--dark-color-lighter);
    padding: 0.08em;
    letter-spacing: -0.05em;
    word-break: normal;
    /border-radius: 5px;/
  }
`

export const LinkText = styled.span`
  :hover {
    color: #dddddd;
  }
  :active {
    color: #bbbbbb;
  }
`

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

  @keyframes headingl {
    0% {
      left: 500px;
      opacity: 0;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
  position: relative;
  animation-name: headingl;
  animation-duration: 0.5s;
`

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

  @keyframes headingxl {
    0% {
      top: -500px;
      opacity: 0;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
  position: relative;
  animation-name: headingxl;
  animation-duration: 0.5s;
`

export const Desc = styled.p`
  text-align: center;
  vertical-align: middle;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
`

export const TfFont = styled.span`
  font-family: Titanfall, Arial, Helvetica, sans-serif;
`