import { Typography } from 'antd'
import React from 'react'

const AntdTypography = (props) => {
  const { text, type } = props
  const { Text } = Typography

  return <Text type={type}>{text}</Text>
}

export default AntdTypography
