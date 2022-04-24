import { Router } from 'express';
import SustainabilityController from '../controllers/SustainabilityController';
import { authenticateJWT } from '../utils/authenticateJWT';

const router = Router();
const sustainabilityController = new SustainabilityController();

router.get('/', sustainabilityController.getSustainability);
router.put('/', authenticateJWT, sustainabilityController.updateSustainability);

export default router;