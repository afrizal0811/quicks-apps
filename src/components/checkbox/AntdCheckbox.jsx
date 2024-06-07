import { Flex } from 'antd'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import { StyledCheckbox, StyledTextArea } from './StyledComponents'

const AntdCheckbox = (props) => {
  const { setIsChecked } = props
  const [isClicked, setIsCliked] = useState(false)

  const handleChange = (e) => {
    setIsCliked(e.target.checked)
    setIsChecked(e.target.checked)
  }

  return (
    <Flex gap={15}>
      <StyledCheckbox onChange={(e) => handleChange(e)} />
      <StyledTextArea
        isChecked={isClicked}
        placeholder='Type Task Title'
        width='400px'
        disabled={isClicked}
        color={colors.white}
      />
    </Flex>
  )
}

export default AntdCheckbox
