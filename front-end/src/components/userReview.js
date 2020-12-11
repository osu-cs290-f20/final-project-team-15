import React, {useState, useEffect} from "react";
import mockReview from "../mockReview.json";
import {AiFillStar} from "react-icons/ai";
import "../UserReview.css"
import ReactStars from "react-rating-stars-component";
import { Button, Col, Form } from "react-bootstrap";

function UserReview(props) {

  // User Review state
  const [rating, setRating] = useState(0);
  const [dateTime, setDateTime] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [name, setName] = useState("");

  const [dbReviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/reviews/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((resJson) => {
        // console.log(resJson);
        setReviews(resJson);
        // this.setState({ newData: resJson });
        // this.setState({ originalArr: resJson});
      })
      .catch((e) => {
        console.log(e);
      });
  }, [])

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

  function handleSubmit()
  {


    let userReviewJson = {

      full_name: name,
      title: reviewTitle,
      description: reviewBody,
      datetime: dateTime
  
    };

    fetch("http://localhost:8000/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userReviewJson),
    })
      .then((res) => {
        if (res.status === 500) {
          console.log("Missing a required field in payload");
        } else if (res.status === 201) {

          setName("");
          setReviewTitle("");
          setReviewBody("");
          setDateTime("");
          setRating(0);
          alert("Created Review");
          window.location.reload();
        }
      })
      .catch((e) => {
        // Something didn't work
        // console.log(e);
        alert("Could not communicate with server");
      });

  }

  return (
    
    <div style={userReviewStyle}>

      {/* <div>{post}</div> */}

      <h1 style={{ color: "#FFFFFF" }}>User Reviews</h1>
      
      {dbReviews ? dbReviews.map((review) => {
        return(
          <div style={reviewerStyle}>
            <h2 style={fontStyle}>
              {review.full_name} <ReactStars edit={false} value={5} size={30}/>
            </h2>
            <p style={fontStyle}>{review.description}</p>
          </div>
        );
      }) : ""}
      
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
          <Form.Label style={ratingStarsLabel}>Add a written review</Form.Label>
          <Form.Control as="textarea" placeholder="What did you like or dislike? Can you explain your decision for the rating?" onChange={(event) => setReviewBody(event.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label style={ratingStarsLabel}>Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" onChange={(event) => setName(event.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={() => handleSubmit()}>
          Submit
        </Button>

      </Form>
    
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


