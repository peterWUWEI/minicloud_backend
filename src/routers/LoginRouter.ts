import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router = Router();
const loginController = new LoginController();

router.post('/admin', loginController.verifyAdmin);

export default router;