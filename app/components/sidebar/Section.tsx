import React from "react"
import styled from "styled-components"
import Billing from "./Billing"
import Dashboard from "./Dashboard"
import Settings from "./Settings"

const Section = () => {
  return (
    <Body>
      <Dashboard />
      <Billing />
      <Settings />
    </Body>
  )
}

const Body = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`
export default Section
