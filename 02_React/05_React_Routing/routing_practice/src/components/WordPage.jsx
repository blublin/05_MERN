import React from "react";
import { useParams } from "react-router";

const WordPage = () => {
  const { word, color, bgcolor } = useParams();
  let content= `The word is: ${word}` 
  return <h1 style={{textAlign:'center', backgroundColor:bgcolor, color:color}}>{content}</h1>;
};

export default WordPage;
