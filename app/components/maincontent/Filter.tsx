import React from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import Categories from "./Categories"
import Pagination from "./Pagination"

const Filter = () => {
  return (
    <Body>
      <Cover>
        <Categories />
        <Pagination />
      </Cover>
      <FilterLine />
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Cover = styled.div`
  height: 46px;
  max-width: 1206px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 24px auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`

const FilterLine = styled.span`
  height: 1px;
  width: 100%;

  background: ${SendTheme.border};
`
export default Filter
