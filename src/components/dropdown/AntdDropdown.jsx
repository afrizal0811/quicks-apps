import { Button, Dropdown } from 'antd'
import React from 'react'

const AntdDropdown = (props) => {
  const { text, items, icon, isButton, trigger, onClick, placement } = props
  const buttonComp = (
    <Button>
      {text}
      {icon}
    </Button>
  )
  const renderComponents = isButton ? buttonComp : icon
  return (
    <Dropdown
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
