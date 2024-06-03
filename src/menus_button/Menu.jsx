import { ConfigProvider } from 'antd'
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
import { compConfig, menuData } from './help'

const Menu = (props) => {
  const { isClicked, setIsClicked } = props
  const [isOpen, setIsOpen] = useState({})

  const handleClickBack = () => {
    setIsClicked(false)
    setIsOpen({})
  }

  const renderBackButton = (
    <ConfigProvider theme={compConfig(colors.darkLiver)}>
      <StyledBackButton
        shape='circle'
        onClick={handleClickBack}
      />
    </ConfigProvider>
  )

  const renderMenus = menuData.map((element, key) => {
    const { content, colorActive, colorIdle, imageActive, imageIdle, name } =
      element
    const selectedColor = isOpen[`${name}`] ? colorActive : colorIdle
    return (
      <ConfigProvider theme={compConfig(selectedColor)}>
        <StyledMenuContent>
          {isOpen[`${name}`] && renderBackButton}
          <PopupMenu content={content}>
            <StyledMenuButton
              key={key}
              shape='circle'
              onClick={() => setIsOpen({ [name]: true })}
            >
              <img
                src={isOpen[`${name}`] ? imageActive : imageIdle}
                width='auto'
                height='auto'
                alt='logo'
              />
            </StyledMenuButton>
          </PopupMenu>
        </StyledMenuContent>
      </ConfigProvider>
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
