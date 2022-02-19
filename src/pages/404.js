import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby"
import styled from "styled-components"
import {Button, HeadingXL, SEO, TextBody} from "../components"
import {HomeLayout} from "../components/LayoutHome"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ButtonCentered = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
`

const InlineText = styled(TextBody)`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  text-align: center;
  horizontal-align: center;
`

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <HomeLayout>
        <Wrapper>
          <HeadingXL>NOT FOUND </HeadingXL>
          <InlineText style={{textAlign: "center"}}>
            This page doesn&#39;t exist{" "}
            <StaticImage
              src="../images/rock.png"
              width={43}
              aspectRatio={1 / 1}
              layout="fixed"
              quality={90}
            />
          </InlineText>
          <Link to="/">
            <ButtonCentered>Go home</ButtonCentered>
          </Link>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
