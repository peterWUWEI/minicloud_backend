import { Router } from 'express';
import ContactController from '../controllers/ContactController';
import { authenticateJWT } from '../utils/authenticateJWT';

const router = Router();
const contactController = new ContactController();

router.get('/', contactController.getContactList);
router.get('/:id', contactController.getContactById);
router.post('/create', authenticateJWT, contactController.createContact);
router.delete('/:id', authenticateJWT, contactController.deleteContactById);
router.put('/:id', authenticateJWT, contactController.updateContactById);

export default router;