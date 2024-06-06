import { Flex } from 'antd'
import styled from 'styled-components'
import AntdButton from '../components/button/AntdButton'
import { colors } from '../constants/colors'

export const StyledContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  padding: 24px;
  z-index: 100;
`

export const StyledMenuContent = styled.div`
  position: relative;
  flex-direction: column;
`

export const StyledWrapper = styled(Flex)`
  color: ${colors.antiFlashWhite};
`

export const StyledMainButton = styled(AntdButton)`
  height: 68px;
  width: 68px;
  margin-left: 5px;
`

export const StyledMenuButton = styled(AntdButton)`
  height: 60px;
  width: 60px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const StyledBackButton = styled(StyledMenuButton)`
  right: 10px;
  position: absolute;
`
