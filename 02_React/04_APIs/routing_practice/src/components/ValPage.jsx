import React from "react";
import { useParams } from "react-router";

const ValPage = () => {
  const { val } = useParams();
  let content;

  console.log(`Num is ${val}, with type ${typeof val}`);
  isNaN(val) ? content=`The word is: ${val}` : content=`The number is: ${val}`;

  return <h1 style={{textAlign:'center'}}>{content}</h1>;
};

export default ValPage;
