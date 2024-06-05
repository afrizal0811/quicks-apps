import { colors } from '../../constants/colors'
import Image from '../../components/image/Image'
import { imagePaths } from '../../constants/imagePaths'

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
