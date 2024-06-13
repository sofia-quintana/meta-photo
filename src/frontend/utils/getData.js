import axios from 'axios'
import { API_BASE_URL, API_USERS_URL } from './constants'

export const fetchPhotos = async (email, title, album, limit, offset) => {
    const sanitizedLimit = !!limit && limit > 0 ? limit : 25
    const params = new URLSearchParams({ 'album.title': album, 'album.user.email': email, title, sanitizedLimit, offset })
    const response = await axios.get(`${API_BASE_URL}?${params}`)
    return response.data
}

export const fetchUsers = async () => { 
    const response = await axios.get(`${API_USERS_URL}`)
    return response.data
}