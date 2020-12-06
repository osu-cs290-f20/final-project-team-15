import React from "react";
import mockData from "../mockdata.json";

function Post(props) {
  let data = mockData;
  let post = data.map((data) => (
    <div style={postStyle}>
      <h2 style={fontStyle}>
        Name: {data.first_name} {data.last_name}
      </h2>
      <p style={fontStyle}>Age: {data.age}</p>
      <p style={fontStyle}>Blood Type: {data.blood_type}</p>
    </div>
  ));
  return (
    <div style={pageStyle}>
      {post}
      {/* first name, last name, age, blood type*/}
    </div>
  );
}

const postStyle = {
  padding: 10,
  margin: 10,
  backgroundColor: "#242526",
  display: "inline-flex",
  flexDirection: "column",
  borderRadius: "10px",
  flexGrow: 0,
  width: 300,
  height: 300
};

const fontStyle = {
  padding: 10,
  margin: 10,
  color: "#FFFFFF",
  display: "block"
};

const pageStyle = {
    display: "flex",
    flexGrow: 2,
    alignCotent: "flex-start",
    flexWrap: "wrap"
};

export default Post;
