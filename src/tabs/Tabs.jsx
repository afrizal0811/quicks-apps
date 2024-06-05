import React from 'react'
import AntdCard from '../components/card/AntdCard'
import MessageTab from './message_tab/MessageTab'
import TaskTab from './task_tab/TaskTab'

const Tabs = (props) => {
  const { selectedMenu } = props
  const isTaskTab = selectedMenu === 'Task' && <TaskTab />
  const isMessageTab = selectedMenu === 'Inbox' && <MessageTab />

  return (
    <AntdCard>
      {isTaskTab}
      {isMessageTab}
    </AntdCard>
  )
}

export default Tabs
