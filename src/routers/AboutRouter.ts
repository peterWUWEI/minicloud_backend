import { Router } from 'express';
import AboutController from '../controllers/AboutController';
import { authenticateJWT } from '../utils/authenticateJWT';

const router = Router();
const aboutController = new AboutController();

router.get('/', aboutController.getAboutList);
router.get('/:id', aboutController.getAboutById);
router.post('/create', authenticateJWT, aboutController.createAbout);
router.delete('/:id', authenticateJWT, aboutController.deleteAboutById);
router.put('/:id', authenticateJWT, aboutController.updateAboutById);

export default router;