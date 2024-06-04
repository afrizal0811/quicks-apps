import { ClockCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const StyledIcon = styled(ClockCircleOutlined)`
  ${({ isSelected }) =>
    isSelected &&
    `
     color: ${colors.bleuDeFrance};
  `};
`
