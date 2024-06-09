import { Flex, Select, Tag } from 'antd'
import React, { useState } from 'react'
import { imagePaths } from '../../constants/imagePaths'
import { isArrayEmpty } from '../../utilities/isEmpty'
import { StyledIcon } from './StyledComponents'

const AntdSelectTag = (props) => {
  const { options, disabled } = props
  const [isSelected, setIsSelected] = useState(false)
  const { Option } = Select
  const handleChange = (e) => {
    const isValueEmpty = isArrayEmpty(e)
    if (!isValueEmpty) setIsSelected(true)
    else setIsSelected(false)
  }

  const icon = (
    <StyledIcon
      isSelected={isSelected}
      src={imagePaths.stickerIcon}
      width='14px'
      height='14px'
      alt='sticker-icon'
    />
  )

  const tagRender = (props) => {
    const { label, value, onClose } = props
    const onPreventMouseDown = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    return (
      <Tag
        bordered={false}
        color={value}
        onMouseDown={onPreventMouseDown}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
          color: 'black',
        }}
      >
        {label}
      </Tag>
    )
  }

  return (
    <Flex
      gap={10}
      justify='center'
      align='center'
    >
      {icon}
      <Select
        disabled={disabled}
        mode='multiple'
        onChange={(e) => handleChange(e)}
        style={{
          width: '100%',
        }}
        tagRender={tagRender}
      >
        {options.map((data) => (
          <Option
            key={data.value}
            value={data.value}
            style={{ backgroundColor: data.value }}
          >
            {data.label}
          </Option>
        ))}
      </Select>
    </Flex>
  )
}

export default AntdSelectTag
