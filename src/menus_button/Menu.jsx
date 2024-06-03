import { motion } from 'framer-motion'
import React, { useState } from 'react'
import PopupMenu from '../components/popup_menu/PopupMenu'
import { colors } from '../constants/colors'
import {
  StyledBackButton,
  StyledMenuButton,
  StyledMenuContainer,
  StyledMenuContent,
} from './StyledComponents'
import { menuData } from './help'

const Menu = (props) => {
  const { isClicked, setIsClicked } = props
  const [isOpen, setIsOpen] = useState({})

  const handleClickBack = () => {
    setIsClicked(false)
    setIsOpen({})
  }

  const renderBackButton = (
    <StyledBackButton
      color={colors.darkLiver}
      onClick={handleClickBack}
    />
  )

  const renderMenus = menuData.map((element) => {
    const { content, colorActive, colorIdle, imageActive, imageIdle, name } =
      element
    const selectedColor = isOpen[`${name}`] ? colorActive : colorIdle
    const renderContent = (
      <img
        src={isOpen[`${name}`] ? imageActive : imageIdle}
        width='auto'
        height='auto'
        alt='logo'
      />
    )
    return (
      <StyledMenuContent>
        {isOpen[`${name}`] && renderBackButton}
        <PopupMenu content={content}>
          <StyledMenuButton
            color={selectedColor}
            content={renderContent}
            onClick={() => setIsOpen({ [name]: true })}
          />
        </PopupMenu>
      </StyledMenuContent>
    )
  })

  return (
    <motion.div
      animate={{ x: isClicked ? 0 : 330, opacity: isClicked ? 1 : 0 }}
    >
      <StyledMenuContainer>{renderMenus}</StyledMenuContainer>
    </motion.div>
  )
}

export default Menu
