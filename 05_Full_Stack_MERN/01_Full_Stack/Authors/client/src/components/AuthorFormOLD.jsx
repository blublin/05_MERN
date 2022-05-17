import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'

const AuthorForm = (props) => {
    const locationStr = useLocation().pathname
    console.log(`Current location: ${locationStr}`);

    const {authorName, setName, dbErrors, setDBErrors, submitHandler, cancelNew, baseAPIURL, author_id, edit} = props

    useEffect(() => {
        if (edit) {
          setName(null);
            const getOneURL = `${baseAPIURL}/${author_id}`;
            axios
              .get(getOneURL)
              .then((youAreAWizardHarry) => {
                console.log("That's magic, Harry!", youAreAWizardHarry.data);
                setName(youAreAWizardHarry.data.name);
              })
              .catch((scaryBad) => {
                console.log(scaryBad.response.data.errors);
                setDBErrors(scaryBad.response.data.errors);
              });
        }
      }, []);

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
      <button onClick={cancelNew}>Cancel</button>
      &nbsp;&nbsp;
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthorForm;
