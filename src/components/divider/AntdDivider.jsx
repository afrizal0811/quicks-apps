import { ConfigProvider, Divider } from 'antd'
import React from 'react'
import { compConfig } from '../../utilities/compConfig'

const AntdDivider = (props) => {
  const { title, color } = props
  
  const renderDivider = !title ? <Divider /> : <Divider>{title}</Divider>

  return (
    <ConfigProvider theme={compConfig(color)}>
      {renderDivider}
    </ConfigProvider>
  )
}

export default AntdDivider
