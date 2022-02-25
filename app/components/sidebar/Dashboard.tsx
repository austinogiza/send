import React from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { SidebarText } from "~/styles/TextStyles"

import { DashboardData } from "./Data"

const Dashboard = () => {
  return (
    <Body>
      <BarRow>
        {DashboardData.map((data: any, index: number) => (
          <BarColumn className={data.classname} key={index}>
            {data.icon}
            <BarText> {data.name}</BarText>
          </BarColumn>
        ))}
      </BarRow>
      <BarLine />
    </Body>
  )
}
const Body = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 12px 0 0 0;
`
const BarRow = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`
const BarColumn = styled.li`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 40px;
  background: ${SendTheme.snowWhite};
  padding: 0 0 0 16px;
  svg {
    height: 24px;
    width: 24px;
  }
  transition: 0.3s ease-in-out;
  :hover {
    background: ${SendTheme.white};
  }
`
const BarText = styled(SidebarText)`
  margin: 0 8px;
`
const BarLine = styled.div`
  width: 100%;
  height: 1px;

  background: ${SendTheme.stroke};
  opacity: 0.1;
  margin: 16px 0px;
`
export default Dashboard
