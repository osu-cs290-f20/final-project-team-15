import React from "react";
import mockData from "../mockdata.json";
import "../Post.css";

async function getUserData() {
  const response = await fetch("http://localhost:8000/harvester/", {
    method: "GET",
  });
  return response.json();
}

class Post extends React.Component {
  componentDidMount() {
    getUserData().then((e) => {
      console.log(e);
      this.setState({ newData: e });
    });
  }

  constructor() {
    super();

    this.state = {
      newData: {},
    };
  }
  // console.log(actualData)
  // let data = mockData;
  // let data = getUserData();
  render() {
    // let post = "";
    let post = Object.keys(this.state.newData).length === 0
      ? "" : this.state.newData.map((data) => {
          <div className="div">
            <h2 className="fontStyle">
              {data.first_name} {data.last_name}
            </h2>
            <p className="fontStyle">Age: {data.age}</p>
            <p className="fontStyle">Blood Type: {data.blood_type}</p>
          </div>;
        });
        console.log(post);
    return (
      <div className="pageStyle">
        {post}
        {/* first name, last name, age, blood type*/}
      </div>
    );
  }
}

export default Post;
