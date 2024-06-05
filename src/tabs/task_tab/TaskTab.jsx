import { DownOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import AddTask from './AddTask'
import { StyledContainer, StyledHeader } from './StyledComponents'
import { items } from './help'
const TaskTab = () => {
  const [tasks, setTasks] = useState([])
  const [totalTask, setTotalTask] = useState(0)

  useEffect(() => {
    const isSame = totalTask === tasks.length
    const isMoreTask = tasks.length > 0
    const isMoreTotal = totalTask > 0

    if (isSame && isMoreTask && isMoreTotal) {
      setTasks([])
      setTotalTask(0)
    }
  }, [totalTask, tasks])

  const handleClick = () => {
    setTasks((prev) => [...prev, Date.now()])
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
          id={data}
          setTotalTask={setTotalTask}
        />
      ))}
    </StyledContainer>
  )
}

export default TaskTab
