import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StyledContainer = styled.div`
  padding: 12px 20px;
  width: 734px;
  height: 500px;
  overflow-y: auto;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
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
    !isCollapsed &&
    `
     display: none;
  `};
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
