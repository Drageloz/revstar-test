import axios from 'axios'


/*
  axios connection to api for users
*/

const BASE_URL = process.env.BFF_URL + ':3000/api'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin,Accept, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'

export const clients_api = {
  calls: {
    register (user) {
      return axios.post(BASE_URL + '/register', user)
    },
    update (user) {
      return axios.put(BASE_URL + '/client', user)
    },
    find (client) {
      return axios.get(BASE_URL + '/client/' + client)
    },
    getAll (jwt) {
      return axios.get(BASE_URL + '/client', { headers: { Authorization: 'Bearer ' + jwt } })
    },
    delete (id) {
      return axios.delete(BASE_URL + '/client/' + id)
    }
  }
}
