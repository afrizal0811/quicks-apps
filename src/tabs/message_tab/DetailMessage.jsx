import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React, { useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdInput from '../../components/input/AntdInput'
import AntdSpin from '../../components/spin/AntdSpin'
import { colors } from '../../constants/colors'
import BubbleMessage from './BubbleMessage'
import {
  StyledChatContainer,
  StyledInfo,
  StyledLink,
  StyledName,
  StyledNotif,
} from './StyledComponents'
import { getDate } from './help'

const DetailMessage = (props) => {
  const { data, menu, setIsSelected } = props
  const { chatName, isGroup } = menu
  const [myMessage, setMyMessage] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [value, setValue] = useState('')

  const isEmptyMessage = myMessage.length === 0

  const handleSend = () => {
    if (value) {
      setMyMessage((prev) => [...prev, value])
      setValue('')
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

  const renderNewChatDivider = isGroup && (
    <AntdDivider
      title='New Message'
      color={colors.fireOpal}
    />
  )

  const renderDateDivider = (
    <AntdDivider
      title={`Today ${getDate()}`}
      color={colors.darkLiver}
    />
  )

  const renderNewChatNotif = isGroup && !isScrolled && (
    <Flex
      justify='center'
      align='center'
    >
      <StyledNotif
        justify='center'
        textColor={colors.bleuDeFrance}
      >
        New Message
      </StyledNotif>
    </Flex>
  )

  const renderSupportNotif = (
    <StyledNotif
      gap={10}
      textColor={colors.darkLiver}
    >
      <AntdSpin size='small' />
      Please wait while we connect you with one of our team ...
    </StyledNotif>
  )

  const multiChats = (
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

  const renderGroupChats = (
    <div>
      {multiChats}
      {renderDateDivider}
      {renderNewChatNotif}
      {multiChats}
      {renderNewChatDivider}
      {multiChats}
    </div>
  )

  const singleChat = (
    <BubbleMessage
      data={data[0]}
      textColor={colors.bleuDeFrance}
      bubbleColor={colors.cultured}
    />
  )

  const renderChat = isGroup ? renderGroupChats : singleChat

  return (
    <div>
      {renderHeader}
      <StyledChatContainer
        gap={10}
        isGroup={isGroup}
        onScroll={() => setIsScrolled(true)}
        vertical
      >
        {renderChat}
        {myMessage.map((message) => (
          <BubbleMessage
            isReverse={true}
            message={message}
            textColor={colors.lavenderIndigo}
            bubbleColor={colors.lavender}
          />
        ))}
        {!isGroup && !isEmptyMessage && renderSupportNotif}
      </StyledChatContainer>
      <Flex gap={10}>
        <AntdInput
          placeholder='Type a new text'
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
