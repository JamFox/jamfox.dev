import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import {SEO, HeadingL} from "../components"
import {HomeLayout} from "../components/LayoutHome"

const Heading = styled(HeadingL)`
  background: -webkit-linear-gradient(
    120deg,
    hsla(32, 81%, 50%, 0.74),
    hsla(32, 81%, 68%, 0.74)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function RatPage({data}) {
  return (
    <>
      <SEO title="Rat" />

      <HomeLayout>
        <Link to="/ratratratratr">
          <Heading>But do they like you?</Heading>
          <StaticImage src="../images/ratstrike.jpg" />
        </Link>
      </HomeLayout>
    </>
  )
}
