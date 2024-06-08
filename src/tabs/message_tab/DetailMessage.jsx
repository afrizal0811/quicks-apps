import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React, { useState } from 'react'
import AntdButton from '../../components/button/AntdButton'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdInput from '../../components/input/AntdInput'
import AntdSpin from '../../components/spin/AntdSpin'
import { colors } from '../../constants/colors'
import { isArrayEmpty, isObjectEmpty } from '../../utilities/isEmpty'
import BubbleMessage from './BubbleMessage'
import {
  StyledChatContainer,
  StyledInfo,
  StyledLink,
  StyledName,
  StyledNotif,
  StyledReply,
  StyledReplyPreview,
} from './StyledComponents'
import { getDate } from './help'

const DetailMessage = (props) => {
  const { data, menu, setIsSelected } = props
  const { chatName, isGroup } = menu
  const [myMessage, setMyMessage] = useState([])  //my chat
  const [isScrolled, setIsScrolled] = useState(false) // trigger when scroll
  const [value, setValue] = useState('') // value inside input
  const [replayData, setReplayData] = useState({}) // 
  const [allReply, setAllReply] = useState([]) //rep

  const isMessageEmpty = isArrayEmpty(myMessage)
  const isReplyEmpty = isObjectEmpty(replayData)

  const handleSend = () => {
    if (value) {
      setMyMessage((prev) => [...prev, value])
      setAllReply((prev) => [...prev, replayData.text])
      setValue('')
      handleDeleteReply()
    }
  }

  const handleBack = () => {
    handleDeleteReply()
    setIsSelected(false)
    setMyMessage([])
    setAllReply([])
  }

  const handleDeleteReply = () => {
    setReplayData({})
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

  const renderNewChatDivider = (
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

  const renderNewChatNotif = (
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
      isSupport={true}
      textColor={colors.darkLiver}
    >
      <AntdSpin size='small' />
      Please wait while we connect you with one of our team ...
    </StyledNotif>
  )

  const renderReplyPreview = (
    <StyledReplyPreview>
      <Flex justify='space-between'>
        <StyledReply>
          <h5>Replay to {replayData.name}</h5>
          <p>{replayData.text}</p>
        </StyledReply>
        <StyledLink
          href={() => false}
          onClick={handleDeleteReply}
        >
          <CloseOutlined />
        </StyledLink>
      </Flex>
    </StyledReplyPreview>
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
        setReplayData={setReplayData}
      />
      <BubbleMessage
        data={data[1]}
        textColor={colors.mint}
        bubbleColor={colors.water}
        setReplayData={setReplayData}
      />
    </Flex>
  )

  const renderGroupChats = (
    <div>
      {multiChats}
      {renderDateDivider}
      {isGroup && !isScrolled && renderNewChatNotif}
      {multiChats}
      {isGroup && renderNewChatDivider}
      {multiChats}
    </div>
  )

  const singleChat = (
    <BubbleMessage
      data={data[0]}
      textColor={colors.bleuDeFrance}
      bubbleColor={colors.cultured}
      setReplayData={setReplayData}
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
        {myMessage.map((message, index) => (
          <BubbleMessage
            allReply={allReply}
            bubbleColor={colors.lavender}
            index={index}
            isReverse={true}
            myMessage={message}
            textColor={colors.lavenderIndigo}
          />
        ))}
        {!isGroup && !isMessageEmpty && renderSupportNotif}
        {!isReplyEmpty && renderReplyPreview}
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
