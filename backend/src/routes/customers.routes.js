import { Router } from 'express';
import { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} from '../controllers/customers.controller';

const router = Router()

router.get('/customers', getCustomers)
router.get('/customers/:profile_id', getCustomer)
router.post('/customers', createCustomer)
router.post('/count')
router.put('/customers/:profile_id', updateCustomer)
router.delete('/customers/:profile_id', deleteCustomer)

export default router