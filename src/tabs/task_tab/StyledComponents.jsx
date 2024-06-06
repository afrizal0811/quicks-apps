import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StyledContainer = styled.div`
  padding: 24px 32px;
  width: 734px;
  height: 550px;
  overflow-y: auto;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 22px;
`

export const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledDate = styled.div`
  display: flex;
  gap: 15px;
`

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  gap: 10px;
  ${({ isCollapsed }) =>
    !isCollapsed
      ? ` display: none; visibility:hidden; `
      : `padding-top: 22px;`};
`

export const StyledLink = styled.a`
  color: ${colors.darkLiver};
  &:hover {
    color: ${colors.darkLiver};
  }
`

export const StyledDiv = styled.div`
  display: block;
  ${({ isDeleted }) =>
    isDeleted &&
    `
     display: none;
  `};
`
