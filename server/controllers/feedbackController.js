import Feedback from '../models/Feedback.js';

export const submitFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting feedback' });
  }
};
