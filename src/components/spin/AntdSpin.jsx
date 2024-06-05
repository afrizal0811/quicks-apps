import { Spin } from 'antd'
import React from 'react'
import { StyledContainer } from './StyledComponents'
const AntdSpin = () => {
  return (
    <StyledContainer>
      <Spin size='large' />
      <p>Loading Chats...</p>
    </StyledContainer>
  )
}

export default AntdSpin
