import { Flex } from 'antd'
import styled from 'styled-components'
import AntdTypography from '../../components/typography/AntdTypography'
import { colors } from '../../constants/colors'

export const StyledContainer = styled.div`
  padding: 0 32px;
  margin: 24px 0;
  width: 734px;
  height: 500px;
  ${({ isSelected }) =>
    !isSelected &&
    `
    overflow-y: auto;
  `}
`

export const StyledContent = styled(Flex)`
  height: 100%;
`

export const StyledAvatarWrapper = styled(Flex)`
  width: 60px;
`

export const StyledChatWrapper = styled(Flex)`
  width: 90%;
`

export const StyledNotifWrapper = styled(Flex)`
  height: 100%;
`

export const StyledNotifContent = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${colors.fireOpal};
  border-radius: 50%;
`
export const StyledListWrapper = styled.a`
  width: 100%;
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
