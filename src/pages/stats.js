import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {SEO, HeadingXL, HeadingL} from "../components"
import {GlobalStyles} from "../components/GlobalStyles"

const Top = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.15);
`

const TopLinks = styled.div`
  float: right;
  display: flex;
`

const TopLink = styled.a`
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  line-height: 16px;
  padding: 24px 32px;
  white-space: nowrap;
  display: inline-block;

  color: white;
  text-decoration: none;
  user-select: none !important;
`

const LinkText = styled.span`
  :hover {
    color: #dddddd;
  }
  :active {
    color: #bbbbbb;
  }
`

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

const Footer = styled(Pane)`
  display: grid;
  grid-template-columns: 228px 128px;
  column-gap: 16px;
`

const FooterA = styled.a`
  line-height: 2;
`

const Tos = styled(Desc)`
  color: hsla(0, 0%, 14%, 1);
  max-width: 80vw;
  font-size: 12px;
`

export default function HomePage({data}) {
  return (
    <>
      <SEO title="Stats" />
      <GlobalStyles />

      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="/about">about</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="#">stats</Link>
            </LinkText>
          </TopLink>
        </TopLinks>
      </Top>
      <Pane></Pane>
      <Pane>
        <HeadingXL id="title">
          <Link to="/">Stats</Link>
        </HeadingXL>
      </Pane>

      <Pane>
        <HeadingL id="s1">SECTION 1 - Destinations Traveled</HeadingL>

        <p>Table of Contents (click to see destinations):</p>
        <ol>
          <li>
            <Link to="/stats#croatia">
              <LinkText>Croatia</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#denmark">
              <LinkText>Denmark</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#finland">
              <LinkText>Finland</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#france">
              <LinkText>France</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#greece">
              <LinkText>Greece</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#italy">
              <LinkText>Italy</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#latvia">
              <LinkText>Latvia</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#lithuania">
              <LinkText>Lithuania</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#poland">
              <LinkText>Poland</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#slovakia">
              <LinkText>Slovakia</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#spain">
              <LinkText>Spain</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#sweden">
              <LinkText>Sweden</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#switzerland">
              <LinkText>Switzerland</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#thailand">
              <LinkText>Thailand</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#turkey">
              <LinkText>Turkey</LinkText>
            </Link>
          </li>
          <li>
            <Link to="/stats#uk">
              <LinkText>United Kingdom</LinkText>
            </Link>
          </li>
        </ol>

        <h3 id="croatia">Croatia</h3>
        <ul>
          <li>???</li>
        </ul>

        <h3 id="denmark">Denmark</h3>
        <ul>
          <li>Billund</li>
          <li>Copenhagen</li>
        </ul>

        <h3 id="finland">Finland</h3>
        <ul>
          <li>Helsinki</li>
          <li>Lapland</li>
        </ul>

        <h3 id="france">France</h3>
        <ul>
          <li>Paris</li>
          <li>Prevessin-Moen</li>
          <li>Annecy</li>
          <li>Ferney-Voltaire</li>
          <li>Saint-Genis-Pouilly</li>
          <li>Annecy</li>
          <li>Thoiry</li>
          <li>Monnetier</li>
          <li>Les Carroz d'Arâches</li>
        </ul>

        <h3 id="greece">Greece</h3>
        <ul>
          <li>Crete</li>
          <li>Corfu</li>
        </ul>

        <h3 id="italy">Italy</h3>
        <ul>
          <li>Florence</li>
          <li>Rome</li>
        </ul>

        <h3 id="latvia">Latvia</h3>
        <ul>
          <li>Riga</li>
          <li>Sigulda</li>
          <li>Jūrmala</li>
        </ul>

        <h3 id="lithuania">Lithuania</h3>
        <ul>
          <li>Kaunas</li>
        </ul>

        <h3 id="poland">Poland</h3>
        <ul>
          <li>Warsaw</li>
          <li>Gdańsk</li>
          <li>Łódź</li>
          <li>Kraków</li>
          <li>Zakopane</li>
        </ul>

        <h3 id="slovakia">Slovakia</h3>
        <ul>
          <li>Jasna</li>
          <li>Liptovský Mikuláš</li>
        </ul>

        <h3 id="spain">Spain</h3>
        <ul>
          <li>Tenerife</li>
          <li>Gran Canaria</li>
        </ul>

        <h3 id="sweden">Sweden</h3>
        <ul>
          <li>Stockholm</li>
          <li>Visby</li>
        </ul>

        <h3 id="switzerland">Switzerland</h3>
        <ul>
          <li>Geneva</li>
          <li>Meyrin</li>
          <li>Lausanne</li>
          <li>Bern</li>
          <li>Interlaken</li>
        </ul>

        <h3 id="thailand">Thailand</h3>
        <ul>
          <li>???</li>
        </ul>

        <h3 id="turkey">Turkey</h3>
        <ul>
          <li>???</li>
        </ul>

        <h3 id="uk">United Kingdom</h3>
        <ul>
          <li>London</li>
        </ul>
      </Pane>
      <Footer>
        <FooterA>
          <Link to="/pi">
            <Tos>Million numbers of Pi</Tos>
          </Link>
        </FooterA>
      </Footer>
    </>
  )
}
