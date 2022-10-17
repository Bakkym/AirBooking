import { Router } from 'express'
import { getAllAvailableSeats, getAllSeats, getSeat } from '../controllers/seats.controller'

const router = Router()

router.get('/seats', getAllSeats)
router.get('/seats/available', getAllAvailableSeats)
router.get('/seats/:seat_id', getSeat)

export default router
