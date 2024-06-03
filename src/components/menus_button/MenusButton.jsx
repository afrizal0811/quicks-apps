import { ConfigProvider } from 'antd'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import { imagePaths } from '../../constants/imagePaths'
import Menu from './Menu'
import { StyledContainer, StyledQuicksButton } from './StyledComponents'

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
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: colors.bleuDeFrance,
          },
        }}
      >
        <StyledQuicksButton
          shape='circle'
          onClick={() => setIsClicked(true)}
        >
          {quicksIcon}
        </StyledQuicksButton>
      </ConfigProvider>
    </StyledContainer>
  )
}

export default MenuButton
