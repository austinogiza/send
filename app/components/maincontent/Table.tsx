import React from "react"
import styled from "styled-components"
import TableContent from "./TableContent"

const Table = () => {
  return (
    <Body>
      <Cover>
        <TableRow>
          <TableContent />
        </TableRow>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  padding: 0px 40px;
`
const Cover = styled.div`
  max-width: 1206px;
  width: 100%;
  margin: 24px auto;
`
const TableRow = styled.div`
  display: flex;
  flex-direction: column;
`
export default Table
