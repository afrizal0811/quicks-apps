import { Popover } from 'antd'
import React from 'react'
const PopupMenu = (props) => {
  const { children, content } = props

  return (
    <Popover
      content={content}
      placement='topRight'
      trigger='click'
    >
      {children}
    </Popover>
  )
}

export default PopupMenu
