import { colors } from '../../constants/colors'
import { imagePaths } from '../../constants/imagePaths'
import MessageTab from '../../tabs/message_tab/MessageTab'
import TaskTab from '../../tabs/task_tab/TaskTab'

export const menuData = [
  {
    content: <TaskTab />,
    colorActive: colors.mellowApricot,
    colorIdle: colors.antiFlashWhite,
    imageActive: imagePaths.taskActiveIcon,
    imageIdle: imagePaths.taskIcon,
    name: 'task',
  },
  {
    content: <MessageTab />,
    colorActive: colors.violetsAreBlue,
    colorIdle: colors.antiFlashWhite,
    imageActive: imagePaths.inboxActiveIcon,
    imageIdle: imagePaths.inboxIcon,
    name: 'inbox',
  },
]
