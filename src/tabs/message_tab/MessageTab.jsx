import { SearchOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import AntdInput from '../../components/input/AntdInput'
import AntdSpin from '../../components/spin/AntdSpin'
import { getApi } from '../../utilities/handleApi'
import DetailMessage from './DetailMessage'
import ListMessage from './ListMessage'
import { StyledContainer, StyledContent } from './StyledComponents'

const MessageTab = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSelected, setIsSelected] = useState(false)
  const [menu, setMenu] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_BASE_URL
      const token = process.env.REACT_APP_TOKEN
      const result = await getApi(url, token)
      setData(result.data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const newData = data.map((item) => {
    return {
      name: item.owner.firstName + ' ' + item.owner.lastName,
      text: item.text,
    }
  })

  const renderLists = (
    <div>
      <AntdInput
        suffix={<SearchOutlined />}
        placeholder='Search'
      />
      {newData.map((data, key) => (
        <ListMessage
          data={data}
          index={key}
          setIsSelected={setIsSelected}
          setMenu={setMenu}
        />
      ))}
    </div>
  )

  const renderDetails = (
    <DetailMessage
      data={newData}
      menu={menu}
      setIsSelected={setIsSelected}
    />
  )

  const renderSection = isSelected ? renderDetails : renderLists

  const renderContent = isLoading ? <AntdSpin /> : renderSection
  return (
    <StyledContainer isSelected={isSelected}>
      <StyledContent isLoading={isLoading}>{renderContent}</StyledContent>
    </StyledContainer>
  )
}

export default MessageTab
