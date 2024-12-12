import React, { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';

const CheckReviews = () => {
  const { reviews, approveReview, deleteReview } = useContext(ReviewContext);

  const handleDelete = (id) => {
    if (!user) return;
    if (window.confirm("Are you sure you want to delete this review?")) {
      deleteReview(id, token);
    }
  };


  return (
    <div className="max-w-3xl mx-auto p-6 h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Review Approval Panel
      </h2>
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews available. Please try again later.</p>
      ) : (
        <div className="space-y-8 max-h-[70vh] overflow-y-auto">
          {reviews.map((review) => !review.approved && (
            <div
              key={review._id}
              className="bg-black p-6 rounded-xl shadow-md border-2 border-gray-300 border-3 transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{review.title}</h3>
              <p className="text-gray-100 mb-4">{review.content}</p>
              <p className="text-gray-200 mb-4 italic">{review.excerpt}</p>
              <p className="text-sm text-gray-300 mb-2">
                Created by{' '}
                <span className="font-semibold">{review.author.name}</span> on{' '}
                {new Date(review.createdAt).toLocaleString()}
              </p>
              <div className="flex space-x-4 mt-4">
                {!review.approved && (
                  <button
                    onClick={() => approveReview(review._id)}
                    className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(review._id)}
                  className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckReviews;
