import fetch from './fetch'

export const list = () => fetch.get('/v1/gps')
