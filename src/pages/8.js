import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {SEO, HeadingXL, Button} from "../components"
import {GlobalStyles} from "../components/GlobalStyles"
import {StaticImage} from "gatsby-plugin-image"

const Desc = styled.p`
  text-align: center;
  vertical-align: middle;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
`

const Pane = styled.div`
  background: hsla(0, 0%, 11%, 1);
  padding: 32px;
  max-width: 900px;
  overflow-x: hidden;
  overflow-wrap: break-word;

  margin: 0 auto;
`

const LinkText = styled.span`
  :hover {
    color: #dddddd;
  }
  :active {
    color: #bbbbbb;
  }
`

export default function HomePage({data}) {
  return (
    <>
      <SEO title="???" />
      <GlobalStyles />

      <Pane>
        <HeadingXL id="title">
          <Link to="/"></Link>
        </HeadingXL>
      </Pane>
      <Pane>
        <h1 id="ow">tänud kalade eest ja nägemiseni</h1>
        <p>Siis oled jõudnud oma jalutuse lõpuni.</p>
        <p>
          Loodetavasti olid need pakkumised pihtas, põhjas ja oled nüüd veelgi
          rõõmsam, kui teekonna alguses.
        </p>
        <p>
          Mine ja tähista! Naudi kulda oma mitmes vormis, puhka end välja, rikasta end vaimselt! 
        </p>
      </Pane>
      <Pane>
        <Link to="https://youtu.be/tL6SQ2PGXV4">
          <Button>PALJU ÕNNE</Button>
        </Link>
      </Pane>
    </>
  )
}
