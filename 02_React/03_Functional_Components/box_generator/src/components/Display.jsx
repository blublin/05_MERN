import React from "react";

const Display = (props) => {
  const { colorObjs } = props;
//   console.log(`Color Objects Array in Display: ${colorObjs}`)

  return (
      <fieldset style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap"}}>
          <legend>Display</legend>
          {
            colorObjs.map( (colObj, ind) => {
                console.log("Color Object in Display Map:", colObj);
                return(
                    <div key={ind}
                        style={{
                        backgroundColor: colObj.color,
                        height: colObj.dimension+'px',
                        width: colObj.dimension+'px',
                        textAlign: 'center',
                        fontSize: '30px',
                        margin: "5px"}}>
                        {colObj}
                    </div>
                )
            })
          }
      </fieldset>
  );
};

export default Display;
