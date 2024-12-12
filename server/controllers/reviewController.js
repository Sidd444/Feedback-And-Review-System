const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const review = await newReview.save();
    res.status(201).json(review);
  } catch (err) {
    console.log("server error " + err);
    res.status(400).json({ error: err.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('author', 'name');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.approveReviewById = async (req, res) => {
  console.log("server reached");
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    review.approved = true;
    await review.save();
    res.status(200).json({ message: 'Review approved', review });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).send({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching review' });
  }
};

exports.updateReviewById = async (req, res) => {
  console.log("server reached");
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    if (review.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'User not authorized' });
    }
    review.title = req.body.title || review.title;
    review.content = req.body.content || review.content;
    review.excerpt = req.body.excerpt || review.excerpt;
    await review.save();
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      console.log("Review not found");
      return res.status(404).json({ error: 'Review not found' });
    }

    // if (review.author.toString() !== req.user.id) {
    //   console.log("User not authorized");
    //   return res.status(403).json({ error: 'User not authorized' });
    // }

    await Review.findByIdAndDelete(req.params.id);
    console.log("Review deleted successfully");
    res.status(200).json({ message: 'Review deleted' });
  } catch (err) {
    console.error("Error deleting review:", err.message);
    res.status(400).json({ error: err.message });
  }
};
