import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {
  // Hold form data
  const [formObj, setFormObj] = useState({
    title:"",
    price:0,
    description:""
  });

  const {flipSwitch} = props;

  // URL for API call
  const createURL = 'http://localhost:8000/api/products'

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
    axios
      .post(createURL, {
        title, price, description
      })
      .then(data => {
        console.log({data})
        resetForm();
      })
      .catch(err => console.log(`Ya dun goofed! ${err}`))
      flipSwitch();
  }

  // Reset form data
  const resetForm = () => {
    setFormObj({
      title:"",
      price:0,
      description:""
    });
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
        <h3 style={{marin: "10px auto"}}>Create New Product</h3>
        <form style={{margin:"5px auto 10px", width:"400px"}} onSubmit={submitHandler}>
          <div style={ fDiv }>
            <label htmlFor="title" style={{flex:"1"}}>Title</label>
            <input placeholder='Product Title' type="text" name="title" id="title"
            onChange={updateFormFields} value={formObj.title}
            style={{flex:"2"}}/>
          </div>
          <div style={ fDiv }>
            <label htmlFor="price" style={{flex:"1"}}>Price</label>
            <input placeholder='Product Price' type="number" name="price" id="price"
            onChange={updateFormFields} value={formObj.price}
            style={{flex:"2"}}/>
          </div>
          <div style={ fDiv }>
            <label htmlFor="description" style={{flex:"1"}}>Description</label>
            <input placeholder='Product Description' type="text" name="description" id="description"
            onChange={updateFormFields} value={formObj.description}
            style={{flex:"2"}}/>
          </div>
          <input type="submit" value="Create!" />
        </form>
    </fieldset>
    )
}

export default Form