import styled from 'styled-components'
import CircleButton from '../components/circle_button/CircleButton'

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

export const StyledMenuContent = styled.div`
  position: relative;
`

export const StyledMainButton = styled(CircleButton)`
  height: 68px;
  width: 68px;
  margin-left: 10px;
`

export const StyledMenuButton = styled(CircleButton)`
  height: 60px;
  width: 60px;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const StyledBackButton = styled(StyledMenuButton)`
  right: 10px;
  position: absolute;
`
