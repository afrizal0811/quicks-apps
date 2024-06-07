import { DownOutlined, MoreOutlined, UpOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React, { useState } from 'react'
import AntdCheckbox from '../../components/checkbox/AntdCheckbox'
import AntdDatePicker from '../../components/date_picker/AntdDatePicker'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import AntdSelectTag from '../../components/select_tag/AntdSelectTag'
import AntdTextArea from '../../components/text_area/AntdTextArea'
import AntdTypography from '../../components/typography/AntdTypography'
import { StyledDiv, StyledInputContainer, StyledLink } from './StyledComponents'
import { daysLeft, deleteItem, stickerOptions } from './help'
import Image from '../../components/image/Image'
import { imagePaths } from '../../constants/imagePaths'

const AddTask = (props) => {
  const { id } = props
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isChecked, setIsChecked] = useState(false)
  const [date, setDate] = useState('')

  const renderCollapseIcon = isCollapsed ? <UpOutlined /> : <DownOutlined />
  const days = daysLeft(date) && !isChecked ? `${daysLeft(date)} Days Left` : ''

  const textAreaIcon = (
    <Image
      src={imagePaths.penIcon}
      width='14px'
      height='14px'
      alt='text-icon'
    />
  )

  return (
    <StyledDiv>
      <Flex
        justify='space-between'
        align='center'
      >
        <AntdCheckbox setIsChecked={setIsChecked} />
        <Flex gap={15}>
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
            placement='bottomRight'
            trigger='click'
          />
        </Flex>
      </Flex>
      <StyledInputContainer
        gap={10}
        isCollapsed={isCollapsed}
        vertical
      >
        <AntdDatePicker
          disabled={isChecked}
          setDate={setDate}
        />
        <AntdTextArea
          disabled={isChecked}
          icon={textAreaIcon}
          id={id}
          placeholder='No Description'
          width='645px'
        />
        <AntdSelectTag
          disabled={isChecked}
          options={stickerOptions}
        />
      </StyledInputContainer>
      <AntdDivider />
    </StyledDiv>
  )
}

export default AddTask
