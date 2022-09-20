import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {HomeLayout, Button, HeadingXL, SEO, TextBody, Emote} from "../components"
import Rock from "../images/rock-eye.gif"

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

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404" description="Not Found"/>
      <HomeLayout>
        <Wrapper>
          <HeadingXL>NOT FOUND</HeadingXL>

          <InlineText style={{textAlign: "center"}}>
            You are not supposed to be here&nbsp;
            <Emote src={Rock} alt="rock-eyebrow.gif" width={40} />
          </InlineText>

          <Link to="/">
            <Button>Go home</Button>
          </Link>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
