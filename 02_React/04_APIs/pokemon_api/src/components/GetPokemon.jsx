import React from "react";

const GetPokemon = (props) => {
  const { addPokes } = props;

  const getPokemon = (e) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.results);
        addPokes(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <fieldset>
      <legend>GetPokemon</legend>
      <button onClick={getPokemon}>Get Pokemon!</button>
    </fieldset>
  );
};

export default GetPokemon;
