import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../config';

const ReviewDetail = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/reviews/${id}`);
        setReview(res.data);
      } catch (error) {
        console.error("Error fetching review", error);
      }
    };
    fetchReview();
  }, [id]);

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{review.title}</h2>
      <p>{review.content}</p>
    </div>
  );
};

export default ReviewDetail;
