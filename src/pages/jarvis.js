import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import {SEO, HeadingL} from "../components"
import {HomeLayout} from "../components/LayoutHome"

const Top = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.15);
`

const TopLinks = styled.div`
  float: right;
  display: flex;
`

const TopLink = styled.a`
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  line-height: 16px;
  padding: 24px 32px;
  white-space: nowrap;
  display: inline-block;

  color: white;
  text-decoration: none;
  user-select: none !important;
`

const LinkText = styled.span`
  :hover {
    color: #dddddd;
  }
  :active {
    color: #bbbbbb;
  }
`

const Heading = styled(HeadingL)`
  background: -webkit-linear-gradient(
    120deg,
    hsla(142, 100%, 69%, 0.89),
    hsla(171, 100%, 74%, 0.89)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function RatPage({data}) {
  return (
    <>
      <SEO title="Jarvis" />
      <Top>
        <TopLinks>
          <TopLink>
            /
            <LinkText>
              <Link to="/">home</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="/terms">terms</Link>
            </LinkText>
            /
            <LinkText>
              <Link to="#">jarvis</Link>
            </LinkText>
          </TopLink>
        </TopLinks>
      </Top>
      <HomeLayout>
        <Link to="/">
          <Heading>You, probably</Heading>
          <StaticImage src="../images/jarvis.jpg" />
        </Link>
        <p>
          Jarvis, looks like some shitposting dude on this weird website has
          reposted offensive memes. I suspect it may be Whiplash that did
          this... the villain from the second movie. Remember? He was a big
          deal. I think. Mickey Rourke played him. Rorke? Iron Man 2 big bad guy
          with electric whips??? He had a pet bird???? War machine helped????
          Well, anyway, you get it. Turns out people are caring about something
          on the internet. We need to make them feel stupid. Time is running
          out. It seems people are using the online space as a way to express
          that they are against "BAD THING" but turns out "BAD THING" can't be
          solved by them talking about it alone. Insult anything that comes up,
          but also provide no solutions either. If they start citing statistics
          not from the FBI or CIA, block them, and tell them to cope. Seethe
          even, if necessary. Be sure to spam memes that read as "you hate
          capitalism, yet you eat food??? curious." Call the new Batman movie
          "mid," and then please book tickets to see the new Batman movie. I
          haven't seen it yet. Use at least 300 of my 2,000 imbd accounts to
          bomb it with 1 star ratings regardless of if I enjoy it or not.
          Jarvis, Engage Wojak Protocals, pick NPC meme variant. Up it to 200%
          epic levels, no, 420% (epic weed number) and throw the trans flag in
          there despite it not being relevant. Say that people's identifies are
          a "trend" but do it in a cool Rick and Morty kinda way. Send Grimes a
          text begging for her to take me back. please, i cant believe its this
          difficult to get pussy while being the richest man in the world. i
          thought it would be easier. i even know memes. jarvis, buy me more
          hair. as much as possible. make it look like a dead muskrat and meld
          it into my scalp. ask her if she will take me back if I have more
          hair. she can abandon my child INTEL-RYZEN-120, thats fine. or
          whatever their name is. Then dissolve all parent's blood diamond
          fortune into KRAIN-KOIN, jumping on the hype of a Ukraine meme
          centered crypto. Buy when it's at its highest, sell when it plummets,
          which will most likely be immediately. If anyone refers to us as the
          soyjak, call them the most appropriate slurs but use "*" in place of
          one of the vowels for plausible deniability. If necessary use a full
          on "/s" but only if absolutely necessary. That's an Avenger's level
          threat. Say "pronouns sucks" but spin it in a
          hyper-im-so-progressive-look-at-me kinda way. Don't elaborate if
          anyone asks further. Order a 12 pack of Pepsi Max on Amazon prime.
          Torrent a random episode of Southpark to base this week's identity on,
          preferably one where the fat kid says something racist. So really any
          of them. upload elden ring to my second monitor, and order me the
          freshest nuggies off uber eats. tip the driver $1.69 with the comment
          of "nice" and if they complain tell them to be thankful for anything.
          fire a missile at their honda civic. Kill their family. Actually, do
          that if they don't complain too. Charge back the $1.69 after it is
          nearly 3am in the congo, wake up my child labor slaves up and tell
          them to work harder regardless of the situation. withhold any gruel
          until further notice, my stocks are down .03% and I blame them. If
          productivity declines beat them. If productivity improves, beat them
          harder. Jarvis, I hear the new Captain America is black. Bring up
          pictures of segregation, photoshop the Black Captain America on them,
          and spam them on Twitter with the tag of "RACISM STILL A THING???" It
          isn't because a black person was a thing that they weren't before.
          Also, put Obama in there for good measure. Call America a post-racial
          society. If anyone says anything that isn't praising me engage coping
          protocols. Send gore site links to their grandmother. Find a way to
          incorporate being mean to trans people or anyone who is a sexuality
          that scares me but not in a direct way. Tell black people "the past is
          the Past," and somehow make it relevant to ukraine. Turn notifications
          off. load up trans fetish videos on to xvideos. Load up Ukraine fetish
          videos on to pornhub. Karl, [18/03/2022 19:21] Load up trans Ukraine
          fetish videos to both xvideos and pornhub, upscale to 1080p, put them
          on every monitor. Set RGB to pulsating rainbow mode. Call in a bomb
          threat to Grimes next show if she rejects me and then make a post
          about how "men need to do better." Gamer mode activate. TURN ON AC/DC
          PLAYLIST, CLEAN VERSION. Load up that time I fought Girlboss Thanos.
          Let's get these sons of bitches.
        </p>
      </HomeLayout>
    </>
  )
}
