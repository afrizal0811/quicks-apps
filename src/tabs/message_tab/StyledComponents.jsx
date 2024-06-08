import { Flex } from 'antd'
import styled from 'styled-components'
import AntdCard from '../../components/card/AntdCard'
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
    overflow-y: scroll;
  `}
`

export const StyledNotifContent = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${colors.fireOpal};
  border-radius: 50%;
`

export const StyledReply = styled.div`
  color: ${colors.darkLiver};
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
  overflow-y: scroll;
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
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  position: absolute;
  bottom: 0px;
  z-index: 100;
  margin-bottom: 60px;
  ${({ textColor }) => `color: ${textColor};`}
  ${({ isSupport }) => isSupport && `width: 598px;`}
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

export const StyledCard = styled(AntdCard)`
  background-color: ${colors.antiFlashWhite};
  padding: 10px;
  height: auto;
  margin: 0;
`

export const StyledReplyPreview = styled(StyledCard)`
  bottom: 0px;
  margin-bottom: 53px;
  position: absolute;
  width: 598px;
  z-index: 100;
`
