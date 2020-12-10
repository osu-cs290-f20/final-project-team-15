import React from "react";
import mockReview from "../mockReview.json";
import {AiFillStar} from "react-icons/ai"

function userReview(props) {
  let review = mockReview;
  let post = review.map((review) => (
    <div style={reviewerStyle}>
      <h2 style={fontStyle}>
        {review.first_name} {review.last_name} <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </h2>
      <p style={fontStyle}>{review.description}</p>
    </div>
  ));
  return (
    <div style={userReviewStyle}>
      <h1 style={{ color: "#FFFFFF" }}>User Reviews</h1>
      <div style={postStyle}>{post}</div>
    </div>
  );
}

const userReviewStyle = {
  padding: 10,
  margin: 10,
  backgroundColor: "#242526",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  color: "#111111",
  fontColor: "#FFFFFF"
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
    borderRadius: 10
    
}

const postStyle = {
    
}
export default userReview;

