import React, { useContext, useState } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

const ReviewList = () => {
  const { reviews, deleteReview, updateReview } = useContext(ReviewContext);
  const { user, token } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);

  const handleDelete = (id) => {
    if (!user) return;
    if (window.confirm("Are you sure you want to delete this review?")) {
      deleteReview(id, token);
    }
  };

  const handleEdit = (review) => {
    setIsEditing(true);
    setCurrentReview(review);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!currentReview || !token) return;

    updateReview(currentReview._id, currentReview, token).then(() => {
      setIsEditing(false);
      setCurrentReview(null);
    });
  };

  const handleChange = (e) => {
    setCurrentReview({ ...currentReview, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4" style={{ height: "80vh" }}>
      <h2 className="text-2xl font-bold mb-4 text-white">My Reviews</h2>
      {isEditing ? (
        <form onSubmit={handleUpdate} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md">
          <input
            type="text"
            name="title"
            value={currentReview.title}
            onChange={handleChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <textarea
            name="content"
            value={currentReview.content}
            onChange={handleChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <textarea
            name="excerpt"
            value={currentReview.excerpt}
            onChange={handleChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-4">
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        reviews
          .filter((review) => review.author._id === user._id)
          .map((review) => (
            <div
              key={review._id}
              className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-violet-600 via-pink-600 to-yellow-600"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{review.title}</h3>
              <p className="text-white mb-2">{review.content}</p>
              <p className="text-white mb-4">{review.excerpt}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(review)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 border-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 border-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default ReviewList;
