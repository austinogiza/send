import React, { FC } from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { tableData } from "~/utils/TableData"
import Categories from "./Categories"
import Pagination from "./Pagination"
interface FilterProps {
  paginate: (number: number) => void
  onItemSelect: (item: any) => void
  postPerPage: number
  totalPosts: number
  selectedItem: string
  first: number
  last: number
}
const Filter: FC<FilterProps> = (props) => {
  const {
    paginate,
    postPerPage,
    totalPosts,
    onItemSelect,
    selectedItem,
    first,
    last,
  } = props
  const data = [
    { name: "All", count: tableData.length },
    {
      name: "Pending",
      count: tableData.filter((data) => data.status === "pending").length,
    },
    {
      name: "Ready",
      count: tableData.filter((data) => data.status === "ready").length,
    },
    {
      name: "Booked",
      count: tableData.filter((data) => data.status === "booked").length,
    },
  ]
  return (
    <Body>
      <Cover>
        <Categories
          data={data}
          onItemSelect={onItemSelect}
          selectedItem={selectedItem}
        />

        <Pagination
          first={first}
          last={last}
          paginate={paginate}
          totalPosts={totalPosts}
          postPerPage={postPerPage}
        />
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
