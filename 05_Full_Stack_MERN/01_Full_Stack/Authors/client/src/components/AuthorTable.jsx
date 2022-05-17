import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = (props) => {
  const [authorState, setAuthorState] = useState([]);

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
      });
  }, [runEffect]);

  const deleteHandler = a_id => {
    axios
      .delete(`${getAllURL}/${a_id}`)
      .catch(wellf___ => console.log("God damnit, private! How'd you screw this up!", wellf___))
    flipSwitch();
  }

  return (
    <fieldset className="d-flex flex-column align-items-center">
      <legend>AuthorTableComponent.jsx</legend>
      <div className="col-4">
        <table className="table table-sm table-striped align-middle border border-3">
          <thead>
            <tr>
              <th><h4>Author</h4></th>
              <th><h4>Available Actions</h4></th>
            </tr>
          </thead>
          <tbody>
            {(authorState &&
              authorState.map((author, idx) => {
                return (
                  <tr key={idx}>
                    <td><h5>{author.authorName}</h5></td>
                    <td>
                      <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                      &nbsp;&nbsp;
                      <button onClick={(_)=> deleteHandler(author._id)}>Delete</button>
                    </td>
                  </tr>
                );
            }))}
          </tbody>
        </table>
      </div>
    </fieldset>
  );
};

export default Display;
