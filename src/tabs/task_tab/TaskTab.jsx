import { DownOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AddTask from './AddTask'
import {
  StyledContainer,
  StyledDropdown,
  StyledHeader,
} from './StyledComponents'
import { myTaskItems } from './help'

const TaskTab = () => {
  const [tasks, setTasks] = useState([]) // store task data

  const handleClick = () => {
    setTasks((prev) => [...prev, Date.now()])
  }

  return (
    <StyledContainer>
      <StyledHeader justify='space-between'>
        <StyledDropdown
          icon={<DownOutlined />}
          isButton={true}
          items={myTaskItems}
          placement='bottom'
          text='My Tasks'
          trigger='click'
        />
        <AntdButton
          type='primary'
          content='New Task'
          onClick={handleClick}
        />
      </StyledHeader>
      {tasks.map((data) => (
        <AddTask id={data} />
      ))}
    </StyledContainer>
  )
}

export default TaskTab
