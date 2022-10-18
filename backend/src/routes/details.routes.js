import Router from 'express';
import { getDetails } from '../controllers/details.controller';

const router = Router()

router.get('/details/:profile_id', getDetails)

export default router