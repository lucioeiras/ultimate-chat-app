import axios from 'axios'

const ENVIROMENT = import.meta.env.VITE_NODE_ENV
const LOCAL_URL = import.meta.env.VITE_LOCAL_SERVER_URL
const PROD_URL = import.meta.env.VITE_PROD_SERVER_URL

export const api = axios.create({
  baseURL: ENVIROMENT === 'development' ? LOCAL_URL : PROD_URL
})
