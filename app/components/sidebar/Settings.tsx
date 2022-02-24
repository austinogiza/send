import React from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { SidebarText } from "~/styles/TextStyles"

import { SettingsData } from "./Data"

const Settings = () => {
  return (
    <Body>
      <BarRow>
        {SettingsData.map((data: any, index: number) => (
          <BarColumn className={data.classname} key={index}>
            {data.icon}
            <BarText> {data.name}</BarText>
          </BarColumn>
        ))}
      </BarRow>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 4px 0;
  /* justify-content: space-between;
  align-items: flex-start; */
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
`
const BarText = styled(SidebarText)`
  margin: 0 8px;
`

export default Settings
