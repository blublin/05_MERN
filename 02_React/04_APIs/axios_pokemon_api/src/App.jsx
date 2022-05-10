import './App.css';
import GetPokemon from './components/GetPokemon';
import DisplayPokemon from './components/DisplayPokemon';
import {useState} from 'react';

function App() {
  const [pokes, setPokes] = useState([]);

  const addPokes = (pokeStrings) => setPokes(...pokes,pokeStrings);

  return (
    <fieldset>
      <legend>App</legend>
      <h3>Inside App</h3>
      <GetPokemon addPokes={addPokes} />
      <DisplayPokemon pokes={pokes} />
    </fieldset>
  );
}

export default App;
