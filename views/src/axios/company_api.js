import axios from 'axios'

/*
  axios connection to api for company
*/
const BASE_URL = process.env.BFF_URL + ':3001/api'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers['Access-Control-Allow-Headers'] = 'Authorization, Access-Control-Allow-Headers, Origin,Accept, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'

export const companyApi = {
  calls: {
    upsert (company, jwt) {
      return axios.post(BASE_URL + '/companies', {...company}, { headers: { Authorization: 'Bearer ' + jwt } })
    },
    getAll (jwt) {
      return axios.get(BASE_URL + '/companies/all', { headers: { Authorization: 'Bearer ' + jwt } })
    },
    delete (nit, jwt) {
      return axios.delete(BASE_URL + '/companies/' + nit, { headers: { Authorization: 'Bearer ' + jwt } })
    },
    findByNit (nit, jwt) {
      return axios.get(BASE_URL + '/companies/' + nit, { headers: { Authorization: 'Bearer ' + jwt } })
    }
  }
}
