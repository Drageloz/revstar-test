import axios from 'axios'


/*
  axios connection to api for inventary
*/
const BASE_URL = process.env.BFF_URL + ':3001/api'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers['Access-Control-Allow-Headers'] = 'Authorization, Access-Control-Allow-Headers, Origin,Accept, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'

export const inventaryApi = {
  calls: {
    delete (nit, jwt) {
      return axios.delete(BASE_URL + '/inventary/' + nit, { headers: { Authorization: 'Bearer ' + jwt } })
    }
  }
}
