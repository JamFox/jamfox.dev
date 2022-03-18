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
          <Link to="/">Bienvenue ! Et joyeux anniversaire !</Link>
        </HeadingXL>
      </Pane>
      <Pane>
        <h1 id="ow">confusion et pandémonium</h1>
        <p>
          <i> C'est quoi ce bordel ?</i> - tu penses.
        </p>
        <p>
          <i>
            <Link to="/jerma">
              <LinkText> Et pourquoi est-il en français ?</LinkText>
            </Link>
          </i>
        </p>

        <p><i>Attendez, vous ne pouviez pas déjà apprendre le français ?</i></p>
        <p>
          Donc ma question est, pourquoi vous inquiétez-vous de savoir si j'ai
          appris le français ou non ? C'est TON anniversaire pas le mien.
        </p>
        <p>
          Ce dont vous devriez vous soucier, c'est d'obtenir cela dans une
          langue que vous pouvez réellement lire. Sinon, comment allez-vous
          accéder à vos cadeaux ?
        </p>
      </Pane>
      <Pane>
        <h3>changer la langue en:</h3>
        <Link to="/1miks">
          <Button>ENGLISH</Button>
        </Link>
        <Link to="/2">
          <Button>EESTI</Button>
        </Link>
      </Pane>
    </>
  )
}
