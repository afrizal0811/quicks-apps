import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import React from 'react'
import { items } from './help'

const AntdDropdown = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement='bottom'
    >
      <Button>
        My Task
        <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export default AntdDropdown
