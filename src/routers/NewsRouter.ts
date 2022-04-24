import { Router } from 'express';
import NewsController from '../controllers/NewsController';
import { authenticateJWT } from '../utils/authenticateJWT';

const router = Router();
const newsController = new NewsController();

router.get('/', newsController.getNewsList);
router.get('/:id', newsController.getNewsById);
router.post('/create', authenticateJWT, newsController.createNews);
router.delete('/:id', authenticateJWT, newsController.deleteNewsById);
router.put('/:id', authenticateJWT, newsController.updateNewsById);

export default router;