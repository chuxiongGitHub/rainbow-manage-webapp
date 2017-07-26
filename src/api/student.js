import fetch from './fetch'

export const list = params => fetch.get('/v1/student', { params })

export const create = payload => fetch.post('/v1/student/create', payload)

export const info = sno => fetch.get(`/v1/student/info/${sno}`)
