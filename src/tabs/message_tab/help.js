import Image from '../../components/image/Image'
import { colors } from '../../constants/colors'
import { imagePaths } from '../../constants/imagePaths'

export const getTime = () => {
  const date = new Date()
  const hour = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const time = hour + ':' + minutes
  return time
}

export const getDate = () => {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = today.toLocaleString('default', { month: 'long' })
  const year = today.getFullYear()
  const formattedToday = month + ' ' + day + ', ' + year

  return formattedToday
}

export const avatarGroupData = [
  {
    color: colors.chineseWhite,
    icon: (
      <Image
        src={imagePaths.userBlue}
        width='auto'
        height='auto'
        alt='user-icon'
      />
    ),
  },
  {
    color: colors.bleuDeFrance,
    icon: (
      <Image
        src={imagePaths.userWhite}
        width='auto'
        height='auto'
        alt='user-icon'
      />
    ),
  },
]

export const chatItems = [
  {
    key: '1',
    label: 'Edit',
  },
  {
    key: '2',
    label: 'Delete',
  },
]
