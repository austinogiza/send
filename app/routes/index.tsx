import React from "react"
import styled from "styled-components"
import MainContent from "~/components/MainContent"
import Sidebar from "~/components/Sidebar"

import { SendTheme } from "~/styles/ColorStyles"
const Index = () => {
  return (
    <Body>
      <Shell>
        {" "}
        <Sidebar />
      </Shell>
      <MainContent />
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 226px auto;
`
const Shell = styled.div`
  width: 100%;
  max-width: 226px;
  height: 100vh;
`
export default Index
