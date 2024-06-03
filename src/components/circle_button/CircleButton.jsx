import { Button, ConfigProvider } from 'antd'
import React from 'react'
import { compConfig } from '../../utilities/compConfig'

const CircleButton = (props) => {
  const { color, onClick, content, style, className } = props

  return (
    <ConfigProvider theme={compConfig(color)}>
      <Button
        className={className}
        shape='circle'
        onClick={onClick}
        style={style}
      >
        {content}
      </Button>
    </ConfigProvider>
  )
}

export default CircleButton
