import styled from "styled-components"
import { SendTheme } from "./ColorStyles"

export const MainButton = styled.button`
  height: 46px;
  max-width: 119px;
  width: 100%;
  border-radius: 4px;
  padding: 12px 14px;
  border: none;
  cursor: pointer;
  color: ${SendTheme.white};
  background: ${SendTheme.blue};
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0em;
  text-align: center;
`
