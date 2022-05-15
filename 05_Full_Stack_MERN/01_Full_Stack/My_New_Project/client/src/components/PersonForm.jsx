import React, { useState } from "react";
import axios from "axios";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post(`http://localhost:${process.env.PORT || 8000}/api/people`, {
        firstName,
        lastName,
      })
      .then((res) => console.log(`Axios response data:`, res.data))
      .catch((err) => console.log(err));
  };
  //onChange to update firstName and lastName
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <br />
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </p>
      <p>
        <label>Last Name</label>
        <br />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default PersonForm;
