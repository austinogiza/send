import React from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { paginate } from "~/utils/paginate"
import Filter from "./maincontent/Filter"
import Header from "./maincontent/Header"
import Table from "./maincontent/Table"

const MainContent = () => {
  const data = paginate("hello", 2, 5)
  return (
    <Body>
      <Header />
      <Filter />
      <Table />
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: ${SendTheme.white};
`
export default MainContent
