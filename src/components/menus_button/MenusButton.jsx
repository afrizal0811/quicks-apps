import { ConfigProvider } from 'antd'
import React, { useState } from 'react'
import { imagePath } from '../../constants/imagePath'
import Menu from './Menu'
import { StyledContainer, StyledQuicksButton } from './StyledComponents'
const MenuButton = () => {
  const [isClicked, setIsClicked] = useState(false)
  const menuIcon = [imagePath.taskIcon, imagePath.inboxIcon]
  const quicksIcon = (
    <img
      src={imagePath.menuIcon}
      width='auto'
      height='auto'
      alt='logo'
    />
  )

  const handleClick = () => {
    setIsClicked((prev) => !prev)
  }

  const renderButtonMenu = (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: '#2f80ed',
        },
      }}
    >
      <StyledQuicksButton
        shape='circle'
        onClick={handleClick}
      >
        {quicksIcon}
      </StyledQuicksButton>
    </ConfigProvider>
  )

  const renderMenu = isClicked && <Menu menuIcon={menuIcon} />
  return (
    <div>
      <StyledContainer>
        {renderMenu}
        {renderButtonMenu}
      </StyledContainer>
    </div>
  )
}

export default MenuButton
