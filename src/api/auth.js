import fetch from './fetch'

export const login = payload => fetch.post('/v1/auth/login', payload)

export const logout = () => fetch.put('/v1/auth/logout')

export const info = () => fetch.post('/v1/auth/info')
