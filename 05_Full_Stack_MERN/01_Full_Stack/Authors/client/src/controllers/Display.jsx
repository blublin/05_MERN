import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = (props) => {
  const [authorState, setAuthorState] = useState([]);
  const [errState, setErrState] = useState("");

  const {runEffect, flipSwitch} = props;

  const getAllURL = "http://localhost:8000/api/authors";

  // Set useEffect update variable
  useEffect(() => {
    axios
      .get(getAllURL)
      .then((twoChains) => {
        console.log(
          `Show me the magic data coming back for get all`,
          twoChains.data
        );
        setAuthorState(twoChains.data);
      })
      .catch((uhoh) => {
        console.log("Something went hella wrong", uhoh);
        setErrState(uhoh);
      });
  }, [runEffect]);

  const deleteHandler = a_id => {
    axios
      .delete(`${getAllURL}/${a_id}`)
      .catch(wellf___ => console.log("God damnit, private! How'd you screw this up!", wellf___))
    flipSwitch();
  }

  return (
    <fieldset>
      <legend>Display.jsx</legend>
      {(authorState &&
        authorState.map((author, idx) => {
          return (
            <p key={idx}>
              <Link to={`/${author._id}`}>{author.name}</Link>
              &emsp;
              <button onClick={(_)=> deleteHandler(author._id)}>Delete</button>
            </p>
          );
        })) ||
        (errState && <h3>{errState}</h3>)}
    </fieldset>
  );
};

export default Display;
