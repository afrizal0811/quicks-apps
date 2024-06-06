import { Flex } from 'antd'
import styled from 'styled-components'
import AntdTypography from '../../components/typography/AntdTypography'
import { colors } from '../../constants/colors'

export const StyledContainer = styled.div`
  padding: 24px 32px;
  width: 734px;
  height: 550px;
  ${({ isSelected }) =>
    !isSelected &&
    `
    overflow-y: auto;
  `}
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  ${({ isLoading }) =>
    isLoading &&
    `
    justify-content: center;
    align-items: center;
  `}
`

export const StyledListWrapper = styled.a`
  width: 100%;
`

export const StyledAvatarWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
`

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const StyledChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`

export const StyledNotifWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`

export const StyledNotifContent = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${colors.fireOpal};
  border-radius: 50%;
`

export const StyledLink = styled.a`
  color: ${colors.darkLiver};
  &:hover {
    color: ${colors.darkLiver};
  }
`

export const StyledChatContainer = styled(Flex)`
  width: 670px;
  overflow-y: auto;
  margin-bottom: 10px;
  height: 370px;
  ${({ isGroup }) =>
    !isGroup &&
    `
    height: 390px;
  `}
`

export const StyledBubble = styled(Flex)`
  ${({ bubbleColor }) =>
    `
    background-color: ${bubbleColor};
  `}
  padding: 10px;
  border-radius: 5px;
  width: auto;
`

export const StyledBubbleWrapper = styled(Flex)`
  ${({ isReverse }) =>
    isReverse &&
    `
    flex-direction: row-reverse;
  `}
`

export const StyledNotif = styled(Flex)`
  background-color: ${colors.brightGray};
  ${({ textColor }) => `color: ${textColor};`}
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  position: absolute;
  bottom: 0px;
  z-index: 100;
  margin-bottom: 60px;
`

export const StyledInfo = styled(AntdTypography)`
  color: ${colors.darkLiver};
  font-weight: 700;
  font-size: 12px;

  ${({ isDetail }) =>
    isDetail &&
    `
    font-weight: 500;
    width: auto;
  `}
`

export const StyledName = styled(AntdTypography)`
  color: ${colors.bleuDeFrance};
  font-weight: 700;
  font-size: 15px;

  ${({ isChat, textColor }) =>
    isChat &&
    `
    color: ${textColor};
    font-size: 13px;
  `}
`
