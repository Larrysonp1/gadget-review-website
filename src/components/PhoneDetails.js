import React, { useState, useEffect } from 'react';

function PhoneDetails({ match }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const phoneId = match.params.id; // Assuming you're using React Router

  useEffect(() => {
    // Fetch reviews from the backend
    fetch(`/phones/${phoneId}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [phoneId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const review = {
      content: newReview,
      rating: rating,
    };

    // Submit the review to the backend
    fetch(`/phones/${phoneId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then(response => response.json())
      .then(data => {
        setReviews([...reviews, data]);
        setNewReview('');
        setRating(0);
      })
      .catch(error => console.error('Error submitting review:', error));
  };

  return (
    <div>
      <h1>Phone Details</h1>
      {/* Add phone details, specifications, and reviews here */}
      
      <h2>User Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating} / 5</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>

      <h3>Submit Your Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          required
        />
        <br />
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default PhoneDetails; 