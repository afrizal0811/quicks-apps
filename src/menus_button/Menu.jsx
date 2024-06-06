import { Flex } from 'antd'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from '../components/image/Image'
import { colors } from '../constants/colors'
import Tabs from '../tabs/Tabs'
import {
  StyledBackButton,
  StyledMenuButton,
  StyledMenuContent,
  StyledWrapper,
} from './StyledComponents'
import { isEmpty, menuData } from './help'

const Menu = (props) => {
  const { isClicked, setIsClicked } = props
  const [isOpen, setIsOpen] = useState({})
  const [selectedMenu, setSelectedMenu] = useState('')

  const isOpenEmpty = isEmpty(isOpen)

  const handleClickBack = () => {
    setIsClicked(false)
    setIsOpen({})
  }
  const handleClickMenu = (name) => {
    setSelectedMenu(name)
    setIsOpen({ [name]: true })
  }
  const renderBackButton = (
    <StyledBackButton
      color={colors.darkLiver}
      onClick={handleClickBack}
      shape='circle'
    />
  )

  const renderMenus = menuData.map((element, key) => {
    const { colorActive, colorIdle, imageActive, imageIdle, name } = element

    const selectedColor = isOpen[`${name}`] ? colorActive : colorIdle
    const renderContent = (
      <Image
        src={isOpen[`${name}`] ? imageActive : imageIdle}
        width='auto'
        height='auto'
        alt='logo'
      />
    )
    return (
      <StyledWrapper
        align='center'
        gap={10}
        justify='center'
        vertical
      >
        {isOpenEmpty && name}
        <StyledMenuContent>
          {isOpen[`${name}`] && renderBackButton}
          <StyledMenuButton
            color={selectedColor}
            content={renderContent}
            onClick={() => handleClickMenu(name)}
            shape='circle'
          />
        </StyledMenuContent>
      </StyledWrapper>
    )
  })

  return (
    <motion.div animate={{ x: isClicked ? 85 : 350, scale: isClicked ? 1 : 0 }}>
      <Flex
        align='flex-end'
        gap={10}
        justify='flex-end'
        vertical
      >
        {isOpen[`${selectedMenu}`] && <Tabs selectedMenu={selectedMenu} />}
        <Flex>{renderMenus}</Flex>
      </Flex>
    </motion.div>
  )
}

export default Menu
