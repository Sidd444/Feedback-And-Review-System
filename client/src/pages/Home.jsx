import React, { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import { Link } from 'react-router-dom';
import routes from '../routes';

const Home = () => {
  const { reviews } = useContext(ReviewContext);
  
  return (
    <div className="max-w-3xl mx-auto p-6 h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Welcome to the Reviewer!
      </h2>
      <h3 className='text-white mt-3 mb-3 text-center'>Reviews Approved By admin will appear here</h3>
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">If Reviews don't appear then Relogin to the site</p>
      ) : (
        <div className="space-y-8 max-h-[70vh] overflow-y-auto">
          {reviews.map((review) => review.approved && (
            <div key={review.id} className="bg-black p-6 rounded-xl shadow-md border-2 border-gray-300 border-3 transition-transform transform hover:scale-105 bg-gradient-to-r from-red-600 via-pink-600 to-yellow-600">
              <h3 className="text-2xl font-bold text-white mb-2">{review.title}</h3>
              <p className="text-gray-100 mb-4">{review.content}</p>
              <p className="text-gray-200 mb-4 italic">{review.excerpt}</p>
              <p className="text-sm text-gray-300 mb-2">
                Created by <span className="font-semibold">{review.author.name}</span> on {new Date(review.createdAt).toLocaleString()}
              </p>
              {/* <Link 
                to={`${routes.reviewDetail.replace(':id', review.id)}`} 
                className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Review
              </Link> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
