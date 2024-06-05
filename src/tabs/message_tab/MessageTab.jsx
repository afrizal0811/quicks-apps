import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/search_bar/AntdSearchBar'
import AntdSpin from '../../components/spin/AntdSpin'
import { getApi } from '../../utilities/handleApi'
import List from './List'
import { StyledContainer, StyledContent } from './StyledComponents'
const MessageTab = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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

  const renderLists = data.map((item, key) => {
    return (
      <List
        item={item}
        key={key}
        index={key}
      />
    )
  })
  
  const renderContent = isLoading ? <AntdSpin /> : renderLists
  return (
    <StyledContainer>
      <SearchBar />
      <StyledContent isLoading={isLoading}>{renderContent}</StyledContent>
    </StyledContainer>
  )
}

export default MessageTab
