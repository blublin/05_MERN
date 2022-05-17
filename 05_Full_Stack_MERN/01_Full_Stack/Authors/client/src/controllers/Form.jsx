import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {
  // Hold form data
  const [name, setName] = useState("");
  const [dbErrors, setDBErrors] = useState({});

  const {flipSwitch} = props;

  // URL for API call
  const createURL = 'http://localhost:8000/api/authors'

  // Function to submit formm data to API
  const submitHandler = event => {
    event.preventDefault();
    axios
      .post(createURL, {name})
      .then(data => {
        console.log("You did well!", data.data)
        setName("");
        flipSwitch();
      })
      .catch(scaryBad => {
        console.log(scaryBad.response.data.errors)
        setDBErrors(scaryBad.response.data.errors)
      })
  }


  const fDiv = {
    backgroundColor:'gray',
    marginBottom:"10px",
    display: "flex",
    alignItems:"center",
    justifyContent:"space-evenly",
    border:"2px solid black"
  }

  return (
    <fieldset style={{ textAlign:"center", fontSize:"20px"}}>
        <legend>Form.jsx</legend>
        <h3 style={{marin: "10px auto"}}>Add Author</h3>
        <form style={{margin:"5px auto 10px", width:"400px"}} onSubmit={submitHandler}>
          <div style={ fDiv }>
            <label htmlFor="name" style={{flex:"1"}}>Name</label>
            <input placeholder='Author Name' type="text" name="name" id="name"
            onChange={e => setName(e.target.value)} value={name}
            style={{flex:"2"}}/>
          </div>
            {
              dbErrors && dbErrors.name &&
              <p style={{color:'red', fontSize:"14px"}}>{dbErrors.name.message}</p>
            }
          <input type="submit" value="Create!" />
        </form>
    </fieldset>
    )
}

export default Form