import { Input } from 'antd'
import React from 'react'

const SearchBar = () => {
  const { Search } = Input
  return (
    <Search
      placeholder='input search text'
      allowClear
      style={{
        width: 200,
      }}
    />
  )
}

export default SearchBar
