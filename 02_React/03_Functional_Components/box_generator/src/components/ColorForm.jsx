import React, { useState } from "react";

const ColorForm = (props) => {
  const [colorObj, sC] = useState({
      color:"",
      dimension:""
  });
  const { colorObjs, sCs } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    if (colorObj.color && colorObj.dimension) {
        sCs([
            ...colorObjs,
            colorObj
        ]);
        sC({
            color:"",
            dimension:""
        });
        console.log(`Color Objects after update in form: ${colorObjs}`)
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name} || Value: ${value}`);
    sC({
        ...colorObj,
        [name]:value
    });
  };

  return (
    <fieldset>
      <legend>Add Color Box</legend>
      <form onSubmit={submitHandler}>
        <p>
          Color:
          <input onChange={inputHandler}
          name="color"
          type="text"
          value={colorObj.color}/>
        </p>
        <p>
          Dimension:
          <input onChange={inputHandler}
          name="dimension"
          type="number"
          value={colorObj.dimension}/>
        </p>
        <button>Submit</button>
      </form>
    </fieldset>
  );
};

export default ColorForm;
