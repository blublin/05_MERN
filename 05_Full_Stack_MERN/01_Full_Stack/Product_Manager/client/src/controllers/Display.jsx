import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = (props) => {
  const [productState, setProductState] = useState([]);
  const [errState, setErrState] = useState("");

  const {runEffect, flipSwitch} = props;

  const getAllURL = "http://localhost:8000/api/products";

  // Set useEffect update variable
  useEffect(() => {
    axios
      .get(getAllURL)
      .then((twoChains) => {
        console.log(
          `Show me the magic data coming back for get all`,
          twoChains.data
        );
        setProductState(twoChains.data);
      })
      .catch((uhoh) => {
        console.log("Something went hella wrong", uhoh);
        setErrState(uhoh);
      });
  }, [runEffect]);

  const deleteHandler = pid => {
    axios
      .delete(`${getAllURL}/${pid}`)
      .catch(wellf___ => console.log("God damnit, private! How'd you screw this up!", wellf___))
    flipSwitch();
  }

  return (
    <fieldset>
      <legend>Display.jsx</legend>
      {(productState &&
        productState.map((product, idx) => {
          return (
            <p key={idx}>
              <Link to={`/${product._id}`}>{product.title}</Link>
              &emsp;
              <button onClick={(_)=> deleteHandler(product._id)}>Delete</button>
            </p>
          );
        })) ||
        (errState && <h3>{errState}</h3>)}
    </fieldset>
  );
};

export default Display;
