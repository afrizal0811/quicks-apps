import { Checkbox } from 'antd'
import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StyledCheckbox = styled(Checkbox)`
  width: 470px;
  font-weight: 600;
  color: ${colors.darkLiver};
  
  ${({ isChecked }) =>
    isChecked &&
    `
     color: ${colors.oldSilver};
     font-weight: 400;
    text-decoration: line-through;
  `};
`
