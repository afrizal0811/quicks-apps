import { ConfigProvider, Flex, Input } from 'antd'
import React from 'react'
import { compConfig } from '../../utilities/compConfig'

const AntdTextArea = (props) => {
  const { placeholder, icon, width, className, disabled, id, color } = props
  const { TextArea } = Input

  const handleClick = () => {
    document.getElementById(id).focus()
  }

  const renderIcon = icon && (
    <a
      href={() => false}
      onClick={handleClick}
    >
      {icon}
    </a>
  )

  return (
    <Flex
      gap={10}
      justify='center'
      align='center'
    >
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
