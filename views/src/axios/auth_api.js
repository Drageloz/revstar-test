import axios from 'axios'

/*
  axios connection to api for authentication
*/
const BASE_URL = process.env.BFF_URL + ':3000/api'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const api = {
  calls: {
    autenthicate (credentials) {
      return axios.post(BASE_URL + '/login', { username: credentials.email, password: credentials.password })
    },
    decode (jwt) {
      return axios.get(BASE_URL, { headers: { Authorization: 'Bearer ' + jwt } })
    }
  }
}
