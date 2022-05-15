import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productObj, setProductObj] = useState();
  const { prodID } = useParams();

  useEffect(() => {
    setProductObj(null);
    console.log(`prodID: ${prodID}`);
    const getOneURL = `http://localhost:8000/api/products/${prodID}`;
    axios
      .get(getOneURL)
      .then((youAreAWizardHarry) => {
        console.log("That's magic, Harry!", youAreAWizardHarry.data);
        setProductObj(youAreAWizardHarry.data);
      })
      .catch((uhoh) => console.log("Blimey, Harry!", uhoh));
  }, [prodID]);

  return (
    <fieldset>
      <legend>ProductDetail.jsx</legend>
      {(productObj && (
        <>
          <h1>Title: {productObj.oneProduct.title}</h1>
          <h1>Price: {productObj.oneProduct.price}</h1>
          <h1>Description: {productObj.oneProduct.description}</h1>
        </>
      )) ||
        (prodID && <h3>Loading data for ID: {prodID}</h3>) || (
          <h3>Loading...</h3>
        )}
    </fieldset>
  );
};

export default ProductDetail;
