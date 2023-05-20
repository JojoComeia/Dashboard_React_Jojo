import axios from "axios"

const api = axios.create({
  baseURL: `https://json-server-jojo.onrender.com`,
})

export default api
