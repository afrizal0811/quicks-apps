import { Input } from 'antd'
import React from 'react'
import { StyledContainer, StyledIcon } from './StyledComponents'

const AntdTextArea = (props) => {
  const { placeholder, needIcon, width, className, disabled, id } = props
  const { TextArea } = Input

  const handleClick = () => {
    document.getElementById(id).focus()
  }
  const renderIcon = needIcon && (
    <a
      href={() => false}
      onClick={handleClick}
    >
      <StyledIcon />
    </a>
  )

  return (
    <StyledContainer>
      {renderIcon}
      <TextArea
        autoSize={{ minRows: 1 }}
        className={className}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        style={{ width: width }}
      />
    </StyledContainer>
  )
}

export default AntdTextArea
