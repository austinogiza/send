import React from "react"
import styled from "styled-components"
import { MainButton } from "~/styles/ButtonStyles"
import { SendTheme } from "~/styles/ColorStyles"
import { Header1 } from "~/styles/TextStyles"

const Header = () => {
  return (
    <Body>
      <Cover>
        <HeaderTextWrap>
          <HeaderText>Quotes</HeaderText>
        </HeaderTextWrap>
        <HeaderButtonWrap>
          <HeaderButton>Create New</HeaderButton>
        </HeaderButtonWrap>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  padding: 0px 40px;
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
`
const HeaderTextWrap = styled(Header1)`
  color: ${SendTheme.dark};
`
const HeaderText = styled.div``
const HeaderButtonWrap = styled.div``
const HeaderButton = styled(MainButton)``
export default Header
