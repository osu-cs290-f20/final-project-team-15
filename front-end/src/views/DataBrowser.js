import React, { useState } from 'react';
import Filter from '../components/Filter';
import Post from '../components/Post';
import "../DataBrowser.css"

function DataBrowser()
{

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [ageMin, setAgeMin] = useState(0);
  const [ageMax, setAgeMax] = useState(0);

  const [bloodType, setBloodType] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState([]);

  const [creditCard, setCreditCard] = useState("");
  const [race, setRace] = useState([]);

  function checkedBloodTypes(checkedBloodType, checkState)
  {

    // If event is element being checked
    if(checkState)
    {

      let newBloodArr = bloodType;
      newBloodArr.push(checkedBloodType);
      console.log(newBloodArr);
      setBloodType(newBloodArr);

    }
    else
    {

      let newBloodArr = bloodType.filter(curr => curr != checkedBloodType);
      console.log(newBloodArr);
      setBloodType(newBloodArr);

    }
    
  }

  function checkedGenders(checkedGender, checkState)
  {

    // If event is element being checked
    if(checkState)
    {

      let newGenderArr = gender;
      newGenderArr.push(checkedGender);
      console.log(newGenderArr);
      setGender(newGenderArr);

    }
    else
    {

      let newGenderArr = gender.filter(curr => curr != checkedGender);
      console.log(newGenderArr);
      setGender(newGenderArr);

    }
    
  }

  function checkedRaces(checkedRace, checkState)
  {

    // If event is element being checked
    if(checkState)
    {

      let newRaceArr = race;
      newRaceArr.push(checkedRace);
      console.log(newRaceArr);
      setRace(newRaceArr);

    }
    else
    {

      let newRaceArr = race.filter(curr => curr != checkedRace);
      console.log(newRaceArr);
      setRace(newRaceArr);

    }
    
  }

  return (
    <div myClass="DataBrowserPage">
      <Filter setFirstName={setFirstName} setLastName={setLastName} setAgeMin={setAgeMin} setAgeMax={setAgeMax} checkedBloodTypes={checkedBloodTypes} setPhoneNumber={setPhoneNumber} checkedGenders={checkedGenders} setCreditCard={setCreditCard} checkedRaces={checkedRaces} />

      {/* <div>
        <p>Blood Type: {bloodType.join(', ')}</p>
        <p>Gender: {gender.join(', ')}</p>
        <p>Race: {race.join(', ')}</p>
      </div> */}
      
      <header className="posts-header">Posts</header>
      <Post />
    </div>

  )

}

export default DataBrowser;