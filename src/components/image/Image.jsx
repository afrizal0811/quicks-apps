import React from 'react'

const Image = (props) => {
  const { src, width, height, alt } = props
  
  return (
    <img
      alt={alt}
      height={height}
      src={src}
      width={width}
    />
  )
}

export default Image
