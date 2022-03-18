import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {SEO, HeadingXL, Button} from "../components"
import {GlobalStyles} from "../components/GlobalStyles"
import {StaticImage} from "gatsby-plugin-image"


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
          <Link to="/">:(</Link>
        </HeadingXL>
      </Pane>
      <Pane>
        <h1 id="ow">kas sa hoolid oma emakeelest?</h1>
        <p>Sa oled ju ema? </p>
        <p>Kas ema töö on hoolida vaid oma lastest?</p>
        <p>On ka keel laps, kellest peaks hoolima?</p>

        <p>
          See on ju EMAkeel. Sinu keel? Sinu laps?
        </p>
        <p>
          Hmmmhhh... 
        </p>
      </Pane>
      <Pane>
        <Link to="/1">
          <Button>Okei siis, ma proovin uuesti</Button>
        </Link>
      </Pane>
    </>
  )
}
