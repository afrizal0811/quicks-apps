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
  const { tasks, setTasks, id } = props
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)
  const [date, setDate] = useState('')

  const renderCollapseIcon = isCollapsed ? <UpOutlined /> : <DownOutlined />
  const days = daysLeft(date) ? `${daysLeft(date)} Days Left` : ''

  const handleDelete = () => {
    tasks.forEach((task) => {
      if (task.id === id) {
        setIsDeleted(true)
        setTasks((prev) => prev.filter((data) => data.id !== id))
      }
    })
  }
  return (
    <StyledDiv isDeleted={isDeleted}>
      {id}
      <StyledInfoContainer>
        <AntdCheckbox />
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
        <AntdDatePicker setDate={setDate} />
        <AntdTextArea
          id={id}
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
