import React from "react"
import styled from "styled-components"
import {ButtonLink} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Container = styled.footer`
  font-size: 20px;
  margin-top: 20vh;
  padding-bottom: 3vh;
  padding-top: 3vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`

export function Footer() {
  return (
    <Container>
      <ButtonLink
        href="https://steamcommunity.com/id/JamFox/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Games
      </ButtonLink>
      <ButtonLink
        href="https://letterboxd.com/jamfox/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Movies
      </ButtonLink>
      <ButtonLink
        href="https://myanimelist.net/profile/Jamfox"
        target="_blank"
        rel="noopener noreferrer"
      >
        Anime
      </ButtonLink>
      <ButtonLink
        href="https://open.spotify.com/user/kapikmeow"
        target="_blank"
        rel="noopener noreferrer"
      >
        Music
      </ButtonLink>
      <ButtonLink
        href="https://www.goodreads.com/user/show/78068566-jamfox"
        target="_blank"
        rel="noopener noreferrer"
      >
        Books
      </ButtonLink>
    </Container>
  )
}
