import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import {SEO, HeadingL} from "../components"
import {HomeLayout} from "../components/LayoutHome"

const Heading = styled(HeadingL)`
  background: -webkit-linear-gradient(
    120deg,
    hsla(142, 100%, 69%, 0.89),
    hsla(171, 100%, 74%, 0.89)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function RatPage({data}) {
  return (
    <>
      <SEO title="Rat" />

      <HomeLayout>
        <Link to="/ratratrat">
          <Heading>So ya like rats?</Heading>
          <StaticImage src="../images/ratlife.jpg" />
        </Link>
      </HomeLayout>
    </>
  )
}
