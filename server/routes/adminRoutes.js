import express from 'express';
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/register', registerAdmin); // optional - can delete later

export default router;
