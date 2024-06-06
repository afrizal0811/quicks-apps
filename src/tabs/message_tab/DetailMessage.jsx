import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React, { useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdInput from '../../components/input/AntdInput'
import { colors } from '../../constants/colors'
import BubbleMessage from './BubbleMessage'
import {
  StyledChatContainer,
  StyledInfo,
  StyledLink,
  StyledName,
  StyledTempNotif,
} from './StyledComponents'
import { getDate } from './help'

const DetailMessage = (props) => {
  const { data, menu, setIsSelected } = props
  const { chatName, isGroup } = menu
  const [myMessage, setMyMessage] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const handleSend = () => {
    const value = document.getElementById('inputText').value
    if (value) {
      setMyMessage((prev) => [...prev, value])
      document.getElementById('inputText').value = ''
    }
  }

  const handleBack = () => {
    setIsSelected(false)
    setMyMessage([])
  }

  const backIcon = (children) => (
    <StyledLink
      href={() => false}
      onClick={handleBack}
    >
      {children}
    </StyledLink>
  )

  const renderHeader = (
    <div>
      <Flex
        justify='space-between'
        align='center'
        gap={10}
      >
        <Flex
          justify='center'
          align='center'
          gap={20}
        >
          {backIcon(<ArrowLeftOutlined />)}
          <Flex
            gap={5}
            vertical
          >
            <StyledName text={chatName} />
            {isGroup && (
              <StyledInfo
                text='3 Participants'
                isDetail={true}
              />
            )}
          </Flex>
        </Flex>
        {backIcon(<CloseOutlined />)}
      </Flex>
      <AntdDivider />
    </div>
  )
  const renderOtherChats = (
    <Flex
      gap={10}
      vertical
    >
      <BubbleMessage
        data={data[0]}
        textColor={colors.indianYellow}
        bubbleColor={colors.papayaWhip}
      />
      <BubbleMessage
        data={data[1]}
        textColor={colors.mint}
        bubbleColor={colors.water}
      />
    </Flex>
  )

  const renderNewMessage = isGroup && (
    <AntdDivider
      title='New Message'
      color={colors.fireOpal}
    />
  )
  const renderTempNotif = isGroup && !isScrolled && (
    <Flex justify='center' align='center'>
      <StyledTempNotif justify='center'>New Message</StyledTempNotif>
    </Flex>
  )

  return (
    <div>
      {renderHeader}
      <StyledChatContainer
        onScroll={() => setIsScrolled(true)}
        gap={10}
        vertical
      >
        {renderOtherChats}
        <AntdDivider
          title={`Today ${getDate()}`}
          color={colors.darkLiver}
        />
        {renderTempNotif}
        {renderOtherChats}
        {renderNewMessage}
        {renderOtherChats}
        {myMessage.map((message) => (
          <BubbleMessage
            isReverse={true}
            message={message}
            textColor={colors.lavenderIndigo}
            bubbleColor={colors.lavender}
          />
        ))}
      </StyledChatContainer>

      <Flex gap={10}>
        <AntdInput
          placeholder='Type a new text'
          id='inputText'
        />
        <AntdButton
          type='primary'
          content='Send'
          onClick={handleSend}
        />
      </Flex>
    </div>
  )
}

export default DetailMessage
