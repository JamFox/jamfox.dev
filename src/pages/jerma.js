import React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import {SEO} from "../components"
import {HomeLayout} from "../components/LayoutHome"


export default function RatPage({data}) {
  return (
    <>
      <SEO title="Jerma" />
      <HomeLayout>
        <Link to="/terms">
          <StaticImage src="../images/jerma.jpg" />
        </Link>
      </HomeLayout>
    </>
  )
}
