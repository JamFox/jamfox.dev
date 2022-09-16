import styled from "styled-components"

export const Videofull = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

export const Video = styled.video`
  top: 0;
  left: 0;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  pointer-events: none;
  filter: blur(0.6vw);
`

export const Overlay = styled.div`
  background-color: hsla(0, 0%, 11%, 0.5);
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 11%, 0.5) 0%,
    hsla(0, 0%, 11%, 0.5) 85%,
    hsla(0, 0%, 11%, 1) 100%
  );
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`

export const CenterLogo = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  vertical-align: middle;
  width: max-content;
  user-select: none !important;
  pointer-events: none;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.75));

  @media screen and (max-width: 960px) {
    filter: drop-shadow(0px 0.4vw 1.6vw rgba(0, 0, 0, 0.75));
  }
`