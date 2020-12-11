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
        this.setState({ originalArr: resJson});
      })
      .catch((e) => {
        console.log(e);
      });
  }

  constructor(props) {

    super(props);

    this.state = {
      newData: null,
      originalArr: null
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
    this.filterPosts = this.filterPosts.bind(this);
    this.postFilterCheck = this.postFilterCheck.bind(this);
  }

  

  postFilterCheck(post)
  {

    // Filter first name
    if (this.props.firstName !== "")
    {

      if(post.first_name.search(this.props.firstName) === -1)
      {

        return false;

      }

    }

    // Filter last name
    if (this.props.lastName !== "")
    {

      if(post.last_name.search(this.props.lastName) === -1)
      {

        return false;

      }

    }

    // Filter min age
    if (this.props.ageMin !== 0)
    {

      if(post.age < this.props.ageMin)
      {

        return false;

      }

    }

    // Filter max age
    if(this.props.ageMax !== 0)
    {

      if(post.age > this.props.ageMax)
      {

        return false;

      }

    }

    // Filter blood type
    if (Array.isArray(this.props.bloodType) && this.props.bloodType.length)
    {

      if(!this.props.bloodType.includes(post.blood_type))
      {

        return false;

      }

    }

    // Filter phone number
    if (this.props.phoneNumber !== "")
    {

      if(post.phoneNumber.search(this.props.phoneNumber) === -1)
      {

        return false;

      }

    }

    // Filter gender type
    if (Array.isArray(this.props.gender) && this.props.gender.length)
    {

      if(!this.props.gender.includes(post.gender))
      {

        return false;

      }

    }

    // Filter credit card number
    if (this.props.creditCard !== "")
    {

      if(post.credit_card.search(this.props.creditCard) === -1)
      {

        return false;

      }

    }

    // Filter race
    if (Array.isArray(this.props.race) && this.props.race.length)
    {

      if(!this.props.race.includes(post.race))
      {

        return false;

      }

    }

    return true;

  }

  filterPosts()
  {
    
    // No set state, don't want it to re-render
    this.state.newData = this.state.originalArr;

    let newArr = this.state.newData.filter(post => this.postFilterCheck(post));

    // Set filtered array to newData and reset filtering
    this.props.setFilterState(false);

    this.setState({
      newData: newArr,
    });
  }

  componentDidUpdate(prevProps) {

    if(prevProps.filterState !== this.props.filterState)
    {

      this.filterPosts();

    }

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
