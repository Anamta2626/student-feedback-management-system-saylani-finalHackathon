import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import ThankYou from './pages/ThankYou';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
