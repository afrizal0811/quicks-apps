import { Flex, Spin } from 'antd'
import React from 'react'

const AntdSpin = (props) => {
  const { size, text } = props
  return (
    <Flex
      gap={10}
      justify='center'
      align='center'
      vertical
    >
      <Spin size={size} />
      {text}
    </Flex>
  )
}

export default AntdSpin
