import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from '../components/image/Image'
import { colors } from '../constants/colors'
import { imagePaths } from '../constants/imagePaths'
import Menu from './Menu'
import { StyledContainer, StyledMainButton } from './StyledComponents'

const MenuButton = () => {
  const [isMainClicked, setIsMainClicked] = useState(false)
  const [isChildClicked, setIsChildClicked] = useState(false)

  const quicksIcon = (
    <Image
      src={imagePaths.menuIcon}
      width='auto'
      height='auto'
      alt='logo'
    />
  )

  return (
    <StyledContainer
      justify='flex-end'
      align='flex-end'
    >
      <Menu
        isChildClicked={isChildClicked}
        isMainClicked={isMainClicked}
        setIsChildClicked={setIsChildClicked}
        setIsMainClicked={setIsMainClicked}
      />
      <motion.div
        animate={{ scale: !isMainClicked || !isChildClicked ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <StyledMainButton
          color={colors.bleuDeFrance}
          content={quicksIcon}
          onClick={() => setIsMainClicked(true)}
          shape='circle'
        />
      </motion.div>
    </StyledContainer>
  )
}

export default MenuButton
