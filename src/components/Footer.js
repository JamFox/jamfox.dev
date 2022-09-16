import styled from "styled-components"
import {Pane, Desc} from "../components"

export const Footer = styled(Pane)`
  display: grid;
  grid-template-columns: 228px 128px;
  column-gap: 16px;
`

export const FooterA = styled.a`
  line-height: 2;
`

export const Tos = styled(Desc)`
  color: hsla(0, 0%, 12%, 1);
  max-width: 80vw;
  font-size: 12px;
`
