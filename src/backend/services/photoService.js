import axios from 'axios'
import { USERS_API, ALBUMS_API, PHOTOS_API } from '../utils/apiConstants.js'
import { applyFilters } from '../mappers/photoMapper.js'

export const getUsers = async () => { 
    const response = await axios.get(USERS_API)
    return response.data
}

export const getFilteredPhotos = async (filters) => {  
    const photos = await axios.get(PHOTOS_API)
    const albums = await axios.get(ALBUMS_API)
    const users = await axios.get(USERS_API) 
    const filteredData = applyFilters(filters, { photos: photos.data, albums: albums.data, users: users.data })
    
    return filteredData
}