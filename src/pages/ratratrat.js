import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import {HomeLayout, SEO, HeadingL} from "../components"

const Heading = styled(HeadingL)`
  background: -webkit-linear-gradient(
    120deg,
    hsla(142, 100%, 69%, 0.89),
    hsla(77, 81%, 68%, 0.74)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function RatPage({data}) {
  return (
    <>
      <SEO title="Rat" />

      <HomeLayout>
        <Link to="/ratratratrat">
          <Heading>Yeah me too</Heading>
          <StaticImage src="../images/ratlife2.jpeg" />
        </Link>
      </HomeLayout>
    </>
  )
}
