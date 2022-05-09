import React from 'react'

const DisplayPokemon = (props) => {
    const {pokes} = props
  return (
    <fieldset>
        <legend>DisplayPokemon</legend>
        <h3>Inside Display Pokemon</h3>
        <ul>
        {
            pokes.map( (poke,ind) => {
                return (
                    <li key={ind}
                    style={{textTransform:'capitalize'}}>{poke.name}</li>
                )
            })
        }
        </ul>
    </fieldset>
  )
}

export default DisplayPokemon