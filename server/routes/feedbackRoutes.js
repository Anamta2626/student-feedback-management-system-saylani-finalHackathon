import express from 'express';
import auth from '../middleware/auth.js';
import {
  submitFeedback,
  getAllFeedbacks,
  deleteFeedback,
} from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', submitFeedback);
router.get('/', auth, getAllFeedbacks);
router.delete('/:id', auth, deleteFeedback);

export default router;
