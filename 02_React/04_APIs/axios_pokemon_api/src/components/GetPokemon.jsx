import React from "react";
import axios from 'axios';

const GetPokemon = (props) => {
  const { addPokes } = props;

  const getPokemon = (e) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then( response => {
        addPokes(response.data.results);
      })
  };

  return (
    <fieldset>
      <legend>GetPokemon</legend>
      <button onClick={getPokemon}>Get Pokemon!</button>
    </fieldset>
  );
};

export default GetPokemon;
