import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {
  HomeLayout,
  SEO,
  Top,
  TopLinks,
  TopLink,
  LinkText,
  Footer,
  FooterA,
  Tos,
  TextBodySmall,
  HeadingL,
  HeadingXL,
  TextDate,
} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Wrapper = styled.div`
  margin: 1vh 1vh 1vh 1vh;
  text-align: center;
`

const Post = styled.div`
  margin-bottom: 50px;
  vertical-align: middle;
  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const HeadingL2 = styled(HeadingL)`
  font-size: 25px;
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 79%, 1),
    hsla(29, 100%, 79%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="Links" />
      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="#">links</Link>
            </LinkText>
          </TopLink>
        </TopLinks>
      </Top>
      <HomeLayout>
        <Wrapper>
          <HeadingXL>
            <Link to="/">Links </Link>
          </HeadingXL>
        </Wrapper>

        <Post>
          <HeadingL2>Explore / Experiences</HeadingL2>
          <TextDate>
            <Link to="https://vrchat.com/">
              <LinkText>VRChat </LinkText>
            </Link>
            (Not sure? Check out:
            <Link to="https://youtu.be/4PHT-zBxKQQ">
              <LinkText>Making Sense of VRChat</LinkText>
            </Link>
            )
          </TextDate>
          <TextBodySmall>
            Experience the early web once again, on overdrive.
          </TextBodySmall>
          <TextDate>
            <Link to="https://matrix.org/">
              <LinkText>matrix</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            An open network for secure, decentralized communication.
          </TextBodySmall>
          <TextDate>
            <Link to="https://everynoise.com/">
              <LinkText>Every Noise At Once</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Algorithmically-generated, readability-adjusted scatter-plot of the
            musical genre-space.
          </TextBodySmall>
          <TextDate>
            <Link to="https://tildes.net/">
              <LinkText>Tildes</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Non-profit community site driven by its users' interests.
          </TextBodySmall>
          <TextDate>
            <Link to="https://blog.geocities.institute/about">
              <LinkText>One Terabyte of Kilobyte Age</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Geocities internet archeology.</TextBodySmall>
          <TextDate>
            <Link to="https://neal.fun/absurd-trolley-problems/">
              <LinkText>Absurd Trolley Problems</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Get to know yourself by answering increasingly absurd trolley
            problems.
          </TextBodySmall>
          <TextDate>
            <Link to="https://www.cameronsworld.net/">
              <LinkText>Cameron's World</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>A love letter to the Internet of old.</TextBodySmall>
          <TextDate>
            <Link to="https://www.youtube.com/playlist?list=PLfINogWdDN60ooq4cglyFNzya34TkJaJQ">
              <LinkText>Ancient Memes And Internet Classics Playlist</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Trip down to 2010.</TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Infotech</HeadingL2>

          <TextDate>
            <Link to="https://web.mit.edu/kerberos/dialogue.html">
              <LinkText>
                Designing an Authentication System: a Dialogue in Four Scenes
              </LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Clever story about how Kerberos auth protocol came to be.
          </TextBodySmall>

          <TextDate>
            <Link to="https://github.com/dylanaraps/pure-bash-bible">
              <LinkText>pure bash bible</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Spice up your servers with no dependencies by utilizing unreadable
            arcane methods.
          </TextBodySmall>

          <TextDate>
            <Link to="https://512kb.club/">
              <LinkText>The 512KB Club</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            I'm not part of this club, be better than me.
          </TextBodySmall>

          <TextDate>
            <Link to="https://sites.google.com/alanreiser.com/handsdown">
              <LinkText>Hands Down Layout</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Fuck QWERTY and standard keyboards in general.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/Sy7yPwj2fsg">
              <LinkText>Zack Freedman</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Cyborg hardware hacker from the near future making unnecessarily
            high-effort videos.
          </TextBodySmall>

          <TextDate>
            <Link to="https://observablehq.com/@tomlarkworthy/hacker-favourites-analysis">
              <LinkText>Most favorited Hacker News posts of all time</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            HN scraped in 2020-09-1 from the public favourites lists.
          </TextBodySmall>

          <TextDate>
            <Link to="https://www.privacyguides.org/">
              <LinkText>Privacy Guides</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The guide to restoring your online privacy.
          </TextBodySmall>

          <TextDate>
            <Link to="https://www.youtube.com/user/DigitalFoundry">
              <LinkText>Digital Foundry</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Game technology and hardware reviews, using bespoke capture and
            analysis tools to provide a unique look at the way games play.
          </TextBodySmall>

          <TextDate>
            <Link to="https://www.rtings.com/">
              <LinkText>RTINGS</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The best reviews on consumer-grade display and audio technology.
          </TextBodySmall>

          <TextDate>
            <Link to="https://foaas.herokuapp.com/">
              <LinkText>Fuck Off As A Service</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            FOAAS provides a modern, RESTful, scalable solution to the common
            problem of telling people to fuck off.
          </TextBodySmall>

          <TextDate>
            <Link to="https://landscape.cncf.io/">
              <LinkText>Cloud Native Interactive Landscape</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            As if you didn't have enough technologies to learn.
          </TextBodySmall>

          <TextDate>
            <Link to="https://documentation.divio.com/">
              <LinkText>The documentation system</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The Grand Unified Theory of Documentation.
          </TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Generally Interesting</HeadingL2>
          <TextDate>
            <Link to="https://waitbutwhy.com/">
              <LinkText>Wait But Why</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The most useful procrastination website you'll ever find.
          </TextBodySmall>
          <TextDate>
            <Link to="https://wtfhappenedin1971.com/">
              <LinkText>WTF Happened In 1971?!</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Feel the pessimism boiling.</TextBodySmall>
          <TextDate>
            <Link to="https://fauux.neocities.org/">
              <LinkText>Fauux Neocity</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Wired sound for wired people.</TextBodySmall>
          <TextDate>
            <Link to="http://hasthelargehadroncolliderdestroyedtheworldyet.com/">
              <LinkText>Has The LHC Destroyed The World Yet?</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>Stay in touch, just to make sure.</TextBodySmall>
          <TextDate>
            <Link to="https://www.youtube.com/c/3blue1brown">
              <LinkText>3Blue1Brown</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>The best math channel, in the universe.</TextBodySmall>
          <TextDate>
            <Link to="https://shoulditbeameeting.com/">
              <LinkText>Should it be a meeting?</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Please ask yourself this question every time.
          </TextBodySmall>
          <TextDate>
            <Link to="https://old.reddit.com/r/AskReddit/comments/24vzgl/you_just_won_a_656_million_dollar_lottery_what_do/chba4bf">
              <LinkText>
                You just won a 656 Million Dollar Lottery. What do you do now?
              </LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            /u/BlakeClass's classic, thought provoking advice on what to do
            after a lottery win.
          </TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Video Essayists</HeadingL2>
          <TextDate>
            <Link to="https://youtu.be/4PHT-zBxKQQ">
              <LinkText>People Make Games</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Stories about video games and the people who make them.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/zg2Y5rxlg-M">
              <LinkText>Whitelight</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Dark Souls of games media, your #1 source of video game analysis and
            occasionally, existential crises.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/YQ_xWvX1n9g">
              <LinkText>Folding Ideas</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            "Just a movie" or "just a game"? Think again.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/tubXWOJfU5A">
              <LinkText>BDobbinsFTW</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The Gameplay Commentary taken to its logical evolution.
          </TextBodySmall>

          <TextDate>
            <Link to="https://2b2t.miraheze.org/wiki/Nocom">
              <LinkText>2b2t wiki</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            The unfathomable stories, wars, exploits and hacks from the oldest
            anarchy server in minecraft.
          </TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Essays</HeadingL2>
          <TextDate>
            <Link to="https://www.currentaffairs.org/2018/03/the-intellectual-we-deserve">
              <LinkText>The Intellectual We Deserve</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Jordan Peterson's popularity is the sign of a deeply impoverished
            political and intellectual landscape…
          </TextBodySmall>
          <TextDate>
            <Link to="https://youtu.be/MEX-f_c9w0A">
              <LinkText>
                "Turn Ur Brain Off" - The Purpose and Value of Media Analysis
              </LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Counterargument to the all too tiring "just to turn your brain off."
          </TextBodySmall>
          <TextDate>
            <Link to="https://www.polygon.com/2018/12/17/18142124/shitposting-memes-dada-art-history">
              <LinkText>
                Shitposting is an art, if history is any indication
              </LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Drawing a line between an internet pastime and the Dadaist movement.
          </TextBodySmall>
        </Post>

        <Post>
          <HeadingL2>Other</HeadingL2>
          <TextDate>
            <Link to="https://xkcd.com/1205/">
              <LinkText>xkcd</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Witty, sometimes useful short comic panels.
          </TextBodySmall>

          <TextDate>
            <Link to="https://youtu.be/euik1Zrs30w">
              <LinkText>rat spin 10 hours</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>rat. spin.</TextBodySmall>
          <TextDate>
            <Link to="https://youtu.be/Lti_zl3MnT4">
              <LinkText>I did a thing</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Probably the most entertaining channel you can find.
          </TextBodySmall>
          <TextDate>
            <Link to="https://www.youtube.com/c/2kliksphilip">
              <LinkText>2kliksphilip</LinkText>
            </Link>
            and
            <Link to="https://www.youtube.com/c/kliksphilip">
              <LinkText>kliksphilip</LinkText>
            </Link>
          </TextDate>
          <TextBodySmall>
            Laid back, down to earth guy making videos about anything and
            everything.
          </TextBodySmall>
        </Post>
      </HomeLayout>
      <Footer>
        <FooterA>
          <Link to="https://youtube.com/playlist?list=FLCF_318p-7YO2OM18OEYpyw">
            <Tos>sekrit favorits</Tos>
          </Link>
        </FooterA>
      </Footer>
    </>
  )
}
