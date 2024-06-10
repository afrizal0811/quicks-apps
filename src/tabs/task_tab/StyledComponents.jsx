import { Flex } from 'antd'
import styled from 'styled-components'
import AntdDropdown from '../../components/dropdown/AntdDropdown'

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
  padding: 0 20px;
`
export const StyledContent = styled(Flex)`
  height: 100%;
`
export const StyledDropdown = styled(AntdDropdown)`
  margin-left: 100px;
`
