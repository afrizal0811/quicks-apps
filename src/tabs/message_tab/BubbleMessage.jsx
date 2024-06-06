import { MoreOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React from 'react'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import {
  StyledBubble,
  StyledBubbleWrapper,
  StyledInfo,
  StyledName,
} from './StyledComponents'
import { chatItems, getTime } from './help'

const BubbleMessage = (props) => {
  const { data, textColor, bubbleColor, isReverse, message } = props

  const renderName = (
    <StyledBubbleWrapper isReverse={isReverse}>
      <StyledName
        textColor={textColor}
        text={data ? data.name : 'You'}
        isChat={true}
      />
    </StyledBubbleWrapper>
  )

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
          text={message ? message : data.text}
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
          items={chatItems}
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
        {renderChat}
      </Flex>
    </StyledBubbleWrapper>
  )
}

export default BubbleMessage
