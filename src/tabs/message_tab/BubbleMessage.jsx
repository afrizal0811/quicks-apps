import { MoreOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React from 'react'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import {
  StyledBubble,
  StyledBubbleWrapper,
  StyledCard,
  StyledInfo,
  StyledName,
} from './StyledComponents'
import { getTime, myChatItems, otherChatItems } from './help'

const BubbleMessage = (props) => {
  const {
    bubbleColor,
    data,
    index,
    isReverse,
    myMessage,
    setReplayData,
    textColor,
    allReply,
  } = props

  const spesificReply = allReply && allReply[index]

  const handleOtherOption = (e) => {
    const isReply = e.key === '2'
    if (isReply) {
      setReplayData({
        name: data.name,
        text: data.text,
      })
    }
  }

  const renderName = (
    <StyledBubbleWrapper isReverse={isReverse}>
      <StyledName
        textColor={textColor}
        text={data ? data.name : 'You'}
        isChat={true}
      />
    </StyledBubbleWrapper>
  )

  const renderRepliedText = <StyledCard>{spesificReply}</StyledCard>

  const renderChat = (
    <StyledBubbleWrapper
      gap={5}
      isReverse={isReverse}
    >
      <StyledBubble
        bubbleColor={bubbleColor}
        gap={5}
        vertical
      >
        <StyledInfo
          text={myMessage ? myMessage : data.text}
          isDetail={true}
        />
        <StyledInfo
          text={getTime()}
          isDetail={true}
        />
      </StyledBubble>
      <div>
        <AntdDropdown
          icon={<MoreOutlined rotate={90} />}
          items={isReverse ? myChatItems : otherChatItems}
          onClick={handleOtherOption}
          placement={isReverse ? 'bottomRight' : 'bottomLeft'}
          trigger='click'
        />
      </div>
    </StyledBubbleWrapper>
  )

  return (
    <StyledBubbleWrapper isReverse={isReverse}>
      <Flex
        gap={5}
        vertical
      >
        {renderName}
        {spesificReply && myMessage && renderRepliedText}
        {renderChat}
      </Flex>
    </StyledBubbleWrapper>
  )
}

export default BubbleMessage
