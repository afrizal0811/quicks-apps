import { ConfigProvider, Input } from 'antd'
import React from 'react'
import { colors } from '../../constants/colors'
import { compConfig } from '../../utilities/compConfig'

const SearchBar = () => {
  const { Search } = Input
  return (
    <ConfigProvider theme={compConfig(colors.white)}>
      <Search
        placeholder='input search text'
        allowClear
        style={{
          width: '100%',
        }}
      />
    </ConfigProvider>
  )
}

export default SearchBar
