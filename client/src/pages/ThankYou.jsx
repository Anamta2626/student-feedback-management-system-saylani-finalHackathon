import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank you for your feedback!</h1>
      <Link to="/" className="text-blue-600 underline">Go back to form</Link>
    </div>
  );
}

export default ThankYou;
