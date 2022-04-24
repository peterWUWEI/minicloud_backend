import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
import { authenticateJWT } from '../utils/authenticateJWT';

const router = Router();
const serviceController = new ServiceController();

router.get('/', serviceController.getServiceList);
router.get('/:id', serviceController.getServiceById);
router.post('/create', authenticateJWT, serviceController.createService);
router.delete('/:id', authenticateJWT, serviceController.deleteServiceById);
router.put('/:id', authenticateJWT, serviceController.updateServiceById);

export default router;