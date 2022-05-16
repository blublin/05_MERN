import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ProductDetail = () => {
  const [productObj, setProductObj] = useState();
  const { prodID } = useParams();
  const navigate = useNavigate();
  
  const oneURL = `http://localhost:8000/api/products/${prodID}`;
  
  useEffect(() => {
    setProductObj(null);
    console.log(`prodID: ${prodID}`);
    axios
      .get(oneURL)
      .then((youAreAWizardHarry) => {
        console.log("That's magic, Harry!", youAreAWizardHarry.data);
        setProductObj(youAreAWizardHarry.data);
      })
      .catch((uhoh) => console.log("Blimey, Harry!", uhoh));
  }, [prodID]);

  const deleteProduct = (event) => {
    axios
      .delete(oneURL)
      .then( avadaKedavra => {
        setProductObj(null)
        navigate("/");
      })
      .catch( goofed => console.log("Ya goofed, ya dingus", goofed))
  }

  return (
    <fieldset>
      <legend>ProductDetail.jsx</legend>
      {(productObj && (
        <>
          <h1>Title: {productObj.title}</h1>
          <h1>Price: ${productObj.price}</h1>
          <h1>Description: {productObj.description}</h1>
          <div>
            <p>
              <Link to={`/${prodID}/edit`}>Edit</Link>
              &emsp;
              <button onClick={deleteProduct}>Delete</button>
              </p>
          </div>
        </>
      )) ||
        (prodID && <h3>Loading data for ID: {prodID}</h3>) || (
          <h3>Loading...</h3>
        )}
    </fieldset>
  );
};

export default ProductDetail;
