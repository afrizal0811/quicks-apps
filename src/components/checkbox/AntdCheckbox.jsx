import { Flex } from 'antd'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import { StyledCheckbox, StyledTextArea } from './StyledComponents'

const AntdCheckbox = (props) => {
  const { setIsCompleted } = props
  const [isClicked, setIsCliked] = useState(false)

  const handleChange = (e) => {
    setIsCliked(e.target.checked)
    setIsCompleted(e.target.checked)
  }

  return (
    <Flex gap={15}>
      <StyledCheckbox onChange={(e) => handleChange(e)} />
      <StyledTextArea
        isChecked={isClicked}
        placeholder='Type Task Title'
        width='370px'
        disabled={isClicked}
        color={colors.white}
      />
    </Flex>
  )
}

export default AntdCheckbox
