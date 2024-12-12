import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import SERVER_URL from "../config";
import { toast } from 'react-hot-toast';

export const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, [reviews]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/api/reviews`);
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews", error);
    }
  };

  const fetchReviewById = async (id) => {
    try {
      const res = await axios.get(`${SERVER_URL}/api/reviews/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching review", error);
    }
  };

  const updateReview = async (id, updatedReview, token) => {
    try {
      const res = await axios.put(`${SERVER_URL}/api/reviews/${id}`, updatedReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews(reviews.map(review => review._id === id ? res.data : review));
      toast.success("Review edited");
    } catch (error) {
      toast.error("Please relogin");
      console.error("Error updating review", error);
    }
  };

  // const deleteReview = async (id, token) => {
  //   try {
  //     await axios.delete(`${SERVER_URL}/api/reviews/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setReviews(reviews.filter(review => review._id !== id));
  //     toast.success("Review deleted");
  //   } catch (error) {
  //     toast.error("Please relogin");
  //     console.error("Error deleting review", error);
  //   }
  // };

  // const approveReview = async (id, token) => {
  //   try {
  //     const res = await axios.patch(`${SERVER_URL}/api/reviews/${id}/approve`, {}, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setReviews(reviews.map(review => review._id === id ? res.data.review : review));
  //     toast.success("Review approved");
  //   } catch (error) {
  //     toast.error("Please relogin");
  //     console.error("Error approving review", error);
  //   }
  // };

  const deleteReview = async (id) => {
    try {
      await axios.delete(`${SERVER_URL}/api/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id));
      toast.success("Review deleted");
    } catch (error) {
      toast.error("Error deleting review");
      console.error("Error deleting review", error);
    }
  };
  
  const approveReview = async (id) => {
    try {
      const res = await axios.patch(`${SERVER_URL}/api/reviews/${id}/approve`);
      setReviews(reviews.map((review) => (review._id === id ? res.data.review : review)));
      toast.success("Review approved");
    } catch (error) {
      toast.error("Error approving review");
      console.error("Error approving review", error);
    }
  };
  
  

  return (
    <ReviewContext.Provider value={{ reviews, fetchReviewById, updateReview, deleteReview, approveReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
