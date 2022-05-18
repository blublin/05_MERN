import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AuthorForm = (props) => {

  const [authorName, setName] = useState("");
  const [dbErrors, setDBErrors] = useState({});

  const navigate = useNavigate();
  const { author_id } = useParams();

  const { edit } = props;

  // Local variables
  let submitValue = edit ? "Update" : "Submit";
  const baseAPIURL = "http://localhost:8000/api/authors";

  useEffect(() => {
    if (edit) {
      console.log("Triggered Author Form useEffect")
      setName(null);
      const getOneURL = `${baseAPIURL}/${author_id}`;
      axios
        .get(getOneURL)
        .then((youAreAWizardHarry) => {
          console.log("That's magic, Harry!", youAreAWizardHarry.data);
          setName(youAreAWizardHarry.data.authorName);
        })
        .catch((scaryBad) => {
          console.log(scaryBad.response.data.errors);
          if (scaryBad.response.data.errors) {
            setDBErrors(scaryBad.response.data.errors);
          }
          else {
            navigate("/new")
          }
        });
    }
  },[edit]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (edit){
      // Update
      axios
      .put(`${baseAPIURL}/${author_id}`, { authorName })
      .then((data) => {
        console.log("You updated an author!", data.data);
        navigate("/");
      })
      .catch((scaryBad) => {
        console.log(scaryBad.response.data.errors);
        setDBErrors(scaryBad.response.data.errors);
      });
    }
    else {
      // Create
      axios
      .post(baseAPIURL, { authorName })
      .then((data) => {
        console.log("You created an author!", data.data);
        setName("");
        navigate("/");
      })
      .catch((scaryBad) => {
        console.log(scaryBad.response.data.errors);
        setDBErrors(scaryBad.response.data.errors);
      });
    }
  };

  const cancelNew = (event) => {
    event.preventDefault();
    setName("");
    navigate("/");
  };


  const fDiv = {
    backgroundColor: "gray",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    border: "2px solid black",
  };

  return (
    <form
      style={{ margin: "5px auto 10px", width: "400px" }}
      onSubmit={submitHandler}
    >
      <div style={fDiv}>
        <label htmlFor="authorName" style={{ flex: "1" }}>
          Name
        </label>
        <input
          placeholder="Author Name"
          type="text"
          name="authorName"
          id="authorName"
          onChange={(e) => setName(e.target.value)}
          value={authorName}
          style={{ flex: "2" }}
        />
      </div>
      {dbErrors && dbErrors.authorName && (
        <p style={{ color: "red", fontSize: "14px" }}>
          {dbErrors.authorName.message}
        </p>
      )}
      <button type="submit">{submitValue}</button>
      &nbsp;&nbsp;
      <button onClick={cancelNew}>Cancel</button>
    </form>
  );
};

export default AuthorForm;
