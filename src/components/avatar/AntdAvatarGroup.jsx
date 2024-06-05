import React from 'react'
import { StyledAvatar } from './StyledComponents'

const AntdAvatarGroup = (props) => {
  const { size, data } = props

  return (
    <StyledAvatar.Group>
      {data.map((item) => (
        <StyledAvatar
          icon={item.icon}
          size={size}
          style={{
            backgroundColor: item.color,
            verticalAlign: 'middle',
          }}
        />
      ))}
    </StyledAvatar.Group>
  )
}

export default AntdAvatarGroup
