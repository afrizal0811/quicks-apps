import { Popover } from 'antd'
import React from 'react'

const MenuTab = (props) => {
  const { children } = props

  return (
    <Popover
      content='content'
      placement='topRight'
      title='title'
      trigger='click'
    >
      {children}
    </Popover>
  )
}

export default MenuTab
