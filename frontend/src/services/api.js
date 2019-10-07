import axios from 'axios'

const token = document.cookie
    .replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1")

const api = axios.create({ 
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': `bearer ${token}`}
})

export default api