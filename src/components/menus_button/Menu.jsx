import { ConfigProvider } from 'antd'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import MenuTab from '../menu_tab/MenuTab'
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
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: colors.darkLiver,
        },
      }}
    >
      <StyledBackButton
        shape='circle'
        onClick={handleClickBack}
      />
    </ConfigProvider>
  )

  const renderMenus = menuData.map((element, key) => {
    const { colorActive, colorIdle, imageActive, imageIdle, name } = element
    return (
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: isOpen[`${name}`] ? colorActive : colorIdle,
          },
        }}
      >
        <StyledMenuContent>
          {isOpen[`${name}`] && renderBackButton}
          <MenuTab>
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
          </MenuTab>
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
