import { Typography } from 'antd'
import React from 'react'

const AntdTypography = (props) => {
  const { text, type, className } = props
  const { Text } = Typography

  return (
    <Text
      className={className}
      type={type}
    >
      {text}
    </Text>
  )
}

export default AntdTypography
