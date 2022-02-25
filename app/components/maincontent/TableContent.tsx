import React, { FC } from "react"
import styled from "styled-components"
import { SendTheme } from "~/styles/ColorStyles"
import { CaptionSmall, Header2, SidebarText } from "~/styles/TextStyles"
import { ContentProps } from "~/types/Types"
interface TableProps {
  name: string
  category: string
  fromName: string
  fromDate: string
  toName: string
  toDate: string
  amount: number
  status: string
}
const TableContent: FC<TableProps> = (props) => {
  const { name, category, fromName, fromDate, toName, toDate, amount, status } =
    props
  return (
    <Body>
      <Import>
        <NameRow>
          <Title>
            <Icon>
              <svg
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.89806 21.6096C8.01381 21.8713 8.24041 22.081 8.52799 22.1925C8.81558 22.3039 9.14059 22.308 9.43155 22.2039C9.7225 22.0997 9.95555 21.8959 10.0794 21.6372C10.2033 21.3784 10.2079 21.086 10.0921 20.8243L8.77097 17.8315L16.6036 16.2715V21.3124C16.6036 21.5939 16.7278 21.8638 16.9491 22.0629C17.1703 22.2619 17.4703 22.3737 17.7832 22.3737C18.096 22.3737 18.396 22.2619 18.6173 22.0629C18.8385 21.8638 18.9628 21.5939 18.9628 21.3124V16.2715L26.7953 17.8315L25.4742 20.8243C25.4167 20.9539 25.3882 21.0924 25.3903 21.2319C25.3925 21.3714 25.4251 21.5092 25.4865 21.6373C25.5478 21.7655 25.6367 21.8815 25.7479 21.9787C25.8592 22.0759 25.9906 22.1524 26.1348 22.2039C26.2737 22.2533 26.4218 22.2785 26.5712 22.2782C26.8075 22.2784 27.0384 22.2148 27.2339 22.0955C27.4295 21.9763 27.5808 21.807 27.6683 21.6096L29.4966 17.4601C29.5594 17.3166 29.5866 17.1625 29.5765 17.0085C29.5663 16.8545 29.5189 16.7044 29.4377 16.5686C29.3588 16.4333 29.2485 16.3149 29.1141 16.2215C28.9798 16.1281 28.8246 16.0619 28.6591 16.0274L24.8608 15.2739V10.6999C24.8608 10.4184 24.7365 10.1485 24.5153 9.94947C24.2941 9.75044 23.994 9.63863 23.6812 9.63863H21.322V6.45487C21.322 6.17341 21.1977 5.90347 20.9765 5.70445C20.7553 5.50543 20.4552 5.39362 20.1424 5.39362H15.4239C15.1111 5.39362 14.8111 5.50543 14.5898 5.70445C14.3686 5.90347 14.2443 6.17341 14.2443 6.45487V9.63863H11.8851C11.5723 9.63863 11.2722 9.75044 11.051 9.94947C10.8298 10.1485 10.7055 10.4184 10.7055 10.6999V15.2739L6.90719 16.0062C6.74176 16.0406 6.58657 16.1069 6.4522 16.2003C6.31784 16.2937 6.20747 16.4121 6.12865 16.5474C6.04741 16.6832 6.00005 16.8333 5.98986 16.9873C5.97967 17.1412 6.00691 17.2953 6.06967 17.4389L7.89806 21.6096ZM16.6036 7.51612H18.9628V9.63863H16.6036V7.51612ZM13.0647 11.7611H22.5016V14.7963L18.0427 13.8836H17.5236L13.0647 14.7963V11.7611ZM28.0575 23.7321C27.6436 23.8462 27.2473 24.0066 26.8779 24.2097C26.5021 24.4074 26.0747 24.5116 25.6393 24.5116C25.204 24.5116 24.7765 24.4074 24.4008 24.2097C23.5836 23.7949 22.6613 23.577 21.723 23.577C20.7848 23.577 19.8625 23.7949 19.0453 24.2097C18.6644 24.4051 18.2335 24.5078 17.795 24.5078C17.3564 24.5078 16.9255 24.4051 16.5446 24.2097C15.7267 23.7969 14.8046 23.5801 13.8669 23.5801C12.9291 23.5801 12.007 23.7969 11.1892 24.2097C10.8134 24.4074 10.3859 24.5116 9.95057 24.5116C9.51525 24.5116 9.08777 24.4074 8.71199 24.2097C8.34257 24.0066 7.94627 23.8462 7.53238 23.7321C7.37542 23.6819 7.20843 23.6622 7.04239 23.6742C6.87634 23.6862 6.71502 23.7298 6.56904 23.802C6.42305 23.8742 6.29572 23.9734 6.19541 24.093C6.09511 24.2127 6.02411 24.3501 5.9871 24.4962C5.89903 24.765 5.93271 25.0542 6.08077 25.3007C6.22884 25.5473 6.47927 25.7311 6.77743 25.8121C7.01496 25.87 7.24158 25.9595 7.44981 26.0775C8.16548 26.4553 8.97925 26.6566 9.80902 26.6612C10.6708 26.6613 11.5174 26.4563 12.2626 26.0668C12.725 25.8374 13.2444 25.717 13.7725 25.717C14.3006 25.717 14.82 25.8374 15.2824 26.0668C16.0224 26.4475 16.86 26.6478 17.7124 26.6478C18.5648 26.6478 19.4024 26.4475 20.1424 26.0668C20.6047 25.8374 21.1242 25.717 21.6523 25.717C22.1803 25.717 22.6998 25.8374 23.1622 26.0668C23.8933 26.4594 24.7289 26.6667 25.5804 26.6667C26.4318 26.6667 27.2674 26.4594 27.9985 26.0668C28.2068 25.9489 28.4334 25.8594 28.6709 25.8015C28.8279 25.773 28.9768 25.7159 29.1085 25.6339C29.2401 25.5519 29.3519 25.4466 29.4369 25.3245C29.5219 25.2023 29.5783 25.0659 29.6028 24.9235C29.6273 24.7811 29.6192 24.6357 29.5792 24.4962C29.5417 24.3526 29.4714 24.2176 29.3726 24.0998C29.2739 23.982 29.1489 23.884 29.0058 23.8121C28.8626 23.7402 28.7043 23.696 28.541 23.6822C28.3777 23.6684 28.2131 23.6854 28.0575 23.7321Z"
                  fill="#81868C"
                />
              </svg>
            </Icon>
            <Name>{name}</Name>
            <svg
              width="5"
              height="4"
              viewBox="0 0 5 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="2.72072" cy="2" rx="2.22304" ry="2" fill="#303030" />
            </svg>

            <Cat>{category}</Cat>
          </Title>
          <ImportTag>IMPORT</ImportTag>
        </NameRow>
        <LocationRow>
          <FromLocation>
            <FromText>{fromName}</FromText>
            <FromDate>{fromDate}</FromDate>
          </FromLocation>
          <svg
            width="17"
            height="8"
            viewBox="0 0 17 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9148 4.35355C16.1101 4.15829 16.1101 3.84171 15.9148 3.64645L12.7329 0.46447C12.5376 0.269208 12.221 0.269208 12.0258 0.46447C11.8305 0.659732 11.8305 0.976315 12.0258 1.17157L14.8542 4L12.0258 6.82843C11.8305 7.02369 11.8305 7.34027 12.0258 7.53553C12.221 7.7308 12.5376 7.7308 12.7329 7.53553L15.9148 4.35355ZM0 4.5H15.5613V3.5H0V4.5Z"
              fill="black"
            />
          </svg>

          <FromLocation>
            <FromText>{toName}</FromText>
            <FromDate>{toDate}</FromDate>
          </FromLocation>
        </LocationRow>
        <AmountRow>
          <AmountText>
            &#8358;{Number(parseFloat(`${amount}`).toFixed(3)).toLocaleString()}
          </AmountText>
        </AmountRow>
        <StatusRow>
          {status === "pending" && (
            <StatusText className="pending">{status}</StatusText>
          )}{" "}
          {status === "booked" && (
            <StatusText className="booked">{status}</StatusText>
          )}{" "}
          {status === "ready" && (
            <StatusText className="ready">{status}</StatusText>
          )}
        </StatusRow>
      </Import>
      <TableLine />
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: column;

  :hover {
    background: ${SendTheme.snowWhite};
  }
`
const Import = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  padding: 8px 40px;
  display: grid;
  grid-template-columns: 2fr 3fr 1fr 0.5fr;
  gap: 16px;
  grid-gap: 16px;
`
const TableLine = styled.span`
  width: 100%;
  max-width: 1500px;
  height: 1px;
  background: ${SendTheme.tableStroke};
`

const NameRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ImportTag = styled(CaptionSmall)`
  height: 20px;
  width: 63px;
  margin: 8px 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${SendTheme.stroke};
  border: 1px solid ${SendTheme.stroke};
  cursor: pointer;
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Icon = styled.div`
  height: 32px;
  width: 35px;

  border-radius: 0px;
`
const Name = styled(Header2)`
  color: ${SendTheme.blue};
`
const Cat = styled(SidebarText)`
  color: ${SendTheme.dark};
`

const LocationRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const FromLocation = styled.div`
  display: flex;
  flex-direction: column;
`
const FromText = styled(Header2)`
  color: ${SendTheme.dark};
`
const FromDate = styled(SidebarText)`
  color: ${SendTheme.stroke};
  margin: 8px 0;
`
const AmountRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const AmountText = styled(Header2)`
  color: ${SendTheme.dark};
`
const StatusRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pending {
    color: ${SendTheme.orange};
  }
  .ready {
    color: ${SendTheme.green};
  }
  .booked {
    color: ${SendTheme.gray};
  }
`
const StatusText = styled(SidebarText)`
  text-transform: capitalize;
`

export default TableContent
