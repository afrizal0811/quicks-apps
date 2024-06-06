import { Checkbox } from 'antd'
import styled from 'styled-components'
import { colors } from '../../constants/colors'
import AntdTextArea from '../text_area/AntdTextArea'


export const StyledCheckbox = styled(Checkbox)`
  font-weight: 600;
  color: ${colors.darkLiver};
`

export const StyledTextArea = styled(AntdTextArea)`
  color: ${colors.darkLiver};
  font-weight: 600;
  ${({ isChecked }) =>
    isChecked &&
    `
     color: ${colors.oldSilver};
     font-weight: 400;
    text-decoration: line-through;
  `};
`
