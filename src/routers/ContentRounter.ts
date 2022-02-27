import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
import NewsController from '../controllers/NewsController';

const router = Router();
const serviceController = new ServiceController();
const newsController = new NewsController();

router.get('/services', serviceController.getServiceList);
router.get('/services/get', serviceController.getServiceById);
router.get('/news', newsController.getNewsList);
router.get('/news/get', newsController.getNewsById);

export default router;