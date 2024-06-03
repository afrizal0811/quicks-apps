import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { imagePaths } from '../constants/imagePaths'
import Menu from './Menu'
import { StyledContainer, StyledMainButton } from './StyledComponents'
const MenuButton = () => {
  const [isClicked, setIsClicked] = useState(false)

  const quicksIcon = (
    <img
      src={imagePaths.menuIcon}
      width='auto'
      height='auto'
      alt='logo'
    />
  )

  return (
    <StyledContainer>
      <Menu
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <StyledMainButton
        color={colors.bleuDeFrance}
        onClick={() => setIsClicked(true)}
        content={quicksIcon}
      />
    </StyledContainer>
  )
}

export default MenuButton
