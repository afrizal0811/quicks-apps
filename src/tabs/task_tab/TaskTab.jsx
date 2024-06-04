import { DownOutlined, MoreOutlined } from '@ant-design/icons'
import React from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdCheckbox from '../../components/checkbox/AntdCheckbox'
import AntdDatePicker from '../../components/date_picker/AntdDatePicker'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import AntdTextArea from '../../components/text_area/AntdTextArea'
import AntdTypography from '../../components/typography/AntdTypography'
import {
  StyledContainer,
  StyledContent,
  StyledDays,
  StyledHeader,
  StyledInputContainer,
} from './StyledComponents'

const TaskTab = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <AntdDropdown />
        <AntdButton
          type='primary'
          content='New Task'
        />
      </StyledHeader>
      <StyledContent>
        <AntdCheckbox title='testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing ' />
        <StyledDays>
          <AntdTypography
            text='2 Days Left'
            type='danger'
          />
          <AntdTypography
            text='12/13/2023'
            type='secondary'
          />
          <DownOutlined />
          <MoreOutlined rotate={90} />
        </StyledDays>
      </StyledContent>
      <StyledInputContainer>
        <AntdDatePicker />
        <AntdTextArea />
      </StyledInputContainer>
      <AntdDivider />
    </StyledContainer>
  )
}

export default TaskTab
