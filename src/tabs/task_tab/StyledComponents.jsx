import { Flex } from 'antd'
import styled from 'styled-components'
import { colors } from '../../constants/colors'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import Image from '../../components/image/Image'

export const StyledContainer = styled.div`
  padding: 24px 32px;
  width: 734px;
  height: 520px;
  overflow-y: auto;
`

export const StyledHeader = styled(Flex)`
  padding-bottom: 22px;
`

export const StyledInputContainer = styled(Flex)`
  padding: 0 25px;
  ${({ isCollapsed }) =>
    !isCollapsed ? ` display: none;  ` : `padding-top: 22px;`};
`

export const StyledDropdown = styled(AntdDropdown)`
  margin-left: 100px;
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

export const StyledIcon = styled(Image)`
  
`