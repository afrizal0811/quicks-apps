import { DownOutlined, MoreOutlined, UpOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import AntdCheckbox from '../../components/checkbox/AntdCheckbox'
import AntdDatePicker from '../../components/date_picker/AntdDatePicker'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import AntdTextArea from '../../components/text_area/AntdTextArea'
import AntdTypography from '../../components/typography/AntdTypography'
import {
  StyledDate,
  StyledDiv,
  StyledInfoContainer,
  StyledInputContainer,
  StyledLink,
} from './StyledComponents'
import { daysLeft, deleteItem } from './help'

const AddTask = (props) => {
  const { id } = props
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [date, setDate] = useState('')

  const handleDelete = () => {
    setIsDeleted(true)
  }

  const renderCollapseIcon = isCollapsed ? <UpOutlined /> : <DownOutlined />
  const days = daysLeft(date) && !isChecked ? `${daysLeft(date)} Days Left` : ''

  return (
    <StyledDiv isDeleted={isDeleted}>
      <StyledInfoContainer>
        <AntdCheckbox setIsChecked={setIsChecked} />
        <StyledDate>
          <AntdTypography
            text={days}
            type='danger'
          />
          <AntdTypography
            text={date}
            type='secondary'
          />
          <StyledLink
            href={() => false}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {renderCollapseIcon}
          </StyledLink>
          <AntdDropdown
            icon={<MoreOutlined rotate={90} />}
            items={deleteItem}
            onClick={handleDelete}
            placement='bottomRight'
            trigger='click'
          />
        </StyledDate>
      </StyledInfoContainer>
      <StyledInputContainer isCollapsed={isCollapsed}>
        <AntdDatePicker
          disabled={isChecked}
          setDate={setDate}
        />
        <AntdTextArea
          id={id}
          disabled={isChecked}
          needIcon={true}
          placeholder='No Description'
          width='645px'
        />
      </StyledInputContainer>
      <AntdDivider />
    </StyledDiv>
  )
}

export default AddTask
