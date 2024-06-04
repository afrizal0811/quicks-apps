import React, { useState } from 'react'
import {
  StyledCheckbox,
  StyledContainer,
  StyledTextArea,
} from './StyledComponents'
const AntdCheckbox = () => {
  const [isClicked, setIsCliked] = useState(false)

  return (
    <StyledContainer>
      <StyledCheckbox onChange={(e) => setIsCliked(e.target.checked)} />
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
