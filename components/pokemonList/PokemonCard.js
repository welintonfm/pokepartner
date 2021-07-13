import React, { Component } from 'react';
import Axios from 'axios'

async function getPokemonData(pokemon_id, getPokemon, number){
    await Axios.get(`/api/getPokemon?pokemon_id=${pokemon_id}`).then((response) => {
        let pokemon = response.data 
        getPokemon({...pokemon, number: `#${number}` })
        return pokemon
    }).catch(err => {
      console.error(err)
      return
    })
}
const PokemonCard = (props) => {
    return(
        <li className="pokemon-card" key={props.name} onClick={async() => getPokemonData(props.url, props.getPokemon, props.number)}>
            <p className="pokemon-card-number">#{props.number}</p>
            <p className="pokemon-card-name">{props.name.replace("-", " ")}</p>
        </li>
    )
}

export default PokemonCard