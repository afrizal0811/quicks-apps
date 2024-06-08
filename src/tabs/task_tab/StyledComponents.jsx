import { Flex } from 'antd'
import styled from 'styled-components'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import Image from '../../components/image/Image'
import { colors } from '../../constants/colors'

export const StyledContainer = styled.div`
  padding: 24px 32px;
  width: 734px;
  height: 520px;
  overflow-y: scroll;
`

export const StyledHeader = styled(Flex)`
  padding-bottom: 22px;
`

export const StyledInputContainer = styled(Flex)`
  padding: 22px 20px 0;
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
  width: 100%;
`

export const StyledIcon = styled(Image)``
