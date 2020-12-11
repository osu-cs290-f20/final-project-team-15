import React from "react";
import mockData from "../mockdata.json";
import "../Post.css";

class Post extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8000/harvester/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((resJson) => {
        this.setState({ newData: resJson });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  constructor() {

    super();

    this.state = {
      newData: null
      /*
        filteredBloodType: ["A+", "B-"]


        newArray = []

        for element in newData:
          if element.blood_type in filteredBloodType and if element.race in filteredRace ... and___:
            newArray.append(element)



        [
          {
            "blood_type": "A+",
            "first_name": "Mark",
            "Race"
            ...
          },
          {
            "blood_type": "B-",
            "first_name": "Khai",
            ...
          }
        ]
      */
    };
  }

  render() {
    return (
      <div className="pageStyle">
        {this.state.newData
          ? this.state.newData.map((data) => {
              return (
                <div className="divPost">
                  <h2 className="fontStyle">
                    {data.first_name} {data.last_name}
                  </h2>
                  <p className="fontStyle">Age: {data.age}</p>
                  <p className="fontStyle">Blood Type: {data.blood_type}</p>
                  <p className="fontStyle">Gender: {data.gender}</p>
                  <p className="fontStyle">Credit Card: {data.credit_card}</p>
                  <p className="fontStyle">Phone Number: {data.phone_number}</p>
                  <p className="fontStyle">Race: {data.race}</p>
                </div>
              );
            })
          : "LOADING"}
        {/* first name, last name, age, blood type*/}
      </div>
    );
  }
}

export default Post;
