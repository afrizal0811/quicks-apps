import { ConfigProvider } from 'antd'
import React from 'react'
import { StyledMenuButton, StyledMenuContainer } from './StyledComponents'

const Menu = (props) => {
  const { menuIcon } = props
  const renderMenus = menuIcon.map((element) => {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: '#F2F2F2',
          },
        }}
      >
        <StyledMenuButton shape='circle'>
          <img
            src={element}
            width='auto'
            height='auto'
            alt='logo'
          />
        </StyledMenuButton>
      </ConfigProvider>
    )
  })

  return <StyledMenuContainer>{renderMenus}</StyledMenuContainer>
}

export default Menu
