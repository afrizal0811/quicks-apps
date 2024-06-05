import axios from 'axios'

export const getApi = async (URL, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'app-id': token,
    },
  }
  const url = await axios
    .get(URL, config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}
