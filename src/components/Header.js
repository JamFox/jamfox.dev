import styled from "styled-components"

export const Top = styled.div`
  font-family: 'IBMPlexMono';
  position: fixed;
  width: 100%;
  height: 64px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.15);
`

export const TopLinks = styled.div`
  font-family: 'IBMPlexMono';
  float: right;
  display: flex;
`

export const TopLink = styled.a`
  font-family: 'IBMPlexMono';
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