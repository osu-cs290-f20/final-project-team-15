import React, {useState, useEffect} from "react";
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
      setRating(5);

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
      datetime: new Date().toLocaleString()
  
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
    
    <div className="userReview">

      <h1 className="header">User Reviews</h1>
      
      {dbReviews ? dbReviews.map((review) => {
        return(
          <div className="reviewerStyle">
            <div id="stars"><ReactStars edit={false} value={5} size={30}/></div>
            <div id="title">{review.title}</div>
            <div className="fontStyle">
              <span id="name">{review.full_name}</span> &nbsp;&nbsp; <span id="datetime">{review.datetime}</span> 
            </div>
            <p className="fontStyle">{review.description}</p>
          </div>
        );
      }) : ""}
      
      <Form>

        <Form.Group controlId="starsField">
          <Col>
            <Form.Label className="ratingStarsLabel">Overall Rating</Form.Label>
            <ReactStars
              count={5}
              onChange={(newRating) => handleRating(newRating)}
              value={rating}
              size={24}
              activeColor="#ffd700"
            />
          </Col>
        </Form.Group>
        
        <Form.Group controlId="titleField">
          <Col>
            <Form.Label className="ratingStarsLabel">Add a Headline</Form.Label>
            <Form.Control className="TextFields" type="text" placeholder="What's most important to know?" onChange={(event) => setReviewTitle(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group controlId="descriptionField">
          <Col>
            <Form.Label className="ratingStarsLabel">Add a Written Review</Form.Label>
            <Form.Control className="TextFields" as="textarea" placeholder="What did you like or dislike? Can you explain your decision for the rating?" onChange={(event) => setReviewBody(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group controlId="nameField">
          <Col>
            <Form.Label className="ratingStarsLabel">Name</Form.Label>
            <Form.Control className="TextFields" type="text" placeholder="Full Name" onChange={(event) => setName(event.target.value)} />
          </Col>
        </Form.Group>

        <Col>
          <Button variant="primary" type="button" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Col>
      </Form>
    
    </div>
  );
}



export default UserReview;


