import axios from 'axios'

const baseURL = process.env.EXPO_PUBLIC_API_URL

export default axios.create({
  baseURL,
})
