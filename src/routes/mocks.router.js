import { Router } from 'express';
import { generateMockUsers, generateAndInsertData } from '../controllers/mocksController.js';

const router = Router();

router.get('/mockingusers', generateMockUsers);

router.post('/generateData', generateAndInsertData);

router.get('/mockingpets', (req, res) => {
  
});

export default router;
