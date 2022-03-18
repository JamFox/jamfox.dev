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
        <h1 id="ow">rikkus</h1>
        <p>Mmm, kui kosutav~</p>
        <p>Kogu see töö... Ja puhkus ka sinna otsa... Kui väsitav! </p>
        <p>
          Kui tunned vajadust energia järele, mille suunas käe sirutad? Mul on
          üks kuldne pakkumine. Ja see pakkumine kasvab puu otsas. Kahjuks küll
          mitte meie aias. Aga üldiselt kuskil ikka. Kuidagi see kobar kulda ju meie kööki jõuab?
        </p>
        <p>
          <i>Kuld ei kasva puu otsas?</i>
        </p>
        <p>
          Või siiski? Ma ütleks, et see on üsna suhteline. Kuidas mõista. Kulda
          kasutatakse rohkem lihtsalt väärtuslike asjade kirjeldamiseks. Tihti
          pole sellel tolle algse metalliga mingit pistmist. Ja ma ütleks, et kõhu täitmine on väga väärtuslik tegevus. 
        </p>
        <p>
          Saad sa igaks juhuks üle vaadata? Äkki on üle öö meie aias ka hakanud
          kasvama?
        </p>
      </Pane>
      <Pane>
        <h3>Kas leidsid?</h3>
        <Link to="/7">
          <Button>Jah!</Button>
        </Link>
      </Pane>
    </>
  )
}
