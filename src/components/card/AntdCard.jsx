import React from 'react'
import { StyledCard } from './StyledComponents'

const AntdCard = (props) => {
  const { children, className } = props
  
  return <StyledCard className={className}>{children}</StyledCard>
}

export default AntdCard
