import { SearchOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd'
import React from 'react'
import { colors } from '../../constants/colors'
import { compConfig } from '../../utilities/compConfig'
import { StyledSearch } from './StyledComponents'

const AntdInput = () => {
  return (
    <ConfigProvider theme={compConfig(colors.white)}>
      <StyledSearch
        placeholder='Search'
        allowClear
        suffix={<SearchOutlined />}
      />
    </ConfigProvider>
  )
}

export default AntdInput
