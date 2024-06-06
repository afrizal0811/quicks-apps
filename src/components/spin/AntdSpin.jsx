import { Spin } from 'antd'
import React from 'react'
import { StyledContainer } from './StyledComponents'
const AntdSpin = (props) => {
  const {size, text } = props
  return (
    <StyledContainer>
      <Spin size={size} />
      {text}
    </StyledContainer>
  )
}

export default AntdSpin
