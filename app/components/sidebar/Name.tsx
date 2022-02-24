import React from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { CaptionLarge, CaptionSmall } from "~/styles/TextStyles"

const Name = () => {
  return (
    <Body>
      <Cover>
        <NameWrap>
          <svg
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z"
              fill="white"
            />
            <path
              d="M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z"
              fill="white"
            />
            <path
              d="M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z"
              stroke="white"
              stroke-width="0.5"
            />
            <path
              d="M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z"
              stroke="white"
              stroke-width="0.5"
            />
          </svg>
        </NameWrap>
        <NameText>
          <NameHeader>Mati Industries</NameHeader>
          <NameEmail>
            <a href="mailto:Lanremati@gmail.com">Lanremati@gmail.com</a>
          </NameEmail>
        </NameText>
        <NameIcon>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              transform="translate(0 0.5)"
              fill="#F2F4F7"
            />
            <path
              d="M8 10.5L12 14.5L16 10.5"
              stroke="#A0AEC0"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NameIcon>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  height: 69px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${SendTheme.offWhite};
  padding: 16px;
  border-radius: 0px;
`
const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  max-width: 190px;
  margin: 0 auto;
`
const NameWrap = styled.div`
  background: ${SendTheme.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;

  border-radius: 8px;
`
const NameText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`
const NameHeader = styled(CaptionLarge)`
  text-align: left;
  color: ${SendTheme.dark};
`
const NameEmail = styled(CaptionSmall)`
  text-align: left;

  a {
    color: ${SendTheme.gray};
  }
`

const NameIcon = styled.span`
  height: 24px;
  width: 24px;
  cursor: pointer;
`
export default Name
