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
        <h1 id="ow">soe</h1>
        <p>Me jõuame juba lõpule lähemale.</p>
        <p>Oled saanud varbaid sirutada küll. Kahju, et praegu päriselt päevitada ei saa selliste ilmadega eks? Oleks vaid õues nii soe. Kuum lausa?</p>
        <p>Tead, ma arvan, et seda on võimalik korraldada isegi. Meil on ju selline huvitav seadeldis, kuhu sisse istudes hakkab mõni kord lausa kõrvetavalt kuum. Välja tulles oleme rohkem vist punased, kui peale päevitamist pruunid. Aga mingid paralleelid saab siin tõmmata. Eks ju?</p>
        <p>Aga mis sellest, et meil füüsiliselt soe on. Meil võiks olla ka vaimselt soe. Seega ma pakun, et mine ja uuri, kas see huvitav seadeldis aitab see kord ka sellega kuidagi? </p>
      </Pane>
      <Pane>
        <h3>Kas leidsid?</h3>
        <Link to="/8">
          <Button>Jah!</Button>
        </Link>
      </Pane>
    </>
  )
}
