import React from "react";
import { useLocation } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";
import HomeLink from "../components/HomeLink";

const Form = () => {

  const location = useLocation()
  
  const locationStr = location.pathname
  console.log(`Current location: ${locationStr}`);


  let pageFunc, edit;
  if (locationStr.includes('edit')) {
    pageFunc = "Edit author";
    edit = true;
  }
  else if (locationStr.includes('new')) {
    pageFunc = "Add a new author";
    edit = false;
  }

  return (
    <fieldset style={{ textAlign: "center", fontSize: "20px" }}>
      <legend>Form.jsx</legend>
      <HomeLink />
      <h3 style={{ marin: "10px auto" }}>{pageFunc}</h3>
      <AuthorForm edit={edit}/>
    </fieldset>
  );
};

export default Form;
