import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://adrixustech.herokuapp.com/'
  });

export const login=(formData)=>instance.post('/signin',formData)
export const register=(formData)=>instance.post('signup',formData)
export const getUser = ()=>instance.get('/users')