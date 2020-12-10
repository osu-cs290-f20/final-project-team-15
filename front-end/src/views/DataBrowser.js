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
      setBloodType(newGenderArr);

    }
    else
    {

      let newGenderArr = bloodType.filter(curr => curr != newGenderArr);
      console.log(newGenderArr);
      setBloodType(newGenderArr);

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
      setBloodType(newRaceArr);

    }
    else
    {

      let newRaceArr = bloodType.filter(curr => curr != checkedRace);
      console.log(newRaceArr);
      setBloodType(newRaceArr);

    }
    
  }

  return (
    <div myClass="DataBrowserPage">
      <Filter setFirstName={setFirstName} setLastName={setLastName} setAgeMin={setAgeMin} setAgeMax={setAgeMax} checkedBloodTypes={checkedBloodTypes} setPhoneNumber={setPhoneNumber} checkedGenders={checkedGenders} setCreditCard={setCreditCard} checkedRaces={checkedRaces} />

      <div>
        {/* <p>Min Age: {ageMin}</p>
        <p>Max Age: {ageMax}</p> */}
        <p>Blood Type: {bloodType}</p>
        <p>Last Name: {lastName}</p>
      </div>

      <Post />
    </div>

  )

}

export default DataBrowser;