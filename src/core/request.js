import axios from 'axios'

const url = 'http://192.168.1.110:5000'

export const registration = async (data) => {
    const response = await axios.post(`${url}/auth/registration`, data)
    return response.data
}

export const logIn = async (data) => {
    const response = await axios.post(`${url}/auth/login`, data)
    return response.data
}
