import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AuthorDetail = () => {
  const [authorObj, setAuthorObj] = useState();
  const { author_id } = useParams();
  const navigate = useNavigate();
  
  const oneURL = `http://localhost:8000/api/authors/${author_id}`;
  
  useEffect(() => {
    setAuthorObj(null);
    console.log(`author_id: ${author_id}`);
    axios
      .get(oneURL)
      .then((youAreAWizardHarry) => {
        console.log("That's magic, Harry!", youAreAWizardHarry.data);
        setAuthorObj(youAreAWizardHarry.data);
      })
      .catch((uhoh) => console.log("Blimey, Harry!", uhoh));
  }, [author_id]);

  const deleteAuthor = (event) => {
    axios
      .delete(oneURL)
      .then( avadaKedavra => {
        setAuthorObj(null)
        navigate("/");
      })
      .catch( goofed => console.log("Ya goofed, ya dingus", goofed))
  }

  return (
    <fieldset>
      <legend>AuthorDetail.jsx</legend>
      {(authorObj && (
        <>
          <h1>Title: {authorObj.title}</h1>
          <h1>Price: ${authorObj.price}</h1>
          <h1>Description: {authorObj.description}</h1>
          <div>
            <p>
              <Link to={`/${author_id}/edit`}>Edit</Link>
              &emsp;
              <button onClick={deleteAuthor}>Delete</button>
              </p>
          </div>
        </>
      )) ||
        (author_id && <h3>Loading data for ID: {author_id}</h3>) || (
          <h3>Loading...</h3>
        )}
    </fieldset>
  );
};

export default AuthorDetail;
