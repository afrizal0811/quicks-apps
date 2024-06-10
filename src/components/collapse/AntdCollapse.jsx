import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { StyledCollapse } from './StyledComponents'

const AntdCollapse = (props) => {
  const { items, className, activeKey } = props

  return (
    <StyledCollapse
      className={className}
      defaultActiveKey={[`${activeKey}`]}
      collapsible='icon'
      expandIconPosition='end'
      ghost
      items={items}
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
    />
  )
}

export default AntdCollapse
