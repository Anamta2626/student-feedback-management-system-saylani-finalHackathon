import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedbackTable from '../components/FeedbackTable';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [courseFilter, setCourseFilter] = useState('');
  const navigate = useNavigate();

  const fetchFeedbacks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/feedbacks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setFeedbacks(res.data);
    } catch (err) {
      alert('Unauthorized or session expired');
      navigate('/admin/login');
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this feedback?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/feedback/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchFeedbacks();
    } catch (err) {
      alert('Error deleting feedback');
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const filtered = feedbacks.filter(f => f.course.toLowerCase().includes(courseFilter.toLowerCase()));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Search by course"
        className="mb-4 w-full border p-2 rounded"
        onChange={(e) => setCourseFilter(e.target.value)}
      />
      <FeedbackTable feedbacks={filtered} onDelete={handleDelete} />
    </div>
  );
}

export default AdminDashboard;
