import { Router } from 'express';
import { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} from '../controllers/customers.controller';

const router = Router()

router.get('/', getCustomers)
router.get('/:profile_id', getCustomer)
router.post('/', createCustomer)
router.put('/:profile_id', updateCustomer)
router.delete('/:profile_id', deleteCustomer)

export default router