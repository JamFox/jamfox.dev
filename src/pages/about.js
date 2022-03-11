import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {
  Button,
  HeadingXL,
  SEO,
  TextBody,
  HeadingL,
  TextDate,
} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {StaticImage} from "gatsby-plugin-image"
import {BREAKPOINT} from "../utils/constants"
import gif from "../images/ratnce.gif"

const Wrapper = styled.div`
  margin: 1vh 1vh 1vh 1vh;
  text-align: center;
`
const InlineWrapper = styled.div`
  display: inline-block;
  margin: 1vh 0vh 1vh 0vh;
  text-align: justify;
`
const TextAbout = styled.p`
  margin: 2vh 2vh 0vh 0vh;
  vertical-align: middle;
  @keyframes textbody {
    0% {
      right: -500px;
      opacity: 0;
    }
    100% {
      right: 0px;
      opacity: 1;
    }
  }
  position: relative;
  animation-name: textbody;
  animation-duration: 0.5s;
`

const ImgWrapper = styled.div`
  float: left;
  margin: 2vh;

  position: relative;
  animation-name: textbody;
  animation-duration: 0.4s;
`

const ButtonInline = styled(Button)`
  margin: 1.5vh;
  width: 180px;
  border: 3px solid hsla(201, 100%, 35%, 1);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(201, 100%, 21%, 1);
  }
  animation-duration: 0.5s;
`

const ButtonInlineGit = styled(ButtonInline)`
  border: 3px solid hsla(360, 100%, 100%, 0.75);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(360, 100%, 100%, 0.55);
  }
  animation-duration: 0.4s;
`

const ButtonInlinePDF = styled(ButtonInline)`
  border: 3px solid var(--pink-color);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(348, 100%, 71%, 0.83);
  }
  animation-duration: 0.3s;
`
const ButtonInlineInsta = styled(ButtonInline)`
  border: 3px solid hsla(38, 100%, 68%, 0.8);
  :hover {
    box-shadow: 0px 9px 0 0 hsla(38, 100%, 68%, 0.6);
  }
  animation-duration: 0.2s;
`

const Post = styled.div`
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const PostWrapper = styled.div`
  display: inline-block;
  margin: 1vh 0vh 0vh 0vh;
  text-align: center;
  width: 50%;

  @keyframes post2 {
    0% {
      left: 1000px;
      opacity: 0;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
  position: relative;
  animation-name: post2;
  animation-duration: 0.9s;
`

const PostWrapper2 = styled(PostWrapper)`
  @keyframes post {
    0% {
      left: -1000px;
      opacity: 0;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
  position: relative;
  animation-name: post;
  animation-duration: 0.9s;
`

const ExpHeading = styled(HeadingXL)`
  display: inline-block;
  margin: margin: 10vh 2vh 2vh 2vh;

  background: -webkit-linear-gradient(
    120deg,
    hsla(355, 100%, 73%, 1),
    hsla(355, 100%, 73%, 1),
    hsla(29, 100%, 72%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ExpHeading2 = styled(HeadingXL)`
  display: inline-block;
  margin: 10vh 2vh 2vh 2vh;

  background: -webkit-linear-gradient(
    120deg,
    hsla(355, 100%, 73%, 1),
    hsla(29, 100%, 72%, 1),
    hsla(29, 100%, 72%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeadingL2 = styled(HeadingL)`
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 79%, 1),
    hsla(29, 100%, 79%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Emote = styled.img`
  vertical-align: middle;
  display: inline;
  margin-left: 1vh;
  margin-right: 1vh;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <HomeLayout>
        <Wrapper>
          <HeadingXL>
            <Link to="/">About </Link>
          </HeadingXL>
        </Wrapper>

        <ImgWrapper>
          <Link to="/abovt">
            <StaticImage
              src="../images/karlhalf.png"
              width={120}
              aspectRatio={1 / 1}
              quality={90}
              float="left"
            />
          </Link>
        </ImgWrapper>

        <TextAbout>
          Heyya! Name's Karl, but you can call me Carl
          <Link to="https://youtu.be/OXQwx1EolD8">
            <Emote src={gif} alt=":ratdance:" width={20} />
          </Link>
        </TextAbout>

        <TextAbout>
          I am a SysAdmin/DevOps by day and Hardware Development student by
          night with a curiosity for many things. I've said that I would never
          do front-end, but then I somehow ended up building this site. Guess
          it's fitting for a JamFox to have a JAMstack site?&nbsp;
          <StaticImage
            src="../images/pepeEZ.webp"
            alt=":pepeEZ:"
            width={20}
            aspectRatio={1 / 1}
            quality={90}
          />
        </TextAbout>

        <TextAbout>
          If I'm not centering divs (like I said I wouldn't) or building another
          mechboard then I'm probably running, weightlifting, swordfighting,
          taking or editing photos, maybe out with The Bois playing TTRPGs or
          conquering a hiking trail? Who knows what the life brings next,
          honestly.
        </TextAbout>

        <Wrapper>
          <InlineWrapper>
            <Link to="https://www.linkedin.com/in/katurv/">
              <ButtonInline>LinkedIn</ButtonInline>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="https://github.com/JamFox">
              <ButtonInlineGit>GitHub</ButtonInlineGit>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <a href="cv.pdf" target="blank">
              <ButtonInlinePDF>CV</ButtonInlinePDF>
            </a>
          </InlineWrapper>

          <InlineWrapper>
            <Link to="https://www.instagram.com/karlturvas/">
              <ButtonInlineInsta>Instagram</ButtonInlineInsta>
            </Link>
          </InlineWrapper>
          <Link to="mailto:karl.turvas@cern.ch">
            <TextBody> MAIL: karl.turvas@cern.ch </TextBody>
          </Link>
          <Link to="https://youtu.be/p0fhF-HfSzU">
            <TextBody> PHONE: +372 5333 7528 </TextBody>
          </Link>
        </Wrapper>

        <PostWrapper2>
          <ExpHeading2>what now </ExpHeading2>
        </PostWrapper2>

        <PostWrapper>
          <ExpHeading>????? </ExpHeading>
        </PostWrapper>

        <PostWrapper2>
          <Post>
            <HeadingL2>Wonder what will end up here?</HeadingL2>
            <TextBody>Something interesting I bet</TextBody>
            <TextDate>brrr</TextDate>
          </Post>
        </PostWrapper2>
        <PostWrapper>
          <Post>
            <HeadingL>This probably wont be as interesting tho</HeadingL>
            <TextBody>Unless? 👀</TextBody>
            <TextDate>crabs</TextDate>
          </Post>
        </PostWrapper>
      </HomeLayout>
    </>
  )
}
