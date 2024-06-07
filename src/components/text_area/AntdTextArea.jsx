import { ConfigProvider, Flex, Input } from 'antd'
import React from 'react'
import { compConfig } from '../../utilities/compConfig'
import { StyledIcon } from './StyledComponents'

const AntdTextArea = (props) => {
  const { placeholder, needIcon, width, className, disabled, id, color } = props
  const { TextArea } = Input

  const handleClick = () => {
    document.getElementById(id).focus()
  }

  const renderIcon = needIcon && (
    <a
      href={() => false}
      onClick={handleClick}
    >
      <StyledIcon />
    </a>
  )

  return (
    <Flex gap={10}>
      {renderIcon}
      <ConfigProvider theme={compConfig(color)}>
        <TextArea
          autoSize={{ minRows: 1 }}
          className={className}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          style={{ width: width }}
        />
      </ConfigProvider>
    </Flex>
  )
}

export default AntdTextArea
