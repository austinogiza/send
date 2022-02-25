import React, { FC } from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { SidebarText } from "~/styles/TextStyles"

interface DataProps {
  name: string
  count: number
}
interface CatProps {
  onItemSelect: (item: any) => void
  items?: string
  selectedItem: string
  data?: DataProps[]
}
const Categories: FC<CatProps> = (props) => {
  const { onItemSelect, items, selectedItem, data } = props

  return (
    <Body>
      <Cover>
        {data &&
          data.map((data: any, index: number) => (
            <CategoryName key={index} onClick={() => onItemSelect(data.name)}>
              <CategoryCover>
                <CategoryText>{data.name}</CategoryText>
                <CategoryCount>{data.count}</CategoryCount>
              </CategoryCover>
              {selectedItem === data.name && <ActivePane />}
            </CategoryName>
          ))}
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
  justify-content: space-between;

  .active {
    color: ${SendTheme.blue};
  }
`
const CategoryName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px 0 0;
  cursor: pointer;
`
const CategoryCover = styled.div`
  display: flex;
  flex-direction: row;
`
const CategoryText = styled(SidebarText)`
  margin: 0 8px 0 0;
  color: ${SendTheme.stroke};
`
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
  background: ${SendTheme.catBG};
  color: ${SendTheme.catColor};
`

const ActivePane = styled.span`
  height: 3px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${SendTheme.blue};
  margin: 8px 0 0 0;
`
export default Categories
