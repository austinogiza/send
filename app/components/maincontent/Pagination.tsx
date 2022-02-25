import React, { FC } from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { CaptionLarge, SidebarText } from "~/styles/TextStyles"

interface PaginationProps {
  postPerPage: number
  totalPosts: number
  paginate: (number: number) => void
  first: number
  last: number
}
const Pagination: FC<PaginationProps> = (props) => {
  const { postPerPage, totalPosts, first, last, paginate } = props
  const pageNumbers = []

  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <Body>
      <Cover>
        <PageText>
          Showing {first + 1} - {last} of {totalPosts} results
        </PageText>

        <Counter>
          {pageNumbers.map((number) => (
            <CountNumber onClick={() => paginate(number)} key={number}>
              {number}
            </CountNumber>
          ))}
        </Counter>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  display: flex;
  flex-direction: row;
`
const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const PageText = styled(CaptionLarge)`
  color: ${SendTheme.stroke};
`
const Counter = styled.div`
  display: flex;
  flex-direction: row;

  .active {
    color: ${SendTheme.dark};
  }
`
const CountNumber = styled(SidebarText)`
  color: ${SendTheme.dark};
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${SendTheme.gray};
`
export default Pagination
