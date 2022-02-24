import React from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import Name from "./sidebar/Name"
import logo from "~/assets/logo.svg"
import Section from "./sidebar/Section"
const Sidebar = () => {
  return (
    <Body>
      <LogoCover>
        <Logo src={logo} alt="Send Freight Logo" />
      </LogoCover>
      <Section />
      <Name />
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  z-index: 1;
  top: 0px;
  overflow: hidden;
  bottom: 0px;
  max-width: 226px;
  display: flex;
  flex-direction: column;

  background: ${SendTheme.snowWhite};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0 0 0;
  border-right: 1px solid ${SendTheme.border};
  @media only screen and (max-width: 1500px) {
    overflow-y: scroll;
  }
`
const LogoCover = styled.div`
  height: 24px;
  width: 110px;
`

const Logo = styled.img`
  height: 24px;
  width: 110px;
  cursor: pointer;
`
export default Sidebar
