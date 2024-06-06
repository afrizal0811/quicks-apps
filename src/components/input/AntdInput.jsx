import { ConfigProvider } from 'antd'
import React from 'react'
import { colors } from '../../constants/colors'
import { compConfig } from '../../utilities/compConfig'
import { StyledInput } from './StyledComponents'

const AntdInput = (props) => {
  const { suffix, placeholder, id, onChange, value } = props

  return (
    <ConfigProvider theme={compConfig(colors.white)}>
      <StyledInput
        allowClear
        id={id}
        placeholder={placeholder}
        suffix={suffix}
        onChange={onChange}
        value={value}
      />
    </ConfigProvider>
  )
}

export default AntdInput
