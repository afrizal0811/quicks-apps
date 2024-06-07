import React from 'react'

const Image = (props) => {
  const { src, width, height, alt, className } = props

  return (
    <img
      alt={alt}
      className={className}
      height={height}
      src={src}
      width={width}
    />
  )
}

export default Image
