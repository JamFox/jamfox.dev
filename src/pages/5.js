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
        <h1 id="ow">magav koer</h1>
        <p>Milline imeline <i> valik</i>!</p>
        <p>Ma arvan sa oled selle ära teeninud küll. Eelmine pakkumine peaks samuti väga hästi siia grillimise kõrvale ilusti minema, eks? Milline puhkus! Milline lõõgastus!</p>
        <p>Kuid ütle mulle. Kui keegi puhkab palju, siis: on ta laisk või on ta töökas?</p>
        <p>Lamab ju! Lihtsalt niisama! Midagi ei tee! Laisk kurat!</p>
        <p>Aga...</p>
        <p>Äkki ta on nii erakordselt väsinud lihtsalt. Ta võiks ju proovida püsti tõusta. Ta ei saa. Jalad ei võta, sest need on teinud palju tööd.</p>
        <p>Mina olen ikka seda usku, et kui keegi ikka sellises naelutatud olekus puhkab, siis on ta ikka kirjeldamatult töökas. Ma arvan, et sa oled isegi kogenud seda küllastust, mis tekib, kui oled väga pikka aega puhanud. Kuidagi igav hakkab? Tahaks nagu... midagi teha. Üks kõik mida. Ja siis võib puhkamise lugeda lõppenuks. Lähed jalutama näiteks.</p>
        <p>Kui see on tuttav, siis ma arvan, et selle mõttega on käinud kaasas ka see killuke: kuidas kassidel igav ei hakka? Kassid on nagu kõige kohusetundlikumad puhkajad. Alati oma koha peal. Vankumatult. Iga. Päev. Kuidas see võimalik on?</p>
        <p>See on üks hästi hoitud saladus. Täpselt nagu sina, ei saa ka kassid ainult puhata. Loomulikult neil hakkab igav. Asja uba seisneb selles, et nad võitlevad iga hetk oma peremehe heaolu nimel. Kuid! Nad teevad seda, siis kui sa seda ei märka. Kui sa näeks, kuidas nad peavad rabelema ja töötama ja vaeva nägema ja higistama, et sul oleks hea olla! Sa ei lubaks sellist asja, sa paneks nad kohe sunniviisiliselt puhkama.</p>
        <p>Ehk nad puhkavad siis kui sa neid näed. Nad teevad tööd siis kui sa neid ei näe.</p>
        <StaticImage src="../images/paev.jpg" />
        <p>Ja tead mis? Ma arvan, et sinuga on sama lugu. Ma ei näe kui palju sa tööd teed, et kõigil oleks kodus parem olla. Ja ma arvan, et sa väärid ka puhkust. Pilt võiks olla heaks vihjeks, kust oma puhkust otsida.</p>
      </Pane>
      <Pane>
        <h3>Kas leidsid?</h3>
        <Link to="/6">
          <Button>Jah!</Button>
        </Link>
      </Pane>
    </>
  )
}
