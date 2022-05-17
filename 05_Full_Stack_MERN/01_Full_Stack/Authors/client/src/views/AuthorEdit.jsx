import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const AuthorEdit = () => {
  const { author_id } = useParams();
  const [formObj, setFormObj] = useState({
    title:"",
    price:0,
    description:""
  });

  // URL for API call
  const apiURL = 'http://localhost:8000/api/authors'

  useEffect(() => {
    setFormObj(null);
    const getOneURL = `${apiURL}/${author_id}`;
    axios
      .get(getOneURL)
      .then((youAreAWizardHarry) => {
        console.log("That's magic, Harry!", youAreAWizardHarry.data);
        const {title, price, description} = youAreAWizardHarry.data
        setFormObj({title, price,  description});
      })
      .catch((uhoh) => console.log("Blimey, Harry!", uhoh));
  }, []);

  // Function to update each field
  const updateFormFields = event => {
    const {name, value} = event.target;
    setFormObj({
      ...formObj,
      [name]: value
    });
  }

  // Function to submit formm data to API
  const submitHandler = event => {
    event.preventDefault();
    const {title, price, description} = formObj
    const updateOneURL = `${apiURL}/${author_id}`
    axios
      .put(updateOneURL, {
        title, price, description
      })
      .then(updatedS___ => {
        console.log("Yo, this s**t got updated!", updatedS___.data);
      })
      .catch(err => console.log(`Ya dun goofed! ${err}`))
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
        <h3 style={{marin: "10px auto"}}>Update Author</h3>
        {(
        formObj  &&
        <form style={{margin:"5px auto 10px", width:"400px"}} onSubmit={submitHandler}>
          <div style={ fDiv }>
            <label htmlFor="title" style={{flex:"1"}}>Title</label>
            <input placeholder='Author Title' type="text" name="title" id="title"
            onChange={updateFormFields} value={formObj.title || "Loading..."}
            style={{flex:"2"}}/>
          </div>
          <div style={ fDiv }>
            <label htmlFor="price" style={{flex:"1"}}>Price</label>
            <input placeholder='Author Price' type="number" name="price" id="price"
            onChange={updateFormFields} value={formObj.price || "Loading..."}
            style={{flex:"2"}}/>
          </div>
          <div style={ fDiv }>
            <label htmlFor="description" style={{flex:"1"}}>Description</label>
            <input placeholder='Author Description' type="text" name="description" id="description"
            onChange={updateFormFields} value={formObj.description || "Loading..."}
            style={{flex:"2"}}/>
          </div>
          <input type="submit" value="Update!" />
        </form>
        )
        ||
        // Prevents errors trying to load state data
        <h3>Data Loading...</h3>
        }
    </fieldset>
    )
}

export default AuthorEdit