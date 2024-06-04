import React, { useState } from 'react'
import {
  StyledCheckbox,
  StyledContainer,
  StyledTextArea,
} from './StyledComponents'
const AntdCheckbox = (props) => {
  const { setIsChecked } = props
  const [isClicked, setIsCliked] = useState(false)

  const handleChange = (e) => {
    setIsCliked(e.target.checked)
    setIsChecked(e.target.checked)
  }

  return (
    <StyledContainer>
      <StyledCheckbox onChange={(e) => handleChange(e)} />
      <StyledTextArea
        isChecked={isClicked}
        placeholder='Type Task Title'
        width='400px'
        disabled={isClicked}
      />
    </StyledContainer>
  )
}

export default AntdCheckbox
