import { ConfigProvider } from 'antd'
import React from 'react'
import { colors } from '../../constants/colors'
import { compConfig } from '../../utilities/compConfig'
import { StyledSearch } from './StyledComponents'

const AntdearchBar = () => {
  return (
    <ConfigProvider theme={compConfig(colors.white)}>
      <StyledSearch
        placeholder='Search'
        allowClear
      />
    </ConfigProvider>
  )
}

export default AntdearchBar
