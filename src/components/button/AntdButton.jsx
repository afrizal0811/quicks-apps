import { Button, ConfigProvider } from 'antd'
import React from 'react'
import { compConfig } from '../../utilities/compConfig'

const AntdButton = (props) => {
  const { color, onClick, content, style, shape, className, type } = props

  return (
    <ConfigProvider theme={compConfig(color)}>
      <Button
        className={className}
        onClick={onClick}
        shape={shape}
        style={style}
        type={type}
      >
        {content}
      </Button>
    </ConfigProvider>
  )
}

export default AntdButton
