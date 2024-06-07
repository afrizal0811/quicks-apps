import { colors } from '../constants/colors'
import { imagePaths } from '../constants/imagePaths'

export const menuData = [
  {
    colorActive: colors.mellowApricot,
    colorIdle: colors.antiFlashWhite,
    imageActive: imagePaths.taskActiveIcon,
    imageIdle: imagePaths.taskIcon,
    name: 'Task',
  },
  {
    colorActive: colors.violetsAreBlue,
    colorIdle: colors.antiFlashWhite,
    imageActive: imagePaths.inboxActiveIcon,
    imageIdle: imagePaths.inboxIcon,
    name: 'Inbox',
  },
]