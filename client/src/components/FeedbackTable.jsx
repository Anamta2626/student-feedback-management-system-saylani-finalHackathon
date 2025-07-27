import React from 'react';
import { FaTrash } from 'react-icons/fa';

function FeedbackTable({ feedbacks, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Course</th>
            <th className="p-2 border">Rating</th>
            <th className="p-2 border">Comments</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb) => (
            <tr key={fb._id}>
              <td className="p-2 border">{fb.name}</td>
              <td className="p-2 border">{fb.email}</td>
              <td className="p-2 border">{fb.course}</td>
              <td className="p-2 border">{fb.rating}</td>
              <td className="p-2 border">{fb.comments}</td>
              <td className="p-2 border">{new Date(fb.createdAt).toLocaleDateString()}</td>
              <td className="p-2 border">
                <button onClick={() => onDelete(fb._id)} className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackTable;
