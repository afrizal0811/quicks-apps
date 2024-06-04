import { DownOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import AddTask from './AddTask'
import { StyledContainer, StyledHeader } from './StyledComponents'
import { items } from './help'
const TaskTab = () => {
  const [tasks, setTasks] = useState([])
  
  const handleClick = () => {
    const newTask = {
      id: Date.now(),
    }
    setTasks((prev) => [...prev, newTask])
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <AntdDropdown
          icon={<DownOutlined />}
          isButton={true}
          items={items}
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
        <AddTask
          {...data}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </StyledContainer>
  )
}

export default TaskTab
