import { DownOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdSpin from '../../components/spin/AntdSpin'
import AddTask from './AddTask'
import {
  StyledContainer,
  StyledContent,
  StyledDropdown,
  StyledHeader,
} from './StyledComponents'
import { myTaskItems } from './help'

const TaskTab = () => {
  const [tasks, setTasks] = useState([]) // store task data
  const [isLoading, setIsLoading] = useState(true) // loading animation

  //make fake loading, cause there is not data in task tab
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  const handleAdd = () => {
    const newData = {
      id: tasks.length,
    }
    setTasks((prev) => [...prev, newData])
  }

  const renderLoading = (
    <AntdSpin
      size='large'
      text='Loading Chats...'
    />
  )

  const renderTasks = (
    <div>
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
          onClick={handleAdd}
        />
      </StyledHeader>
      {tasks.map((data) => (
        <AddTask
          key={data.id}
          index={data.id}
        />
      ))}
    </div>
  )

  const renderContent = isLoading ? renderLoading : renderTasks
  return (
    <StyledContainer>
      <StyledContent
        vertical
        justify={isLoading && 'center'}
        align={isLoading && 'center'}
      >
        {renderContent}
      </StyledContent>
    </StyledContainer>
  )
}

export default TaskTab
