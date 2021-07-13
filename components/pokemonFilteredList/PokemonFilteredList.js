import React from 'react';
import PokemonList from '../pokemonList/PokemonList';
import {BiSearch} from 'react-icons/bi'

function filterPokemonsByName(intial_pokemons, search){
    const filtered_pokemons = intial_pokemons.filter(pokemon => pokemon.name.includes(search))
    return filtered_pokemons
}

function filterPokemonsByNumber(intial_pokemons, search){
    const filtered_pokemons = intial_pokemons.filter(pokemon => pokemon.url.includes(search))
    return filtered_pokemons
}

const PokemonFilteredList = (props) => {
    const teste = filterPokemonsByNumber(props.pokemons, "22")
    console.log(teste)
    return(
        <div className="pokemon-filtered-list">
            <div><input type="text" placeholder="name or number..."/><BiSearch /></div>
            
            <PokemonList pokemons={props.pokemons}></PokemonList>
        </div>
    )
}

export default PokemonFilteredList