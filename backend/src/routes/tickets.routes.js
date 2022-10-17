import { Router } from 'express'
import { getTickets, getTicket, createTicket, updateTicket, deleteTicket } from '../controllers/tickets.controller'
import { verifyMaxTickets, verifySeatAvailability } from '../middlewares/verifyTicketCreation'
const router = Router()

router.get('/tickets', getTickets)
router.get('/tickets/:ticket_id', getTicket)
router.post('/tickets', verifyMaxTickets, verifySeatAvailability, createTicket)
router.put('/tickets/:ticket_id', updateTicket)
router.delete('/tickets/:ticket_id', deleteTicket)

export default router