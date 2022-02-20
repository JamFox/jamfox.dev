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
const InlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5vh;
  position: relative;
  animation-name: textbody;
  animation-duration: 0.5s;
`

const InlineText = styled(TextBody)`
  display: inline-block;
  margin: 0vh 2vh 0vh;
  line-height: 2.5;
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
              You&#39;re not supposed to be here {" "}
            </InlineText>
            <img src={rock} alt="rock-eyebrow.gif" width={40} />
          </InlineWrapper>
          <Link to="/">
            <Button>Go home</Button>
          </Link>
        </Wrapper>
      </HomeLayout>
    </>
  )
}
