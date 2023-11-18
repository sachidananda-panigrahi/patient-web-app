import { doRequest } from 'src/lib/axios/axios-config'

const swrFetcher = async url => {
  const response = await doRequest.get({ url })
  return response.data
}

export default swrFetcher
