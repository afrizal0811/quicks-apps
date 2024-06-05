import React from 'react'
import { StyledAvatar } from './StyledComponents'

const AntdAvatar = (props) => {
  const { icon, size, color } = props

  return (
    <StyledAvatar
      icon={icon}
      size={size}
      style={{
        backgroundColor: color,
        verticalAlign: 'middle',
      }}
    />
  )
}

export default AntdAvatar
