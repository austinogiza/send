import React, { useEffect, useState } from "react"
import { MetaFunction } from "remix"
import styled from "styled-components"
import MainContent from "~/components/MainContent"
import Sidebar from "~/components/Sidebar"
import { ContentProps } from "~/types/Types"
import { tableData } from "~/utils/TableData"
export const meta: MetaFunction = () => {
  return {
    title: "Send Freight",
    description: "Shipping",
  }
}

const Index = () => {
  const [details, setDetails] = useState<ContentProps[]>(tableData)
  const [currentpage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [postPerPage] = useState<number>(6)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  //filtered details

  const filteredData =
    selectedCategory === "All"
      ? details
      : details.filter(
          (data: any) => data.status === selectedCategory.toLowerCase()
        )

  //categories filter

  const changeCategory = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setLoading(true)
  }

  //get paginated posts

  const indexofLastPost = currentpage * postPerPage
  const indexofFirstPost = indexofLastPost - postPerPage
  const currentDetails = filteredData.slice(indexofFirstPost, indexofLastPost)

  const paginate = (number: number) => {
    setCurrentPage(number)
    setLoading(true)
  }

  //loading
  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }

  useEffect(() => {
    setLoading(true)
  }, [])
  return (
    <Body>
      <Shell>
        {" "}
        <Sidebar />
      </Shell>
      <MainContent
        loading={loading}
        onItemSelect={changeCategory}
        selectedItem={selectedCategory}
        paginate={paginate}
        posts={currentDetails}
        totalPosts={filteredData.length}
        postPerPage={postPerPage}
        first={indexofFirstPost}
        last={indexofLastPost}
        currentNumber={currentpage}
      />
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
