import { Checkbox } from 'antd'
import styled from 'styled-components'
import { colors } from '../../constants/colors'
import AntdTextArea from '../text_area/AntdTextArea'

export const StyledCheckbox = styled(Checkbox)`
  font-weight: 600;
  color: ${colors.darkLiver};
`

export const StyledTextArea = styled(AntdTextArea)`
  border: none;
  outline: none;
  color: ${colors.darkLiver};
  font-weight: 600;
  ${({ isChecked }) =>
    isChecked &&
    `
     color: ${colors.oldSilver};
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  `};

  &:disabled {
    background-color: white;
  }
`
