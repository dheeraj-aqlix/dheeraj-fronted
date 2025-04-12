import axios from 'axios'
const baseUrl = 'http://localhost:5000'
export const register = (payload) => {
    return axios.post(`${baseUrl}/user/signup`,  payload , {
        'content-type': 'multipart/form-data'
    })
}