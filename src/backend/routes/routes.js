import express from 'express'
import asyncHandler from '../utils/asyncHandler.js'
import { getFilteredValues, getAllUsers } from '../controllers/photoController.js'

const router = express.Router()

router.get('/users', asyncHandler(getAllUsers))
router.get('/photos', asyncHandler(getFilteredValues))

export default router