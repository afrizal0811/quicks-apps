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
  StyledList,
  StyledListWrapper,
  StyledNameChat,
  StyledNotifContent,
  StyledNotifWrapper,
  StyledPreviewChat,
  StyledTitle,
  StyledWrapper,
} from './StyledComponents'
import { avatarGroupData } from './help'

const List = (props) => {
  const { item, index, setIsSelected } = props
  const fullName = item.owner.firstName + ' ' + item.owner.lastName
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

  const notification = index % 2 > 0 && (
    <StyledNotifWrapper>
      <StyledNotifContent />
    </StyledNotifWrapper>
  )

  const renderAvatar = index < 5 ? AvatarGroup : AvatarSingle
  return (
    <StyledListWrapper onClick={() => setIsSelected(true)}>
      <StyledList>
        <StyledAvatarWrapper>{renderAvatar}</StyledAvatarWrapper>
        <StyledChatWrapper>
          <StyledWrapper>
            <StyledTitle text={`Chat - ${index}`} />
            <StyledWrapper>
              <StyledNameChat text={fullName} />
              <StyledPreviewChat text={item.text} />
            </StyledWrapper>
          </StyledWrapper>
          <StyledWrapper>
            <AntdTypography
              text='05/06/2024 17:02'
              type='secondary'
            />
            {notification}
          </StyledWrapper>
        </StyledChatWrapper>
      </StyledList>
      <AntdDivider />
    </StyledListWrapper>
  )
}

export default List
