import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
import NewsController from '../controllers/NewsController';
import InvestorInfoController from '../controllers/InvestorInfoController';
import SustainabilityController from '../controllers/SustainabilityController';
import ContactController from '../controllers/ContactController';
import AboutController from '../controllers/AboutController';

const router = Router();
const serviceController = new ServiceController();
const newsController = new NewsController();
const investorInfoController = new InvestorInfoController();
const sustainabilityController = new SustainabilityController();
const contactController = new ContactController();
const aboutController = new AboutController();

router.get('/services', serviceController.getServiceList);
router.get('/services/get', serviceController.getServiceById);
router.get('/news', newsController.getNewsList);
router.get('/news/get', newsController.getNewsById);
router.get('/investorinfo', investorInfoController.getInvestorInfoList);
router.get('/investorinfo/get', investorInfoController.getInvestorInfoById);
router.get('/sustainability', sustainabilityController.getSustainability);
router.get('/contacts', contactController.getContactList);
router.get('/contacts/get', contactController.getContactById);
router.get('/about', aboutController.getAboutList)
router.get('/about/get', aboutController.getAboutById)

export default router;