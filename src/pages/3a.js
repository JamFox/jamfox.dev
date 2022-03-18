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
        <h1 id="ow">vigurid</h1>
        <p>
          Oh! Kui imeline!
        </p>
        <p>
          Oleks see aga nii lihtne. Mina küll nii lihtsate vastustega
          rahul ei ole.
        </p>
        <p>Nagu sa vist juba minu rääkimisstiilist aru oled saanud. Vigureid peab olema mitmeid ning need peavad olema ridade vahel ja peidus. Just nagu mu tänased pakkumised.</p>
        <p>
          Ma ju ütlesin, et mul on pakkumisi. Mitmuses. Niisiis oli meil vaja
          neist eelmainitud udust ja pilvedest lahti saada, et päev oleks selge
          ja ilus. Ma ütleks, et keelevahetuse ning esimese
          pakkumisega õnnestus see päev selgemaks teha küll.
        </p>
        <p>Muide, nüüd kui pilved ja udu on läinud ära, kuhu lähed sina?</p>
      </Pane>
      <Pane>
        <h3>Ma lähen:</h3>
        <Link to="/5">
          <Button>Päevitama!</Button>
        </Link>
      </Pane>
    </>
  )
}
