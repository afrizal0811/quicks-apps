import { StyledCheckbox } from './StyledComponents'
import React, { useState } from 'react'

const AntdCheckbox = (props) => {
  const { title } = props
  const [isClicked, setIsCliked] = useState(false)

  return (
    <StyledCheckbox
      isChecked={isClicked}
      onChange={(e) => setIsCliked(e.target.checked)}
    >
      {title}
    </StyledCheckbox>
  )
}

export default AntdCheckbox
