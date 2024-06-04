import { motion } from 'framer-motion'
import React, { useState } from 'react'
import PopupMenu from '../components/popup_menu/PopupMenu'
import { colors } from '../constants/colors'
import {
  StyledBackButton,
  StyledMenuButton,
  StyledMenuContainer,
  StyledMenuContent,
  StyledWrapper,
} from './StyledComponents'
import { isEmpty, menuData } from './help'

const Menu = (props) => {
  const { isClicked, setIsClicked } = props
  const [isOpen, setIsOpen] = useState({})

  const isOpenEmpty = isEmpty(isOpen)

  const handleClickBack = () => {
    setIsClicked(false)
    setIsOpen({})
  }

  const renderBackButton = (
    <StyledBackButton
      color={colors.darkLiver}
      onClick={handleClickBack}
      shape='circle'
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
      <StyledWrapper>
        {isOpenEmpty && name}
        <StyledMenuContent>
          {isOpen[`${name}`] && renderBackButton}
          <PopupMenu content={content}>
            <StyledMenuButton
              color={selectedColor}
              content={renderContent}
              onClick={() => setIsOpen({ [name]: true })}
              shape='circle'
            />
          </PopupMenu>
        </StyledMenuContent>
      </StyledWrapper>
    )
  })

  return (
    <motion.div animate={{ x: isClicked ? 85 : 350, scale: isClicked ? 1 : 0 }}>
      <StyledMenuContainer>{renderMenus}</StyledMenuContainer>
    </motion.div>
  )
}

export default Menu
