import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {Button, HeadingXL, SEO, TextBody} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import rock from "../images/rock-eye.gif"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5vh;
`

const InlineText = styled(TextBody)`
  display: inline-block;
  margin: 0vh 2vh 0vh;
  line-height: 2.5;
`

const Emote = styled.img`
  vertical-align: middle;
  display: inline;
`

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <HomeLayout>
        <Wrapper>
          <HeadingXL>NOT FOUND</HeadingXL>

          <InlineText style={{textAlign: "center"}}>
            You are not supposed to be here&nbsp;
            <Emote src={rock} alt="rock-eyebrow.gif" width={40} />
          </InlineText>

          <Link to="/">
            <Button>Go home</Button>
          </Link>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
