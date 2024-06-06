import { Button, Dropdown } from 'antd'
import React from 'react'

const AntdDropdown = (props) => {
  const {
    className,
    icon,
    isButton,
    items,
    onClick,
    placement,
    text,
    trigger,
  } = props
  
  const buttonComp = (
    <Button>
      {text}
      {icon}
    </Button>
  )
  const renderComponents = isButton ? buttonComp : icon
  return (
    <Dropdown
      className={className}
      menu={{
        items,
        onClick,
      }}
      placement={placement}
      trigger={trigger}
    >
      {renderComponents}
    </Dropdown>
  )
}

export default AntdDropdown
