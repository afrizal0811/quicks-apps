import { DatePicker } from 'antd'
import React, { useState } from 'react'
import { StyledContainer, StyledIcon } from './StyledComponents'

const AntdDatePicker = () => {
  const [isSelected, setIsSelected] = useState(false)

  const onChange = (dateString) => {
    if (dateString) setIsSelected(true)
    else setIsSelected(false)
  }
  return (
    <StyledContainer>
      <StyledIcon isSelected={isSelected} />
      <DatePicker
        format={{
          format: 'DD-MM-YYYY',
          type: 'mask',
        }}
        placement='bottomRight'
        onChange={onChange}
      />
    </StyledContainer>
  )
}

export default AntdDatePicker
