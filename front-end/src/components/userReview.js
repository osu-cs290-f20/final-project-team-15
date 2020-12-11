import React, {useState} from "react";
import mockReview from "../mockReview.json";
import {AiFillStar} from "react-icons/ai";
import "../UserReview.css"
import ReactStars from "react-rating-stars-component";
import { Button, Col, Form } from "react-bootstrap";

function UserReview(props) {

  // User Review state
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [name, setName] = useState("");

  function handleRating(newRating)
  {

    if(newRating !== 5)
    {

      alert("Only 5* ratings are allowed!!!");

    }
    else
    {

      setRating(newRating);

    }
    
  }

  // let review = mockReview;
  // let post = review.map((review) => (
  //   <div style={reviewerStyle}>
  //     <h2 style={fontStyle}>
  //       {review.first_name} {review.last_name} <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //     </h2>
  //     <p style={fontStyle}>{review.description}</p>
  //   </div>
  // ));
  return (
    
    <div style={userReviewStyle}>
      <h1 style={{ color: "#FFFFFF" }}>User Reviews</h1>
      <Form>

        <Form.Group>
          <Form.Label style={ratingStarsLabel}>Overall Rating</Form.Label>
          <ReactStars
            count={5}
            onChange={(newRating) => handleRating(newRating)}
            size={24}
            activeColor="#ffd700"
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Label style={ratingStarsLabel}>Add a Headline</Form.Label>
          <Form.Control type="text" placeholder="What's most important to know?" onChange={(event) => setReviewTitle(event.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label style={ratingStarsLabel}>Add a Headline</Form.Label>
          <Form.Control as="textarea" placeholder="What did you like or dislike? Can you explain your decision for the rating?" onChange={(event) => setReviewBody(event.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label style={ratingStarsLabel}>Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" onChange={(event) => setName(event.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      

      <p>{rating}</p>
      <p>{reviewTitle}</p>
      <p>{name}</p>
      <p>{reviewBody}</p>
      <br />
    </div>
  );
}

const ratingStarsLabel = {
  color: "white",
  fontSize: 20,
}

const userReviewStyle = {
  padding: 10,
  margin: 10,
  backgroundColor: "#242526",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  color: "#111111",
  fontColor: "#FFFFFF",
  boxShadow: "0 -2px 10px rgba(0, 0, 0, 1)"
};

const fontStyle = {
    padding: 10,
    margin: 10,
    display: "inline-flex",
    color: "#FFFFFF",
    borderRadius: 10
    
};

const reviewerStyle = {
    backgroundColor: "#18191A",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 1)"
    
}

export default UserReview;

