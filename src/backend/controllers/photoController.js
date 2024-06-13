import { getFilteredPhotos, getUsers } from '../services/photoService.js'

export const getAllUsers = async (req, res) => { 
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getFilteredValues = async (req, res) => {
    try {
        const photos = await getFilteredPhotos(req.query)
        res.status(200).json(photos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}