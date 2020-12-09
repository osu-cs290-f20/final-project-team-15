import React from "react";
import mockData from "../mockdata.json";
import "../Post.css";



class Post extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8000/harvester/", {
      method: "GET",
    }).then((response) => response.json())
      .then((resJson) => {
        this.setState({ newData: resJson })
      })
      .catch((e) => {
        console.log(e);
      })
  }

  constructor() {
    super();

    this.state = {
      newData: null,
    };
  }
  render() {
    return (
      <div className="pageStyle">
        {this.state.newData ?
          this.state.newData.map((data) => {
            return (<div className="div">
              <h2 className="fontStyle">
                {data.first_name} {data.last_name}
              </h2>
              <p className="fontStyle">Age: {data.age}</p>
              <p className="fontStyle">Blood Type: {data.blood_type}</p>
            </div>)
          }) : "LOADING"}
        {/* first name, last name, age, blood type*/}
      </div>
    );
  }
}


export default Post;
