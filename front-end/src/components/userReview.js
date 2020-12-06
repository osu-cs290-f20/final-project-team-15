import React from "react";
import mockReview from "../mockReview.json"

function userReview(props) {
    let review = mockReview;
    return (
        <div style={userReviewStyle}>
            <h1 style={{ color: "#FFFFFF" }}>User Reviews</h1>
        </div>
  );
}

const userReviewStyle = {
  padding: 10,
  margin: 10,
  backgroundColor: "#242526",
  borderRadius: 10
};

export default userReview;
