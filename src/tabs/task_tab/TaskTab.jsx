import { DownOutlined, MoreOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React, { useEffect, useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdCollapse from '../../components/collapse/AntdCollapse'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import AntdSpin from '../../components/spin/AntdSpin'
import AddTask from './AddTask'
import {
  StyledContainer,
  StyledContent,
  StyledDropdown,
  StyledHeader,
} from './StyledComponents'
import { deleteItem, myTaskItems } from './help'

const TaskTab = () => {
  const { children, label } = AddTask()
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
      children: children,
      key: tasks.length,
      label: label,
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
        <div>
          <Flex
            align='flex-start'
            gap={10}
            justify='space-between'
          >
            <AntdCollapse items={data} />
            <div>
              <AntdDropdown
                icon={<MoreOutlined rotate={90} />}
                items={deleteItem}
                placement='bottomRight'
                trigger='click'
              />
            </div>
          </Flex>
          <AntdDivider />
        </div>
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
