import { Flex } from 'antd'
import React from 'react'
import AntdAvatar from '../../components/avatar/AntdAvatar'
import AntdAvatarGroup from '../../components/avatar/AntdAvatarGroup'
import AntdDivider from '../../components/divider/AntdDivider'
import Image from '../../components/image/Image'
import AntdTypography from '../../components/typography/AntdTypography'
import { colors } from '../../constants/colors'
import { imagePaths } from '../../constants/imagePaths'
import {
  StyledAvatarWrapper,
  StyledChatWrapper,
  StyledInfo,
  StyledListWrapper,
  StyledName,
  StyledNotifContent,
  StyledNotifWrapper,
} from './StyledComponents'
import { avatarGroupData } from './help'

const ListMessage = (props) => {
  const { data, index, setIsSelected, setMenu } = props

  //manually add support chat
  const chatName = index === 4 ? 'FisaVast Support' : 'Chat - ' + index
  const isGroup = index < 4

  const handleSelected = () => {
    const newItems = {
      chatName: chatName,
      isGroup: isGroup,
      index: index,
    }
    setMenu(newItems)
    setIsSelected(true)
  }
  const userIcon = (
    <Image
      src={imagePaths.userWhite}
      width='auto'
      height='auto'
      alt='user-icon'
    />
  )

  const AvatarSingle = (
    <AntdAvatar
      color={colors.bleuDeFrance}
      icon={userIcon}
      size={34}
    />
  )

  const AvatarGroup = (
    <AntdAvatarGroup
      data={avatarGroupData}
      size={34}
    />
  )

  const notification = isGroup && (
    <StyledNotifWrapper
      justify='flex-end'
      align='center'
    >
      <StyledNotifContent />
    </StyledNotifWrapper>
  )

  const renderAvatar = isGroup ? AvatarGroup : AvatarSingle
  return (
    <StyledListWrapper onClick={handleSelected}>
      <Flex gap={15}>
        <StyledAvatarWrapper justify='center'>
          {renderAvatar}
        </StyledAvatarWrapper>
        <StyledChatWrapper justify='space-between'>
          <Flex
            gap={5}
            vertical
          >
            <StyledName text={chatName} />
            <Flex
              gap={5}
              vertical
            >
              <StyledInfo text={data.name} />
              <StyledInfo
                text={data.text}
                isDetail={true}
              />
            </Flex>
          </Flex>
          <Flex
            gap={5}
            vertical
          >
            <AntdTypography
              text='05/06/2024 17:02'
              type='secondary'
            />
            {notification}
          </Flex>
        </StyledChatWrapper>
      </Flex>
      <AntdDivider />
    </StyledListWrapper>
  )
}

export default ListMessage
