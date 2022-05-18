import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";
import HomeLink from "../components/HomeLink";

const Form = () => {
  const [edit, setEdit] = useState();
  const [pageFunc, setPageFunc] = useState("");

  const location = useLocation()
  
  const locationStr = location.pathname
  console.log(`Current location: ${locationStr}`);

  useEffect( () => {  
    if (locationStr.includes('edit')) {
      setPageFunc("Edit author");
      setEdit(true);
    }
    else if (locationStr.includes('new')) {
      setPageFunc("Add a new author");
      setEdit(false);
    }
  })
    
  return (
    <fieldset style={{ textAlign: "center", fontSize: "20px" }}>
      <legend>Form.jsx</legend>
      <HomeLink />
      <h3 style={{ marin: "10px auto" }}>{pageFunc}</h3>
      <AuthorForm edit={edit} setEdit={setEdit} />
    </fieldset>
  );
};

export default Form;
