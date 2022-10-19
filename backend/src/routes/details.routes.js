import Router from 'express';
import { getDetails, detailsQRCode } from '../controllers/details.controller';

const router = Router()

router.get('/details/:profile_id', getDetails)
router.post('/details', detailsQRCode)


export default router