import { Button } from 'antd'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100vh;
  width: 100%;
  padding: 24px;
  z-index: 100;
`
export const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledQuicksButton = styled(Button)`
  height: 68px;
  width: 68px;
  margin-left: 10px;
`

export const StyledMenuButton = styled(Button)`
  height: 60px;
  width: 60px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
