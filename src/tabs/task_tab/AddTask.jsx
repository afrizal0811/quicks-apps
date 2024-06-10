import { MoreOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React, { useState } from 'react'
import AntdCheckbox from '../../components/checkbox/AntdCheckbox'
import AntdCollapse from '../../components/collapse/AntdCollapse'
import AntdDatePicker from '../../components/date_picker/AntdDatePicker'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import Image from '../../components/image/Image'
import AntdSelectTag from '../../components/select_tag/AntdSelectTag'
import AntdTextArea from '../../components/text_area/AntdTextArea'
import AntdTypography from '../../components/typography/AntdTypography'
import { imagePaths } from '../../constants/imagePaths'
import { StyledInputContainer } from './StyledComponents'
import { daysLeft, deleteItem, stickerOptions } from './help'
const AddTask = (props) => {
  const { index } = props
  const [date, setDate] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const days =
    daysLeft(date) && !isCompleted ? `${daysLeft(date)} Days Left` : ''

  const textAreaIcon = (
    <Image
      src={imagePaths.penIcon}
      width='14px'
      height='14px'
      alt='text-icon'
    />
  )

  const label = (
    <Flex
      justify='space-between'
      align='center'
    >
      <AntdCheckbox setIsCompleted={setIsCompleted} />
      <Flex gap={15}>
        <AntdTypography
          text={days}
          type='danger'
        />
        <AntdTypography
          text={date}
          type='secondary'
        />
      </Flex>
    </Flex>
  )

  const children = (
    <StyledInputContainer
      gap={10}
      vertical
    >
      <AntdDatePicker setDate={setDate} />
      <AntdTextArea
        icon={textAreaIcon}
        placeholder='No Description'
        width='645px'
      />
      <AntdSelectTag options={stickerOptions} />
    </StyledInputContainer>
  )

  const items = [
    {
      children: children,
      key: index,
      label: label,
    },
  ]

  return (
    <div>
      <Flex
        align='flex-start'
        gap={10}
        justify='space-between'
      >
        <AntdCollapse
          items={items}
          activeKey={index}
        />
        <div>
          <AntdDropdown
            icon={<MoreOutlined rotate={90} />}
            items={deleteItem}
            placement='bottomRight'
            trigger='click'
          />
        </div>
      </Flex>
      <AntdDivider />
    </div>
  )
}

export default AddTask
