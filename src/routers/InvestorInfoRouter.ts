import { Router } from 'express';
import InvestorInfoController from '../controllers/InvestorInfoController';
import { authenticateJWT } from '../utils/authenticateJWT';

const router = Router();
const investorInfoController = new InvestorInfoController();

router.get('/', investorInfoController.getInvestorInfoList);
router.get('/:id', investorInfoController.getInvestorInfoById);
router.post('/create', authenticateJWT, investorInfoController.createInvestorInfo);
router.delete('/:id', authenticateJWT, investorInfoController.deleteInvestorInfoById);
router.put('/:id', authenticateJWT, investorInfoController.updateInvestorInfoById);

export default router;