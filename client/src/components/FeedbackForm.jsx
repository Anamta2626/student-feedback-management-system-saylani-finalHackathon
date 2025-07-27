import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // <-- Link added

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rating: '',
    comments: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      navigate('/thankyou');
    } catch (err) {
      alert('Error submitting feedback');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Course Feedback Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="course" placeholder="Course Name" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="rating" placeholder="Rating (1-5)" min="1" max="5" required onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="comments" placeholder="Additional Comments" onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit Feedback</button>
      </form>

      {/* Admin login option */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Are you an admin?{' '}
          <Link to="/admin/login" className="text-blue-600 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FeedbackForm;
