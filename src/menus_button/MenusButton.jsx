import { motion } from 'framer-motion'
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
      <motion.div
        animate={{ scale: !isClicked ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <StyledMainButton
          color={colors.bleuDeFrance}
          content={quicksIcon}
          onClick={() => setIsClicked(true)}
          shape='circle'
        />
      </motion.div>
    </StyledContainer>
  )
}

export default MenuButton
