import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.jsonbin.io',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchTransactions() {
  return api.get('/b/5e240a8b5df6407208380914').then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }

    return null
  })
}

export default {
  fetchTransactions
}