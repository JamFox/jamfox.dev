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
          <Link to="/">Ahhaa!</Link>
        </HeadingXL>
      </Pane>
      <Pane>
        <h1 id="ow">ilm selgineb</h1>
        <p>
          <i> Juba parem!</i>
        </p>
        <p>Jap, ma pean nõustuma! Kuidagi selgem on endal ka.</p>

        <p>
          Kas pole mitte selline tunne, nagu vehiks koperdades pilvise ilmaga
          udus, kui proovid võõras riigis võõras keeles hakkama saada? Keegi ei
          mõista sind, keegi ei saa aru, mida sa tunned, mõtled.
        </p>
        <p>
          Sa võid ju koopainimese moel häälitseda ja kätega vehkida. Võimalik,
          et sellest saadaks omal moel arugi. Aga pead tõdema, et see udu ja
          pilved ei kao kuhugi. Kõik on nii... hägune. Kas ta tõlgendas seda
          tantsu tule ümber ikka nii nagu ma soovin? Kas see varbasirutus peale
          seda suursugust diagonaaltõmmet äärekivist "STOP" märgini oli ikka
          piisavalt selge? Või tähendab see siin võõral maal midagi muud?
        </p>
        <p>
          Seega kas pole mitte hea, et valisid emakeele? Ma olen selle
          <i> valiku</i> üle uhke. Kõik on nii selge. Pilvi ja udu pole, me
          mõistame teineteise varbasirutusi.
        </p>
        <p>
          Teistsugustest varbasirutustest rääkides. Mul on vaja, et sa päriselt
          enda varbaid sirutaksid. Mitte et Mitse ja Pigu oleks taaskord midagi
          teinud. Täna õnneks mitte. Vähemalt minu teada mitte. Täna ootab sind
          hoopis tore ja pigem rahulik ringkäik, mille märksõnaks võiks olla...
          sinu lemmikud!
        </p>
        <p>
          <i> Ho-hoo! Mida see küll tähendab?</i>
        </p>
        <p>
          Mul on mõned pakkumised selles osas. Kas need päriselt paika peavad on
          juba sinu otsustada. Anna siis teada!
        </p>
        <p>
          Esiteks! Ma paneks selle magneti proovile, mis külmkapil on. Kuidas
          see oligi? <i> "To make a woman happy just add..." </i>
        </p>
        <p>
          Midagi sellist oli eks? Ma arvan, et kui sa seal magneti juures natuke
          ringi vaatad, siis võib-olla leiad midagi, mis teeb sind õnnelikuks!
        </p>
        <p>See tähendab... kui see magnet räägib tõtt ikka.</p>
      </Pane>
      <Pane>
        <h3>Kas leidsid?</h3>
        <Link to="/3a">
          <Button>Jah!</Button>
        </Link>
      </Pane>
    </>
  )
}
