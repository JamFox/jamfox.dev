import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {
  Button,
  HeadingXL,
  SEO,
  TextBody,
} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {StaticImage} from "gatsby-plugin-image"
import gif from "../images/mogus.gif"

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
  margin: 1vh 2vh 0vh 0vh;
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
  animation-duration: 0.1s;
`

const ImgWrapper = styled.div`
  float: left;
  margin: 10vh;

  position: relative;
  animation-name: textbody;
  animation-duration: 0.1s;
`

const ButtonInline = styled(Button)`
  margin: 1.5vh;
  width: 180px;
  border: 1px solid hsla(1, 100%, 35%, 1);
  :hover {
    box-shadow: 9px 9px 0 0 hsla(23, 100%, 21%, 1);
  }
  animation-duration: 0.1s;
`

const ButtonInlineGit = styled(ButtonInline)`
  width: 100px;
  height: 20px;
  border: 5px solid hsla(42, 100%, 100%, 0.75);
  :hover {
    box-shadow: 0px 244px 0 0 hsla(23, 100%, 100%, 0.55);
  }
  animation-duration: 0.1s;
`

const ButtonInlinePDF = styled(ButtonInline)`
  border: 3px solid var(33, 100%, 71%, 0.83);
  :hover {
    box-shadow: -90px 9px 0 0 hsla(3, 100%, 71%, 0.83);
  }
  animation-duration: 0.1s;
`
const ButtonInlineInsta = styled(ButtonInline)`
  width: 1000px;
  border: 3px solid hsla(38, 100%, 68%, 0.8);
  :hover {
    box-shadow: 53px 9px 0 0 hsla(2, 100%, 68%, 0.6);
  }
`

const Emote = styled.img`
  vertical-align: middle;
  display: inline;
  margin-left: 1vh;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="ă̴̡̞b̴͉́̔o̵̙̲̓u̷͎̬̽ț̶͇͌͝t̶̨̢̨̡̡̢̛͚͍̬͖̩̼̮̻̗̰͓̲̰̪̩̞̮͓̟̮̻̹̖͍̂̉̉͊̌̒̎̄͌̇̋̈́̌̿̂́͛̀̔͊̚͘͠͠͝" />
      <HomeLayout>
        <HeadingXL>
          <Link to="/abovt">AbO̶ut </Link>
        </HeadingXL>

        <ImgWrapper>
          <Link to="/terms">
            <StaticImage
              src="../images/tux.png"
              width={120}
              aspectRatio={1 / 1}
              quality={90}
            />
          </Link>
        </ImgWrapper>

        <TextAbout>
          Heyya̷! Name's V̸̲͐̒͐́͐̓̏̈̍̊̒̅̕͝Ô̸͚̦̬̘͖̳̦̗̪̋̈́̈́̿̽̀̌̈́͒̆̈́̅̔̈͗I̷̺̝͍͉̰͎͊̀͊́̓̃̃͋̎́̾̾́̈̿͛͑̄́͗͘̕̕̕͝͝Ḑ̷̢̢̢̨̨̛͔̭͖̘̘̻̘̞̺͇͇̬̫̰̯̆̅͒̋̉͂͋̍̑̂̎̒͒̈͋̌̆͒̈́̕̕̕͝ͅ, but you cä̷̗̥̫̩́̅̆̽ǹ̷̡́ call me C̷̱̝̄̀̀̒̓͒̀̂̏̒͂̚͝arl
          <Link to="https://youtu.be/OXQwx1EolD8">
            <Emote src={gif} alt=":ratdance:" width={20} />
          </Link>
        </TextAbout>

        <TextAbout>
          I am a.̶̖̱̯͛͊̑̅̃͑͐̑͝.̸̧͈͕̲̞͚̬̼̈̓̃̽̎̆̂̈́͘d̶̡͊̄͛̾̕f̸̡̛͇̳̖̟͑͛͒̈́͑̐͛́̊̏s̸̡̟̺͍͓͓̘͍͔̗̼̱͙̲͐̒̉̎̊̈́͝ͅ? wait you fucking broke my site̸̦̔͘!̷͔̫̲̭͕͇͚͊͐ͅ!&nbsp;
          <StaticImage
            src="../images/pepeEZ.webp"
            alt=":pepeEZ:"
            width={20}
            aspectRatio={1 / 1}
            quality={90}
          />
        </TextAbout>

        <TextAbout>mother fuck̶̰̦̤͖͕͓̳̖̥̏̈́̎̂͐̚</TextAbout>
        <TextAbout>youll pay for this with your Ş̸̧̨̛̛̖̞͓̖͈̠͉͎̙̲͈̙̫͇̰͈͇̺̹̻̲̻̤̻̮̙̪͚̯͉̜͚̳̦̙͙͕͉͔͕͔̘̳̝͍̩͉̠̮͉͕͓͖̳͉̜͇͇̟͙̥̣̦͈͉̰̫̠͕̱͈̣̪̝̝͉̞̦̜̺̝͇̼̝̗͒̊́̒̑́͒̓̅̀͗̒̅̄̄͑̅̇̂̉̈́̆͐̆̎̎̎̾̈̐̇̓͆͑̉́̄̈́̈́̀͒͆͗̎̽̆̔͐͋̾͋̈̏̽̂̑͑̔̽̅̒͆͆̈́̓͌͆̿̅̈̾̋̌̅̾͋̂̋̓͊̊͂͐̄̐͒̌̈́͊͊̃̚̚͘̚͘̚͜͜͜͝͠͝͠͝͠͠͠͝͝͝ͅͅͅơ̷̢̡̢̢̛̜͕͈̱̻̼̩̫̺̣̘̣̻͚̪̫͇̠̩̣͎͚͍̝̘̪̠̪̜̜̤̫̼̜̬̤͇̤̻͕͍͉̰̻̩̩̻̲̥̪͕̯͗͊̿̇͗̑̔̐͒̀̆̂̈̈́́͛͒̓̾̿̎͋͑̑̉̎̿͒̆̎͐͌͑̓̉̋͂͆̈̏͋̄́́̒̀̍͌̈̂̃̒̇͗̋̓́͗͗̉̆̈̍̊̒̀̈́͛͊͌̿̅̅̈́͐̿̔́͒͐̋̃̓̄̅̏̂̄̈̈́́̀͗̈́͒̈́̒̋́̽͌̾͒͑̕̚̕̕̕̕̚̕͝͝͝͠͝͝͠͠ͅͅų̶̧̨̡̛̛̛̯̞̗̖̘̪͍̮̯̦̣̺̪̙̮̬̪̦̲̘̝̙͙̣͓͎̳̤̮͎̹̹̰̖̆̔͂̓̑͌́̈́̀̉̀̔͊̍̀̀͋̎͋͛̇̾̑̋͗̍̑͛̀̀́̍̆̌̒̋̑̍̍̄̃͂̂̽̍̅̌̈́̀̈́̀͑͒̔̌̂̐́̓̀͗͗͑̇̂̈́͆̍͛̾̋̑̈̈́̑̅̓͐̐̂͑̉̀̀̈̀͂́̅͘̕̕̕͘̚̚͘͘͘͜͝͝͝͝͠͝͝ͅͅL̷̢̨̨̨̨̢̡̨̢̹͖͚̖̭͎̬̗̜̝̗͖̟͎̮̟̻̭̰̟̪̣̦̗̭͖̯̪͇̥͕͔͖̝̳̤̹̼̠͖̩̜̰̬̯̼̼̳̥̩̘̺̝̠̣̖̯͚͍̰͇̙̝͇̺͎̺̲̪̘͈͓̥̠̥͙̯̲̳͚̘̬̠̱̘̰̼̯̣̙̯̻̤̤̼͕͙̠͙̠͉̟̜̖̯͇̙̝̦̭̖̗̽̃̔̇̒̍̿̆̃̄̅̇̄̔́̈́̽̅̀́̓̔̔̃̈́͌̉̐̏̓̾͆̕͘͘͘͘͜͜͜͝͝͝͠͝ͅ</TextAbout>
        <Wrapper>
          <InlineWrapper>
            <Link to="/abovt">
              <ButtonInline>L̵͓͛i̵͙̍͒Ṋ̷̅K̷̮͍̈́͑E̷̛̝̎i̶̩̳̿̑n̶̪̼̒ ̶̖̈́</ButtonInline>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <Link to="/abovt">
              <ButtonInlineGit>g̸i̴i̵i̷b</ButtonInlineGit>
            </Link>
          </InlineWrapper>
          <InlineWrapper>
            <a href="cvv.pdf" target="blank">
              <ButtonInlinePDF>
                C̵̞̿v̸̤́ ̸̜͛ ̴̝̂ ̴̤̋v̴͕͘V̸̻̐ ̷͙͋ ̴̕ͅ ̴͓̉ ̶̰̅ ̶͍́ ̶͇͠ ̵͎͂ ̷͙̋ ̷̭͑ ̴̡̒ ̸̗̆ ̶͓͝ ̸̳̀ ̵̯̽ ̴̥̾ ̸͐͜ ̷̼̀ ̸̦̓ ̶̮̄ ̷̤͊ ̷̣̂ ̵̨̔ ̵̰̚ ̴̉͜ ̶͇́ ̷͓̈ ̸̅͜ ̷̲̐ ̷͔́ ̷͇̂ ̷̡̔ ̸̺͐ ̸̢͆ ̶̭̚ ̸̼̽ ̴̳̀
              </ButtonInlinePDF>
            </a>
          </InlineWrapper>

          <InlineWrapper>
            <Link to="/abovt">
              <ButtonInlineInsta>S̷̡̢̙̬̭̗̭͖̩̙̦̮͙̥͖̦̘̣̹͚̜̜̩̪̖̖̪̝̼̫̜̟̪̲̗̥͎̜̙̜̯̻̝̭͓̠̣̥͖͓̣̦̞͔̯̫͓͓̰̳͇͓̲̮̻̼̬̺̮͕̭̯̱̖͉̦̙͈̍̈́͘E̴̛̛̛͙͍̓̓̑̈́̔̒̌̑͌̑͛̿̎̓̅̔̿̎́̾̈́͛̇̂̊̿͐́̏̇̌̽͗̅̑͒̈́̆͊͐̈́́̎́̆̽̃̃̈̈́̈́͑̅̍̂̀̌̉̑͂͛̽̆͊̾͋̇̒̾͊̉͐̎̀̍̀͂̌͊̔̀̋̓̈́͛̈́̂͗̓̈̑͒̓̋̃̐̎̽̋͋̈̅̅͐̅͒̈́̓̚̚̚͘͘̕̕̚͠͠͝͝͝͝L̶̡̡̨̢̡̡̧̛̝͎̖̰̝̟̖̗̞̼̬͕̪͙̣̲̹͕͖̪̜̼̫̥̟͇͉̜̤̰͙̟͉͇͓̩̮͉̞̗̓̐̏͌͆̆̈̔̊̉̔͆̐̌͗̈́̑̔̒̀̉̋̏̒̓̉̿̇͒̅͗̾̅̔̄̉̏͗̽̐͘̚͜͝͝͝ͅL̷̡̢̢̧̢̨̢̢̨̢̨̡̡̧̧̧̡̛̛̛̝͚͉̤̹̺̬̖͈̦͉̱̭̝̗̝̠͍̲̺͈̳͕̺̬̖͍̫̲̜̺̳͓͖̟̜̦̱̬̯̼̲̣̲͇̝͙̯̟̣̳̗͔̲̼̫͙͍̝̩̫̩̣͙̤͔̫̩̝͍͎̘̖̙͕̫̭̜̜͍̘̤͉͔̗̺͕͚͉̺̝̠͔̫͇̤̤͕̬̟̦̻̘̟̘̬̭̤̪̼̗͙͖͚̭̟͇̭̮̞̙͓̲̜̱̗̙̹̻̗̙̘̻͉̠̺̙̟̥̬̗͙̲̺͕̯̯͓̲̭͇̾͌̋͋͒͆͑͑͒̌̈́̊̒̈̿͆̄̍͆͋̑̈́̓͗̄̎̋̆̅͂͋̀̈́̅̽̀̍̌͌̾́̈́̓̈́̈́̅̈́̄̓͐̔̐́̔̏́̾͗̈́̊̀͊͌̈́̔̒͒̐́̏̀̆́̀͒̈́̎̋̽͐̿̎͌̋̈̔̽̂̇̈́̇͋̆͌̇̈́̌̏̅̿̆̆̂̂̏̎̍̀͘͘̚̚̚̚̚̕̚̚͜͜͜͜͝͝͝͝͠ͅͅͅ ̴̧̡̢̢̡̨̪͖̗͙̩͕̫̙͎̤̺̫͚͙̮̥̰̣̞̝̯̳̬͍̝͈̰̱̭̜̼̲̖̪̗̘̣̻̤͙̠̺̤̩̠͓͇͖͙̯͓̣͔͎͖͙͉̩͍̦͍̩͈̞̭͚̤̥̣̥̲͚̻̻̳̮̯̱̮͇̟̠̼̑̄̒̑̈́̂̑̾̽́̊̈̀̑͊͂̈̚͘͜͜͝Y̵̡̢̨̨̨̡̛̛̛̲͙̝̰͓̗͕͙̙͈̝͍̯̙̼̣̹̺̙̪̥̣̱̘̗̙̫͖͍̙̗̳̱͓͍̜͉͇̻̗̙͍̣͔̲̱̟͍̤̼̯̪̩͍͇̘̠̩̬̖̝̮̳̪̙̮̓͐͛̉̍̍̑́̔͆͗́̓͐̓̊͒̑̈́̿͂͗̀̇͆̍̈́̊̂̔̔̐̊̈͂̎̽̈́͛̇̈́̽̅͋̏̈́̐̍̉̒̓̋͊̃͆̊́̈́̃͋̒̎̿̓̒̿̈́̿̈́̎̾̓̔̓̔́̇̄̀́̆͐̽̓̍̈́̾̏͊̒̈́̅̄̌̔̃̅̐͛̄̿͌́͛̾̇͌͗́͂̍̌̋̓̓̄̉̐̋̇̋̆͐͋͂̉̒̓̎́̃̑̉͌͛̒̕̕̕̚͘̚̚͜͜͜͜͜͝͝͝͝͝͠͝͝͝͝͝͝͠͝͝ͅƠ̸̡̡̢̧̨̨̧̨̧̨̧̡̢̻̜̭̳̫͇̘̻͉̙͈̘̯̤̗͉̬̬̝͚͚̯̝̝̞̦̫͙̤͙̪͇͔̠̟̦͍̝̤̼͇͎̯̺̱̦̙̳̬͇̥͖̻̞̰̦̣̪̭͈͎͚͇̰͓͚̩̗͈̲̠̟̣̤̰̲̫͙̖̺͎̲̫͓͖͙̤̘̠̭͚͚͎̙̳̼͇͓͉̙̬̯̠͓̝̗̪̻͙͈̘̭̱̣̼̰̩͈̖̙̯͖̟͍̰̫̪̱̩͔̣̖͇̙͍͎̤̮̙̩͍͓̟̟̯͔̟̼͓̱̞̬̖͚͚̳̺͕͙̮̘̞̎̈͛̿̽̐͌̀͆͑̿̉̀͋̃͌̿̈́̒͆̓́̿̒͗̓͛̾̀̔̐̏́̾̇̓̍̿̀͋̃̾͆̆̒͒̈́̐̒͐̀͌̀̿̀̒͂͌̅̌̌͋̎̉̇̂̊̆͗̿̋̏̂̒͊͊͐̈̑̿͗͛̂̔̔̑̄̈́̓̀̂̈́̂̽̌̿̑̇̒̔̏̈́́̇͒́̀̿͌͂̓̎̐̊̈́̽͛̇̓̅͆̑͆̓͌̈́͊̀̎͗͒͛̈́̂̐̉́̾̊́̾̇͊͋͑̿̀̾̽̈͆͆͒́̿̊̉͆͐̊̅̇̃̚͘͘̚͘̕̚͜͜͜͝͠͝͠͠͝͝͝͝͝͠͝ͅͅͅͅƯ̵̢̢̩̣̠̰̤͍͙̬̥͓̮̗̞̩̫̟͔̥̯̩͍̺̭̟͈͚̖̝͍͋̅̈̾̍̑̑͂̒̏̓͑͂̋̋̿̓̀͛̑̌̐̌͐̓̍̽̾̑͆̀̒͊̑̉͋͋͌̇̃̽̓̀̀̈́͐̈́̿̾͒̀̀̂̀̇̚̚͘͘̚̕͠͠͝͠ͅȐ̷̡̡̧̡̢̢̡̡̨̡̛̮̱̱͖̘̠̺̭̮̯̼̻̲̙͓͖̫̣̜͎̫̱͈̲̟̱̦̪͍̝̞̬̯̯̟̬͎͈̥̬͎̮̗͓̫̰̣͎͙͇̗̙̼̭͎̘̗̺̭͕̤͔̘̣̞̱̭̖̠͖̤̺͈͓̥͇̺̮̯͉͙̬͚͈̳̼̪̪̗̺̼̻̞̺̠̭̺͈͓̞̗̘̥̲̩̳̫̫̼̣͔̺̪̜͇̰̟̙͕̺̫͙̖̹̩̻̤̥͙͎͎̻̙̜̬̝̳̮̳̮͇̮̩̳͎͔̮̹̩̝̺͇̝̜͍̳̱̥̫̗͓̎̅͗́̃̌̀̄̎͑́̍͐̎͗̊̑̓͂́͒͋͐̓̎̀̌͐̿͊̈́̾̃̈́̃̊͋̓̍̈̽̕̚̚͘̚͜͜͜͜͜͜͜͜͜͝͝ͅͅͅͅͅͅ ̶̢̛̮͈͙̭̜̳̫̯͓̻̥͔̩͙̱͖̫̉̃͒̓̉̎̿̈͒̍͋̅̈́͂́̽̆̅͋̈́̌̈̑̒̂̓̈́́̓͂̿͊́͂̾̊͂̌͌̉̈́̓̏̀̉̍͆̄̾͋͌̓͒̄̈́͂̅͊̿͂͐̍͗̈̆̊̅̈͑̓̾̌̀͆̒̌̏̓̍́̔̄̌͆̆̍̊͑͂̂̀̇͊͆̒̔̋̇̎̑̆͒̌̏̄̉̈̑̄̄̈̌́͆̀̔̐͊̂̍̃̈̀́̎͂̋̃͐̒͑̃͑̽͒̊̉̂̂̚͘̚̚̕͘̚̚̚̕̚̕̚͠͠͠͠͝͝͝͠͠͠͝͝͝͝͠͝͠ͅͅͅS̶̡̨̢̧̧̢̢̢̡̡̢̡̨̧̢̡̨̛̪̬̗̦͇͖̮͈͙͉͉̖̱̲̝̹̝̺̼̼̟͙̦̯̝̩͎̟̪̲̤̥͕̗̮̦͔̠͈̘͙̤̤͍̼͙͕̱̰̜̺̙̯̳̻͉̖̺̳͉̰̰̮̳̺͉͔͖̖͉̣̫̫̣̯̪͖͖͓͈̳͚̹̥̞̱̘̭̳͖̝͇̯͙̯̜̖̤̬̜͉̖̦̻̤̳̻̦̺̹̤͉̗̯̻͇̞̝͖̪̯̗̼̭̙̟̣̺̬̯̜̦̪̦͕̗͚̰͖̥̲͆́̌̒̒͒̃̍͌̔͊̍̓́͊̍̾̏͋͗̽̇́̀̌̊̄̏̒͋̌̄́͊̾̓̀̈́͒̓̈̔̑̀̊̉́̽̏̄̓̆̇̃̔̒̔̈̽̍̈́̇̒̇͋͗̈̓͆̍̇̀̈́̐̓̀̋̓̾̽̏̀͆͐̕̕̚͘͘̚͜͜͜͜͜͝͠͝͝͠͝͠ͅͅͅͅǪ̷̨̢̡̧̢̨̢̧̢̨̨̡̡̧̨̨̛̛̛̛̛̤̼̫̜͓̙̹͚̥͈̙̯͈̯̪̦͍̭̹̥͉̝̠̼̦̮̭͚̮͙͚̥̱̖̥̣̩̟̜̰͖͍̞͎͍̱̠͓̱̞͈̭̖̳̼̮̬̤͔̯̘̠͔̞̗̰̬̦̳̗̠̘̣͇͍͕͈̳̮̗̺̣̜̺̣̺͖̠͔̫̮̲͎̖͔̱̜̖͖̞̪̝͎̩̬̞̭͎̱̝̟̭̱̮͉̬̮̦̰̪̻̜̟̖̮̯͓̗̖͇̲͉͔̪͉̺̺̻̗͇͔̯̫̪̦̬̱̦̦̙̟͖͉̤̗̗̬̬̘͚͙̠͎̞͍̲̳͖̺̹̉̊̏̽̉̆̀̄̍̈́̀͌̇̾͒̊̐̓̓̇̇̀̒̊̀͗͂̄̈́̎̍͂̽̅̃̊̾̋͑̿͗͒̀̇͗͊̓͐̔̂̀̍͗̆̌̓̑̑̆̓̓͒͑̓̅̾̈́̋͑̉͊̓͒͊͌̈́̽̐͂̇̏̏̔̂̑̆͂̏͑͂̓͛̀̂̈́͐̃̾͗̊̌͗̀̿̉̓̒͆͛͐̾̏̐̈́́̀̾̔̀͆͒̿́̉̌͂̾̾͒̐̊̔̓̉͊̎̃̃̏̒̎͑̏̓̉̾̎̓̃͒̇̏͗̓̔̿͋̄̈̀̕̕͘̚̕̕͘̕͘̚̚̕̚̚̕̚͜͝͝͝͝͠͝͝͝͝ͅͅͅÚ̷̧̱͈̘̤̗̰̙̲͈̲̰̻̮͔͙̠̪̠͖̪̹̖͍̲͓̰͕͓̗͇̯͙̫̫͙͓̰͉̤͓̝̫͉̫̠̗̓̈́̿̅͌̊̕͘͜͝ͅL̶̢̢̡̡̡̢̢̨̢̡̧̨̨̢̢̛̛̛̹̬̭̤̘͇̲͖͖͖͖̣̥̳̜͍̭̱̦̣̣͔̺̳̙͉̗̘̩̮̝̤̯̞̱̟̘̘̤͍̩͖̰̩̤͈̬̟̺̳̬̲̝͎̤̺͔̳͍̟͉͖͓̺̹͖͇͙̥͉̱̙̰̯̖̻̱͍̼̯̤͈͓̦̺̠̯̩̙̪̻̫̫͚̜̗͚̲̥̺̪̹͉̹͉͓̹̲̟̗̜̜͔̹̗͔̼̯̰̟̹͇̪̺͈̱̟͍̾̄̄̐̿̅̓̽̈́̈́̈́̾́́̄͗̐͂̇̔̑̇͗͂͗̽̐͗̂̈́́̈́̌̈́͑̇̃͐͐̾͗̄̔̔̃́̒̀͒̊̐͑͂̀̆̋̊̑͑̓͑̍̃̀̎̔̿͗̃̍̉́͒͆̌̀̌̿̍̈́̏͂͆͆́͛͗̀͂͂̓̈́̀̈͛̀́͌̎̌̀̽̇̑̎̾̚̕̚̕͘̕̚͘̚͜͜͜͜͝͠͝͠͠͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ ̶̨̨̧̛̛̛̼̞͙̙̝̭͕̤̠̺̤͔̘͔̰̤͚̱̥̤̹͈̞̭̭̮̘̰̩̜͈̗͇̻̹̳̣̙̮̞̗͕̲̟́̄͊͌̂̒͊̓̓̐̌̒̌̒̉̓̈̒̐̃̆͂̎͛̀̓́͆̄̀̀̅͋̓̑̒̑̈́͛̆̄̃̈́̽̍̈́͒̈͂̌̾̀͊̌̈̂͌͑̅̒́̓̽̅͂̒̏̇̈́̏̈͋̾͛̆͗̍̚̚̚͘̚͘̚͝͝</ButtonInlineInsta>
            </Link>
          </InlineWrapper>
          <Link to="mailto:yourmom@uranus.com">
            <TextBody>
              {" "}
              MAIL: -.-. --- -. - .- -.-. - / -- . / .. ..-. / -.-- --- ..- /
              ..-. --- ..- -. -.. / - .... .. ...{" "}
            </TextBody>
          </Link>
          <Link to="https://youtu.be/p0fhF-HfSzU">
            <TextBody>
              {" "}
              PHONE:
              eW91IHRoaW5rIHlvdXJlIGNsZXZlciBodWgKb2theQpyaWRkbGUgbWUgdGhpcyBmb3VyZXllcywgY29ycmVjdCBhbnN3ZXIgaXMgdGhlIG5leHQgZW5kcG9pbnQ6Ck5vdyBJIGZhbGwsIGEgdGlyZWQgc3VidXJiaWFuIGluIGxpcXVpZCB1bmRlciB0aGUgdHJlZXMsCkRyaWZ0aW5nIGFsb25nc2lkZSBmb3Jlc3RzIHNpbW1lcmluZyByZWQgaW4gdGhlIHR3aWxpZ2h0IG92ZXIgRXVyb3BlLg==
            </TextBody>
          </Link>
        </Wrapper>

      </HomeLayout>
    </>
  )
}
