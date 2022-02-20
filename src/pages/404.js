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
  margin: 5vh;
`
const InlineWrapper = styled.div`
  text-align: center;
  margin: 10vh;
`

const InlineText = styled(TextBody)`
  display: inline-block;
  margin: 0vh 2vh 0vh;
`

const InlineImg = styled(StaticImage)`
  display: inline-block;
`

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <HomeLayout>
        <Wrapper>
          <HeadingXL>NOT FOUND </HeadingXL>
          <InlineWrapper>
            <InlineText style={{textAlign: "center"}}>
              This page doesn&#39;t exist{" "}
            </InlineText>
            <StaticImage
              src="../images/rock.png"
              width={43}
              aspectRatio={1 / 1}
              quality={90}
            />
          </InlineWrapper>
          <Link to="/">
            <Button>Go home</Button>
          </Link>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
