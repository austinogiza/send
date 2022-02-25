import React, { FC } from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { ContentProps } from "~/types/Types"

import Filter from "./maincontent/Filter"
import Header from "./maincontent/Header"
import Table from "./maincontent/Table"
interface FilterProps {
  paginate: (number: number) => void
  postPerPage: number
  totalPosts: number
  posts: ContentProps[]
  selectedItem: string
  onItemSelect: (item: any) => void
  first: number
  last: number
  loading: boolean
  currentNumber: number
}
const MainContent: FC<FilterProps> = (props) => {
  const {
    paginate,
    postPerPage,
    totalPosts,
    posts,
    onItemSelect,
    selectedItem,
    first,
    last,
    loading,
    currentNumber,
  } = props

  return (
    <Body>
      <Header />
      <Filter
        selectedItem={selectedItem}
        onItemSelect={onItemSelect}
        paginate={paginate}
        totalPosts={totalPosts}
        postPerPage={postPerPage}
        first={first}
        last={last}
        currentNumber={currentNumber}
      />
      <Table loading={loading} posts={posts} />
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
