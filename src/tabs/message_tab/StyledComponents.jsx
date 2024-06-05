import styled from 'styled-components'
import AntdTypography from '../../components/typography/AntdTypography'
import { colors } from '../../constants/colors'

export const StyledContainer = styled.div`
  padding: 12px 20px;
  width: 734px;
  height: 500px;
  overflow-y: auto;
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
`

export const StyledChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`

export const StyledTitle = styled(AntdTypography)`
  color: ${colors.bleuDeFrance};
  font-weight: 700;
  font-size: 15px;
`

export const StyledNameChat = styled(AntdTypography)`
  color: ${colors.darkLiver};
  font-weight: 700;
  font-size: 10px;
`

export const StyledPreviewChat = styled(StyledNameChat)`
  font-weight: 500;
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
