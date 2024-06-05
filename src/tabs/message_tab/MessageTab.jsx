import React, { useEffect, useState, Fragment } from 'react'
import SearchBar from '../../components/search_bar/AntdSearchBar'
import AntdSpin from '../../components/spin/AntdSpin'
import { getApi } from '../../utilities/handleApi'
import Detail from './Detail'
import List from './List'
import { StyledContainer, StyledContent } from './StyledComponents'
const MessageTab = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSelected, setIsSelected] = useState(false)

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

  const renderLists = (
    <Fragment>
      <SearchBar />
      {data.map((item, key) => (
        <List
          index={key}
          item={item}
          setIsSelected={setIsSelected}
        />
      ))}
    </Fragment>
  )

  const renderSection = isSelected ? <Detail /> : renderLists
  const renderContent = isLoading ? <AntdSpin /> : renderSection
  return (
    <StyledContainer>
      <StyledContent isLoading={isLoading}>{renderContent}</StyledContent>
    </StyledContainer>
  )
}

export default MessageTab
