
import { ConfigProvider } from 'antd'
import React from 'react'
import { colors } from '../../constants/colors'
import { compConfig } from '../../utilities/compConfig'
import { StyledSearch } from './StyledComponents'

const AntdInput = (props) => {
  const { suffix, placeholder, id } = props

  return (
    <ConfigProvider theme={compConfig(colors.white)}>
      <StyledSearch
        allowClear
        placeholder={placeholder}
        suffix={suffix}
        id={id}
      />
    </ConfigProvider>
  )
}

export default AntdInput
