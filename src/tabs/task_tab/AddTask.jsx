import { DownOutlined, MoreOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import AntdCheckbox from '../../components/checkbox/AntdCheckbox'
import AntdDatePicker from '../../components/date_picker/AntdDatePicker'
import AntdDivider from '../../components/divider/AntdDivider'
import AntdDropdown from '../../components/dropdown/AntdDropdown'
import Image from '../../components/image/Image'
import AntdSelectTag from '../../components/select_tag/AntdSelectTag'
import AntdTextArea from '../../components/text_area/AntdTextArea'
import AntdTypography from '../../components/typography/AntdTypography'
import { imagePaths } from '../../constants/imagePaths'
import { StyledDiv, StyledInputContainer, StyledLink } from './StyledComponents'
import { collapseVariants, daysLeft, deleteItem, stickerOptions } from './help'

const AddTask = (props) => {
  const { id } = props
  const [isCollapsed, setIsCollapsed] = useState(true) // collapsing task
  const [isChecked, setIsChecked] = useState(false) // finishing task
  const [date, setDate] = useState('')

  const days = daysLeft(date) && !isChecked ? `${daysLeft(date)} Days Left` : ''

  const textAreaIcon = (
    <Image
      src={imagePaths.penIcon}
      width='14px'
      height='14px'
      alt='text-icon'
    />
  )

  return (
    <StyledDiv>
      <Flex
        justify='space-between'
        align='center'
      >
        <AntdCheckbox setIsChecked={setIsChecked} />
        <Flex gap={15}>
          <AntdTypography
            text={days}
            type='danger'
          />
          <AntdTypography
            text={date}
            type='secondary'
          />
          <motion.div
            variants={collapseVariants}
            initial='openIcon'
            animate={isCollapsed ? 'closedIcon' : 'openIcon'}
          >
            <StyledLink
              href={() => false}
              onClick={() => setIsCollapsed((prev) => !prev)}
            >
              <DownOutlined />
            </StyledLink>
          </motion.div>
          <AntdDropdown
            icon={<MoreOutlined rotate={90} />}
            items={deleteItem}
            placement='bottomRight'
            trigger='click'
          />
        </Flex>
      </Flex>
      <motion.div
        variants={collapseVariants}
        initial='open'
        animate={isCollapsed ? 'open' : 'closed'}
      >
        <StyledInputContainer
          gap={10}
          vertical
          style={{
            position: 'relative',
            top: isCollapsed ? '0' : '-10px',
          }}
        >
          <AntdDatePicker
            disabled={isChecked}
            setDate={setDate}
          />
          <AntdTextArea
            disabled={isChecked}
            icon={textAreaIcon}
            id={id}
            placeholder='No Description'
            width='645px'
          />
          <AntdSelectTag
            disabled={isChecked}
            options={stickerOptions}
          />
        </StyledInputContainer>
      </motion.div>
      <AntdDivider />
    </StyledDiv>
  )
}

export default AddTask
