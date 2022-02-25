import React, { FC } from "react"

import styled from "styled-components"
import { ContentProps } from "~/types/Types"
import Skeleton from "../Skeleton"
import TableContent from "./TableContent"

interface TableProps {
  posts: ContentProps[]
  loading: boolean
}
const Table: FC<TableProps> = (props) => {
  const { posts, loading } = props
  return (
    <Body>
      <Cover>
        <TableRow>
          {loading ? (
            <>
              <SkeletonCover>
                {loading &&
                  [1, 2, 3, 4, 5, 6].map((data: any, index: number) => (
                    <Skeleton key={index} />
                  ))}
              </SkeletonCover>
            </>
          ) : (
            <>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <>
                    <TableContent
                      name={post.title}
                      category={post.category}
                      fromName={post.fromName}
                      fromDate={post.fromDate}
                      toName={post.toName}
                      toDate={post.toDate}
                      amount={post.amount}
                      status={post.status}
                    />
                  </>
                ))
              ) : (
                <>No item in selected status</>
              )}
            </>
          )}
        </TableRow>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
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

const SkeletonCover = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
`

export default Table
