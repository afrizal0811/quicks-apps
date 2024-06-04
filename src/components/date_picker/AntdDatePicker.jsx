import { DatePicker } from 'antd'
import React, { useState } from 'react'
import { StyledContainer, StyledIcon } from './StyledComponents'

const AntdDatePicker = (props) => {
  const { setDate, disabled } = props
  const [isSelected, setIsSelected] = useState(false)

  const onChange = (date, dateString) => {
    if (dateString) {
      setDate(dateString)
      setIsSelected(true)
    } else setIsSelected(false)
  }

  return (
    <StyledContainer>
      <StyledIcon isSelected={isSelected} />
      <DatePicker
        format={{
          format: 'DD/MM/YYYY',
          type: 'mask',
        }}
        placement='bottomRight'
        onChange={onChange}
        disabled={disabled}
      />
    </StyledContainer>
  )
}

export default AntdDatePicker
