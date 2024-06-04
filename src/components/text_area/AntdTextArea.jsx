import { Input } from 'antd'
import React from 'react'
import { StyledContainer, StyledIcon } from './StyledComponents'

const AntdTextArea = () => {
  const { TextArea } = Input

  const handleClick = () => {
    document.getElementById('area').focus()
  }

  return (
    <StyledContainer>
      <a
        href={() => false}
        onClick={handleClick}
      >
        <StyledIcon />
      </a>
      <TextArea
        autoSize={{ minRows: 1 }}
        id='area'
        style={{ width: '645px' }}
      />
    </StyledContainer>
  )
}

export default AntdTextArea
