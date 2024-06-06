import { ClockCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StyledIcon = styled(ClockCircleOutlined)`
  ${({ isSelected }) =>
    isSelected &&
    `
     color: ${colors.bleuDeFrance};
  `};
`
