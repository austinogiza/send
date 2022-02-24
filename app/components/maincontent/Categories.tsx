import React from "react"
import styled from "styled-components"
import { SidebarText } from "~/styles/TextStyles"

const Categories = () => {
  const data = [
    { name: "All", count: 30 },
    { name: "Pending", count: 30 },
    { name: "Ready", count: 30 },
    { name: "Booked", count: 30 },
  ]

  return (
    <Body>
      <Cover>
        <CategoryName>
          <CategoryText></CategoryText>
          <CategoryCount></CategoryCount>
        </CategoryName>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 20px;
  max-width: 400px;
`
const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const CategoryName = styled.div`
  flex-direction: row;
  margin: 0 8px 0 0;
`
const CategoryText = styled(SidebarText)``
const CategoryCount = styled.span`
  font-family: "Inter";
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 26px;
  border-radius: 8px;
  padding: 4px;
  background: rgba(233, 236, 241, 0.6);
  color: #737a91;
`
export default Categories
