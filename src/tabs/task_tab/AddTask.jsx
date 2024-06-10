import { Flex } from 'antd'
import React, { useState } from 'react'
import AntdCheckbox from '../../components/checkbox/AntdCheckbox'
import AntdDatePicker from '../../components/date_picker/AntdDatePicker'
import Image from '../../components/image/Image'
import AntdSelectTag from '../../components/select_tag/AntdSelectTag'
import AntdTextArea from '../../components/text_area/AntdTextArea'
import AntdTypography from '../../components/typography/AntdTypography'
import { imagePaths } from '../../constants/imagePaths'
import { StyledInputContainer } from './StyledComponents'
import { daysLeft, stickerOptions } from './help'
const AddTask = () => {
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

  return {
    children,
    label,
  }
}

export default AddTask
